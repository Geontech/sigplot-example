webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-toolbar.top-bar {\n  position: fixed;\n  top:0;\n  z-index: 1000;\n  border-bottom: 3pt solid rgb(160,16,4);\n}\n\nmat-toolbar.bottom-bar {\n    position: fixed;\n    bottom:   0;\n    overflow: hidden;\n    min-height: 0;\n    height:   35px;\n}\n\nmat-toolbar.bottom-bar >>> mat-toolbar-row {\n    height: 35px;\n}\n\n.branding {\n    padding-right: 16px;\n}\n\n.demo-panel {\n    width: 70%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 64px;\n    margin-bottom: 35px;\n}\n\n.fill-space {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\n\n.sigplot-panel:after {\n    content: \"\";\n    display: table;\n    clear:   both;\n}\n\n.sigplot-plot {\n    width:  80%;\n    height: 400px;\n    float:  left;\n}\n\n.sigplot-controls {\n    width:  20%;\n    height: 100%;\n    float:  left;\n}\n\n.sigplot-controls button {\n    width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"top-bar\">\n    <div class=\"branding\">\n        <a href=\"http://www.geontech.com\" mat-icon-button class=\"icon-hawkeye\"><img style=\"height: 40px;\" src=\"assets/images/geon-logo-white.svg\"></a>\n    </div>\n\n    <h1>SigPlot+Angular Demo</h1>\n\n    <span class=\"fill-space\"></span>\n\n    <span><a mat-button href=\"http://github.com/LGSInnovations/sigplot/tree/develop-2.0\">SigPlot 2.0</a></span>\n    <span><a mat-button href=\"https://www.npmjs.com/package/sigplot-ts\">Typings Extensions</a></span>\n    <span><a mat-button href=\"https://www.npmjs.com/package/sigplot-ng\">Angular Components</a></span>\n</mat-toolbar>\n\n<div class=\"demo-panel\">\n    <mat-tab-group>\n        <mat-tab label=\"Line Plot\">\n            <div class=\"sigplot-panel\">\n                <sigplot-line\n                    class=\"sigplot-plot\"\n                    [colors]=\"colors\"\n                    [data]=\"linePlotData$\"\n                    [highlight]=\"linePlotHighlight$\"\n                    [showLegend]=\"false\">\n                </sigplot-line>\n                <div class=\"sigplot-controls\">\n                    <button mat-button (click)=\"toggleHighlight()\">Toggle Highlight</button>\n                    <button mat-button (click)=\"changeLineColor()\">Change Color</button>\n                </div>\n            </div>\n        </mat-tab>\n\n        <mat-tab label=\"Raster Plot\">\n            <div class=\"sigplot-panel\">\n                <sigplot-raster\n                    class=\"sigplot-plot\"\n                    [colors]=\"colors\"\n                    [data]=\"rasterPlotData$\"\n                    [cmap]=\"rasterColorMap\">\n                </sigplot-raster>\n                <div class=\"sigplot-controls\">\n                    <button mat-button (click)=\"changeRasterColorMap()\">Change Color Map</button>\n                </div>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n    \n    <hr>\n\n    <div class=\"mat-body\">\n        <p>This demo showcases a growing base set of Angular (v 4+) Components which provide simplified interfaces to the types of plots one might want for scientific data.  You can find the source for this demo <a href=\"http://github.com/geontech/sigplot-example\">here</a>, and use the links above to find SigPlot, the Typings-friendly extensions, and these Angular Components.</p>\n\n        <p>The plots above are driven by a signal generator producing pseudo-random noise with 2048 samples at 100 Hz.  Each plot Component has a base set of inputs as well as inputs specific to that category of plot (Line plots have highlights, etc.).  Only the base set is exposed at this time.</p>\n\n        <p>Check back often as the demo is likely to change as more plot types and features are exposed.  Please feel free to fork and submit pull requests as well if you have ideas for features.</p>\n    </div>\n</div>\n\n<mat-toolbar class=\"bottom-bar\">\n    <a mat-button href=\"http://www.geontech.com\">Geon Technologies, LLC &mdash; &copy; 2017</a>\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var signals_1 = __webpack_require__("../../../../../src/app/signals/index.ts");
var lib = __webpack_require__("../../../../sigplot-ts/esm/index.js");
var sigplot_ng_1 = __webpack_require__("../../../../sigplot-ng/sigplot-ng.umd.js");
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'app';
        // White bg, black fg
        this.colors = { fg: 'black', bg: 'white' };
        // Pick the initial color map and setup the set of colors
        this.rasterColorMap = lib.Mc.Greyscale;
        this.lineColorList = [
            'rgb(1,85,129)',
            'rgb(160,16,4)',
            'rgb(74,74,48)'
        ];
        // Setup the observable(s)
        this._lpdSubject = new Subject_1.Subject();
        this.linePlotData$ = this._lpdSubject.asObservable();
        this._lphSubject = new Subject_1.Subject();
        this.linePlotHighlight$ = this._lphSubject.asObservable();
        this._rpdSubject = new Subject_1.Subject();
        this.rasterPlotData$ = this._rpdSubject.asObservable();
        // Setup signal generator
        this.signal = new signals_1.Noise();
        this.signal.frameSize = 2048;
        this.signal.updateRateHz = 100;
        // Highlight's start/end are relative to the values being plotted, which is
        // naturally based on the delta between sample points.
        var delta = 1.0 / this.signal.updateRateHz / this.signal.frameSize;
        // Setup a highlight
        this._highlight = {
            action: sigplot_ng_1.HighlightAction.remove,
            highlight: {
                xstart: 100.0 * delta,
                xend: 400.0 * delta,
                color: 'red',
                id: 'my-highlight'
            }
        };
        // Connect the signal stream to the plot via ...PlotData
        this.signal.start(function (b) {
            // Line plot's data
            var lpd = {
                buffer: b,
                dataSize: lib.FormatSize.Scalar,
                dataType: lib.FormatType.Float32,
                xAxis: {
                    start: 0.0,
                    delta: delta,
                    units: lib.Units.Time
                },
                layerSettings: {
                    color: _this.lineColorList[0]
                }
            };
            _this._lpdSubject.next(lpd);
            // Falling raster version with y-axis data specs.
            var rpd = {
                buffer: b,
                dataSize: lib.FormatSize.Scalar,
                dataType: lib.FormatType.Float32,
                xAxis: {
                    start: 0.0,
                    delta: delta,
                    units: lib.Units.Frequency
                },
                yAxis: {
                    start: 0.0,
                    units: lib.Units.Power
                }
            };
            _this._rpdSubject.next(rpd);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.rasterColorMap = lib.Mc.Greyscale;
    };
    AppComponent.prototype.toggleHighlight = function () {
        if (this._highlight.action === sigplot_ng_1.HighlightAction.remove) {
            this._highlight.action = sigplot_ng_1.HighlightAction.add;
        }
        else {
            this._highlight.action = sigplot_ng_1.HighlightAction.remove;
        }
        this._lphSubject.next(this._highlight);
    };
    AppComponent.prototype.changeRasterColorMap = function () {
        // This method of iterating over enumerations works here since this one is
        // defined positively from 0 without skipping.
        if (lib.Mc[this.rasterColorMap + 1] === undefined) {
            this.rasterColorMap = 0;
        }
        else {
            this.rasterColorMap += 1;
        }
    };
    AppComponent.prototype.changeLineColor = function () {
        this.lineColorList.push(this.lineColorList.shift());
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var animations_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var sigplot_ng_1 = __webpack_require__("../../../../sigplot-ng/sigplot-ng.umd.js");
var material_module_1 = __webpack_require__("../../../../../src/app/material.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            material_module_1.MaterialModule,
            sigplot_ng_1.SigPlotComponentsModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var MATERIAL_MODULES = [
    material_1.MatButtonModule,
    material_1.MatTabsModule,
    material_1.MatToolbarModule
];
var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    core_1.NgModule({
        imports: MATERIAL_MODULES,
        exports: MATERIAL_MODULES
    })
], MaterialModule);
exports.MaterialModule = MaterialModule;
//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/signals/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noise_1 = __webpack_require__("../../../../../src/app/signals/noise.ts");
exports.Noise = noise_1.Noise;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/signals/noise.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var signal_base_1 = __webpack_require__("../../../../../src/app/signals/signal-base.ts");
var Noise = (function (_super) {
    __extends(Noise, _super);
    function Noise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Noise.prototype.getSample = function (v) { return 2.0 * Math.random() - 1.0; };
    return Noise;
}(signal_base_1.SignalBase));
exports.Noise = Noise;
//# sourceMappingURL=noise.js.map

/***/ }),

/***/ "../../../../../src/app/signals/signal-base.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var SignalBase = (function () {
    function SignalBase() {
        this._frameSize = 8192;
        this._buffer = [];
        this._callback = null;
        this._interval = null;
    }
    Object.defineProperty(SignalBase.prototype, "frameSize", {
        get: function () { return Math.round(this._frameSize); },
        set: function (v) {
            this._frameSize = v;
            this._updateSignal();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalBase.prototype, "started", {
        get: function () { return (this._interval && this._callback !== null); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalBase.prototype, "updateRateHz", {
        get: function () { return this._updateRateHz; },
        set: function (v) {
            this._updateRateHz = Math.round(v);
            this._period_ms = 1000.0 / this._updateRateHz;
            if (this.started) {
                var cb = this._callback;
                this.stop();
                this.start(cb);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalBase.prototype, "period_ms", {
        get: function () { return this._period_ms; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalBase.prototype, "samplesPerSecond", {
        get: function () { return this.frameSize * this.updateRateHz; },
        enumerable: true,
        configurable: true
    });
    SignalBase.prototype.start = function (callback) {
        var _this = this;
        if (!this.started) {
            // Save the callback
            // Set the loop interval
            this._callback = callback;
            this._interval = global.setInterval(function () { return _this._loop(); }, this.period_ms);
        }
    };
    SignalBase.prototype.stop = function () {
        global.clearInterval(this._interval);
        this._callback = null;
        this._interval = null;
    };
    SignalBase.prototype._updateSignal = function () {
        this._buffer.length = 0;
        for (var i = 0; i < this.frameSize; i++) {
            this._buffer[i] = this.getSample(i);
        }
    };
    SignalBase.prototype._loop = function () {
        this._updateSignal();
        this._callback(this._buffer.slice());
    };
    return SignalBase;
}());
exports.SignalBase = SignalBase;
//# sourceMappingURL=signal-base.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
__webpack_require__("../../../../hammerjs/hammer.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map