import { Component, OnInit } from '@angular/core';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'aboutMe-home-component',
    templateUrl: './aboutMe.component.html',
    styleUrls: ['./aboutMe.component.scss'],
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
export class AboutMeComponent implements OnInit {


    constructor() {
        
    }

    ngOnInit() {

    }

    animEnd($event: any) {
        console.log(`animation finished: ` + $event);
        console.log(`scrolling to aboutMe`);
        let el = document.getElementById("aboutMe");
        if (el !== undefined) {
            el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    }
}
