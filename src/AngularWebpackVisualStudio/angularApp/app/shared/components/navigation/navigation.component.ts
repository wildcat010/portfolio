import { Component } from '@angular/core';
import { NavService } from './../../service/NavService';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    providers: [NavService]
})

export class NavigationComponent {
    darkMode: boolean = false;
    subscription: Subscription;

    constructor(private navService: NavService) {
        this.subscription = this.navService.darkThemeLoaded$.subscribe(x => { this.darkMode = x });
    }

    ngOnInit() {
        
    }

    click() {
        //console.log(`boom`);

        //var navToggler = document.getElementsByClassName('.navbar-toggler');


        //navToggler.remove('cool', 'make', 'me');
    }

}
