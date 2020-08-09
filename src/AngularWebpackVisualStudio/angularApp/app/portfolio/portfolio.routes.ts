import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './components/portfolio.component';

const routes: Routes = [
    { path: '', component: PortfolioComponent }
];

export const PortfolioRoutes = RouterModule.forChild(routes);
