import { NgModule } from '@angular/core';

import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
    exports: [
        A11yModule,
        BidiModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule,
        ScrollDispatchModule,
        CdkStepperModule,
        CdkTableModule,
        CdkTreeModule
    ]
})
export class MyCdkModule { }