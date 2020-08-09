import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../service/portfolioService';
import { Portfolio } from './../../models/portfolio';
import { Download } from './../../core/services/Download';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-portfolio-component',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    animations: [
        trigger('XInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(100%)' }),
                animate(200)
            ])
        ])
    ], providers: [PortfolioService]
})

export class PortfolioComponent implements OnInit  {
    portfolioData: Portfolio[] = [];

    constructor(private downloadService: Download, private portfolioService: PortfolioService) {

    }
    
    ngOnInit() {
        this.downloadService.getPortfolioFile().subscribe(data => (this.portfolioData = data), error => console.log(error), () => console.log(this.portfolioData));
        this.portfolioService.setPortfolioPageLoaded$(true);
    }

    scroll(id: any) {
        console.log(`scrolling to ${id}`);
        let el = document.getElementById(id);
        if (el !== undefined) {
            el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    }
}
