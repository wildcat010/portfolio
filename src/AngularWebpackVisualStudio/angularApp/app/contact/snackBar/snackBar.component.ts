import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
    selector: 'app-snackBar-component',
    templateUrl: 'snackBar.component.html',
    styles: [`
    .snack-bar {
      color: green;
    }
  `],
})
export class SnackBarComponent {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'mail',
            sanitizer.bypassSecurityTrustResourceUrl('assets/mail.svg'));
    }
}