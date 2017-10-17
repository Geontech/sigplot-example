type BufferCallback = ((buffer: Array<number>) => void);

export abstract class SignalBase {
    protected _frameSize:    number;
    protected _buffer:       Array<number>;
    protected _callback:     BufferCallback;
    protected _interval:     NodeJS.Timer;
    protected _updateRateHz: number;
    protected _period_ms:    number;

    constructor() {
        this._frameSize = 8192;
        this._buffer = [];
        this._callback = null;
        this._interval = null;
    }

    set frameSize(v: number) {
        this._frameSize = v;
        this._updateSignal();
    }

    get frameSize(): number { return Math.round(this._frameSize); }

    get started(): boolean { return (this._interval && this._callback !== null); }

    set updateRateHz (v: number) {
        this._updateRateHz = Math.round(v);
        this._period_ms = 1000.0 / this._updateRateHz;

        if (this.started) {
            const cb: BufferCallback = this._callback;
            this.stop();
            this.start(cb);
        }
    }

    get updateRateHz (): number { return this._updateRateHz; }

    get period_ms (): number { return this._period_ms; }

    get samplesPerSecond (): number { return this.frameSize * this.updateRateHz; }

    start (callback: BufferCallback) {
        if (!this.started) {
            // Save the callback
            // Set the loop interval
            this._callback = callback;
            this._interval = global.setInterval(() => this._loop(), this.period_ms);
        }
    }

    stop () {
        global.clearInterval(this._interval);
        this._callback = null;
        this._interval = null;
    }

  /**
   * Calculate sample # N
   *
   */
   abstract getSample(N: number): number;

   protected _updateSignal (): void {
       this._buffer.length = 0;
       for (let i = 0; i < this.frameSize; i++) {
           this._buffer[i] = this.getSample(i);
       }
   }

   protected _loop () {
       this._updateSignal();
       this._callback(this._buffer.slice());
   }

}
