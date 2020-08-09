import { Component, ViewEncapsulation } from '@angular/core';
import { enableProdMode } from '@angular/core';

enableProdMode();

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss', './app.animate.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

}
