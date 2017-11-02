import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Noise } from './signals';

import * as lib from 'sigplot-ts';

import {
  HighlightCommand,
  HighlightAction,
  defaultLineOptions,
  LINE_PLOT_OPTIONS
} from 'sigplot-ng';

/**
 * This is an example of how to inject custom options into a plot.
 * In this case, we are hiding the legend initially via the options rather than
 * using the component's Input.
 */
export function customLineOptions(): lib.ConstructorOptions {
  const opts = defaultLineOptions();
  opts.legend = false;
  return opts;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    // See above comments for this example
    { provide: LINE_PLOT_OPTIONS, useFactory: customLineOptions }
  ]
})
export class AppComponent implements OnInit {
  title = 'app';

  // colors for both plots
  colors: lib.IPlotColors;

  // Color map for the raster plot
  rasterColorMap:     lib.Mc;

  // Color array for line plot
  lineColorList:      Array<string>;

  // Observables for data, etc.
  linePlotData$:      Observable<lib.LinePlotData>;
  linePlotHighlight$: Observable<HighlightCommand>;
  rasterPlotData$:    Observable<lib.RasterPlotData>;

  private signal:     Noise;

  private _lpdSubject:  Subject<lib.LinePlotData>;
  private _lphSubject:  Subject<HighlightCommand>;
  private _highlight:   HighlightCommand;

  private _rpdSubject: Subject<lib.RasterPlotData>;


  constructor() {
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
    this._lpdSubject = new Subject<lib.LinePlotData>();
    this.linePlotData$ = this._lpdSubject.asObservable();
    this._lphSubject = new Subject<HighlightCommand>();
    this.linePlotHighlight$ = this._lphSubject.asObservable();

    this._rpdSubject = new Subject<lib.RasterPlotData>();
    this.rasterPlotData$ = this._rpdSubject.asObservable();

    // Setup signal generator
    this.signal = new Noise();
    this.signal.frameSize = 2048;
    this.signal.updateRateHz = 100;

    // Highlight's start/end are relative to the values being plotted, which is
    // naturally based on the delta between sample points.
    const delta: number = 1.0 / this.signal.updateRateHz / this.signal.frameSize;

    // Setup a highlight
    this._highlight = {
      action: HighlightAction.remove,
      highlight: {
        xstart: 100.0 * delta,
        xend:   400.0 * delta,
        color:  'red',
        id:     'my-highlight'
      }
    };

    // Connect the signal stream to the plot via ...PlotData
    this.signal.start((b) => {
      // Line plot's data
      const lpd: lib.LinePlotData = {
        buffer:   b,
        dataSize: lib.FormatSize.Scalar,
        dataType: lib.FormatType.Float32,
        xAxis: {
          start: 0.0,
          delta: delta,
          units: lib.Units.Time
        },
        layerSettings: {
          color: this.lineColorList[0]
        }
      };
      this._lpdSubject.next(lpd);

      // Falling raster version with y-axis data specs.
      const rpd: lib.RasterPlotData = {
        buffer:   b,
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
      this._rpdSubject.next(rpd);
    });
  }

  ngOnInit() {
    this.rasterColorMap = lib.Mc.Greyscale;
  }

  toggleHighlight() {
    if (this._highlight.action === HighlightAction.remove) {
      this._highlight.action = HighlightAction.add;
    } else {
      this._highlight.action = HighlightAction.remove;
    }
    this._lphSubject.next(this._highlight);
  }

  changeRasterColorMap() {
    // This method of iterating over enumerations works here since this one is
    // defined positively from 0 without skipping.
    if (lib.Mc[this.rasterColorMap + 1] === undefined) {
      this.rasterColorMap = 0;
    } else {
      this.rasterColorMap += 1;
    }
  }

  changeLineColor() {
    this.lineColorList.push(this.lineColorList.shift());
  }
}
