# SigPlot Angular Components Example

This project was built using Angular CLI 1.4.2 along with Geon's [Angular Components for Sigplot][sigplot-ng], [type-friendly extensions][sigplot-ts], and LGS Innovation's [SigPlot][sigplot].

## Installation of the App

Run `npm install`.

## Development Server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you would like to develop with linked libraries or exposing the webserver to your external network interface, use `npm start:dev`.

## Make Your Own

See the Angular CLI documentation for more details, however the gist is:

```bash
npm install -g @angular/cli
ng new my-app
cd my-app
npm install --save \
    sigplot-ng \
    sigplot-ts \
    sigplot@git://github.com/geontech/sigplot.git#develop-2.0-ts
```

 > Note: At this time, the implementation uses a fork of LGS Innovation's `develop-2.0` branch which contains minor changes: adding `plugins` to the base module, and extensive typings definitions.  We intend to submit a pull request to get these changes merged soon.

Next, in your application's top module, import the SigPlot Components Module (to gain access to the components):

```typescript
import { SigPlotComponentsModule } from 'sigplot-ng';

// At your NgModule
@NgModule({
    imports: [
        SigPlotComponentsModule
    ]
})
export class YourModule {}
```

The additional types used in this library as well as mirrors of the Typings found in `sigplot` are provided by `sigplot-ts`.

[sigplot]: https://www.npmjs.com/package/sigplot
[sigplot-ng]: https://www.npmjs.com/package/sigplot-ng
[sigplot-ts]: https://www.npmjs.com/package/sigplot-ts