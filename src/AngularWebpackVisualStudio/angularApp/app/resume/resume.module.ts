import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ResumeRoutes } from './resume.routes';
import { ResumeComponent } from './components/resume.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SchoolDialogComponent } from "./SchoolDialog/school.dialog.component";
import { WorkDialogComponent } from "./WorkDialog/work.dialog.component";


@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        ResumeRoutes
    ],

    declarations: [
        ResumeComponent,
        SchoolDialogComponent,
        WorkDialogComponent
    ],
    exports: [
        ResumeComponent,
        SchoolDialogComponent,
        WorkDialogComponent
    ],
    entryComponents: [SchoolDialogComponent, WorkDialogComponent]

})

export class ResumeModule {
}
