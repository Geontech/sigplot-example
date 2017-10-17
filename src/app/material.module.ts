import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';

const MATERIAL_MODULES = [
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule
    ];

@NgModule({
    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES
})
export class MaterialModule {}
