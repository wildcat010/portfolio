import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from "./../interface/DialogData";


@Component({
    selector: 'app.work.dialog.component',
    templateUrl: 'work.dialog.component.html',
    styleUrls: ['./work.dialog.component.scss'],
})



export class WorkDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<WorkDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}