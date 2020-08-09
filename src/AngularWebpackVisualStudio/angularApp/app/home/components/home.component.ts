import { Component, OnInit } from '@angular/core';
import { Thing } from './../../models/thing';
import { HomeService } from './../homeService/homeService';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(200)
            ])
        ])
    ],
    providers: [HomeService]
})
export class HomeComponent implements OnInit {
    things: Thing[] = [];
    thing: Thing = new Thing();
    loadedSkill: boolean = false;
    loadedAboutMe: boolean = false;
    subscription: Subscription;
    
    constructor(private homeService: HomeService, private router: Router) {
        this.subscription = this.homeService.skillsPageLoaded$.subscribe(x => { this.loadedSkill = x });
        this.subscription = this.homeService.aboutMePageLoaded$.subscribe(x => { this.loadedAboutMe = x });
    }

    ngOnInit() {
        this.router.navigate(['home/aboutMe']);
        this.router;
    }

    scroll(id: any) {
        console.log(`scrolling to ${(id !== "skills")} --${id}- ${this.loadedSkill}`);

        if (!(id === "skills" && this.loadedSkill === false)) {
            console.log(`scrolling to ${id}`);
            let el = document.getElementById(id);
            if (el !== undefined) {
                el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }
        }
        else if (!(id === "aboutMe" && this.loadedAboutMe === false)) {
            console.log(`scrolling to ${id}`);
            let el = document.getElementById(id);
            if (el !== undefined) {
                el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }
        }
    }
}
