import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactRoutes } from './contact.routes';
import { ContactComponent } from './components/contact.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SnackBarComponent } from "./snackBar/snackBar.component";
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatIconModule,
        MatProgressSpinnerModule,
        ContactRoutes
    ],

    declarations: [
        ContactComponent,
        SnackBarComponent
    ],
    exports: [
        ContactComponent,
        SnackBarComponent
    ],
    entryComponents: [SnackBarComponent]

})

export class ContactModule {
}
