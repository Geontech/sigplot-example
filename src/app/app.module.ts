import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigPlotComponentsModule } from 'sigplot-ng';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        SigPlotComponentsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
