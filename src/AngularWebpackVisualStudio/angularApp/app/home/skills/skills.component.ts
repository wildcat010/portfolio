import { Component, OnInit } from '@angular/core';
import { Download } from './../../core/services/Download';
import { Skills } from './../../models/skills';
import { HomeService } from './../homeService/homeService';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
  selector: 'skills-home-component',
  templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(300)
            ]),
            transition('* => void', [
                animate(300, style({ transform: 'translateX(100%)' }))
            ])
        ])
    ]
})
export class SkillsComponent implements OnInit {

    mySkills: Skills[] = [];

    constructor(private downloadService: Download, private homeService: HomeService) {
        
    }

    ngOnInit() {
        this.downloadService.getSkillFile().subscribe(data => (this.mySkills = data), error => console.log(error), () => console.log(this.mySkills));
        this.homeService.setSkillsPageLoaded$(true);
    }

    scroll(id: any) {
        console.log(`scrolling to ${id}`);
        let el = document.getElementById(id);
        if (el !== undefined) {
            el.scrollIntoView();
        }
    }

    animEnd($event: any) {
        console.log(`animation finished: `+ $event);
        console.log(`scrolling to skills`);
        let el = document.getElementById("skills");
        if (el !== undefined) {
            el.scrollIntoView();
        }
    }
    
}
