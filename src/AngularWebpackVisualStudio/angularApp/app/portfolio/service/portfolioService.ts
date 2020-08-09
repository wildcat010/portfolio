import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PortfolioService {

    private portfolioLoaded = new Subject<boolean>();

    // Observable string streams
    portfolioPageLoaded$ = this.portfolioLoaded.asObservable();

    setPortfolioPageLoaded$(flag: boolean) {
        this.portfolioLoaded.next(flag);
    }
}