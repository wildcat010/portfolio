import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { Configuration } from '../app.constants';
import { ThingService } from './services/thing-data.service';
import { Download } from './services/Download';

@NgModule({
    imports: [
        CommonModule
    ]
})

export class CoreModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: CoreModule,
            providers: [
                ThingService,
                Download,
                Configuration
            ]
        };
    }
}
