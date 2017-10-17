import { SignalBase } from './signal-base';

export class Noise extends SignalBase {
    getSample (v: number): number { return 2.0 * Math.random() - 1.0; }
}
