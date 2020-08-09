import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PortfolioRoutes } from './portfolio.routes';
import { PortfolioComponent } from './components/portfolio.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        PortfolioRoutes
    ],

    declarations: [
        PortfolioComponent
    ]
})

export class PortfolioModule {
}
