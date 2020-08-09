import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioModule' },
    { path: 'resume', loadChildren: './resume/resume.module#ResumeModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
];

export const AppRoutes = RouterModule.forRoot(routes);
