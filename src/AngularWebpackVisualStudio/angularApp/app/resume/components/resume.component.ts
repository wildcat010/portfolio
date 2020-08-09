import { Component, OnInit } from '@angular/core';
import { School } from './../../models/school';
import { Work } from './../../models/Work';
import { Download } from './../../core/services/Download';
import { MatDialog } from '@angular/material/dialog';
import { SchoolDialogComponent } from "./../SchoolDialog/school.dialog.component";
import { WorkDialogComponent } from "./../WorkDialog/work.dialog.component";

declare var require: any;
const FileSaver = require('file-saver');

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-resume-component',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    animations: [
        trigger('contactAnim', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(100%)' }),
                animate(200)
            ])
        ])
    ]
})

export class ResumeComponent implements OnInit {
    schoolData: School[] = [];
    workData: Work[] = [];
    name: string = "bbom";
    animal: string = "chien";

    constructor(private downloadService: Download, public dialog: MatDialog) {

    }

    ngOnInit() {
        this.downloadService.getSchoolFile().subscribe(data => (this.schoolData = data), error => console.log(error), () => console.log(this.schoolData));
        this.downloadService.getWorkFile().subscribe(data => (this.workData = data), error => console.log(error), () => console.log(this.workData));
    }

    scroll(id: any) {
        console.log(`scrolling to ${id}`);
        let el = document.getElementById(id);
        if (el !== undefined) {
            el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    }

    getCV() {
        console.log("Get CV - using file saver");
        const pdfUrl = './data/Benoit_BOURGEON_CV.pdf';
        const pdfName = 'Benoit_BOURGEON_CV.pdf';
        FileSaver.saveAs(pdfUrl, pdfName);
    }

    openSchoolDialog(school: School): void {
        const dialogRef = this.dialog.open(SchoolDialogComponent, {
            data: { school: school }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }

    openWorkDialog(work: Work): void {
        const dialogRef = this.dialog.open(WorkDialogComponent, {
            data: { work: work }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}
