import { Component, OnInit } from '@angular/core';
import { Download } from './../../core/services/Download';
import { Email } from './../../models/email';
import { FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from "./../snackBar/snackBar.component";

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-contact-component',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
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

export class ContactComponent implements OnInit  {

    email: Email = new Email();
    myErrors: String[] = [];
    failedRequest: Boolean = false;
    sendingEmail: Boolean = false;

    contactForm = new FormGroup({
        subject: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required])

    }); 


    constructor(private downloadService: Download, private _snackBar: MatSnackBar) {
        this.myErrors = [];
    }
    
    ngOnInit() {

    }

    scroll(id: any) {
        console.log(`scrolling to ${id}`);
        let el = document.getElementById(id);
        el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    sendEmail(formDirective: FormGroupDirective) {
        console.log("sendEmail!")

        this.myErrors = [];
        this.failedRequest = false;
        this.sendingEmail = true

        const result: Email = Object.assign({}, this.contactForm.value);
        console.log(result);

        this.downloadService.sendEmail(result).subscribe(() => {
            this.email = new Email();
        },
            (err: any) => {
                console.log("ERROR: ");
                console.log(err);
                err.error.forEach( (value: { errorMessage: String; }[]) => {
                    console.log(value[0].errorMessage);

                    this.myErrors.push(value[0].errorMessage);
                    
                });

                this.failedRequest = true;
                this.sendingEmail = false;
            },
            () => {
                console.log("reset the form");
                this.sendingEmail = false;
                formDirective.resetForm();
                this.contactForm.reset();
                this.openSnackBar();
            }
        );
    }

    openSnackBar() {
        this._snackBar.openFromComponent(SnackBarComponent, {
            duration: 5000,
        });
    }
}


