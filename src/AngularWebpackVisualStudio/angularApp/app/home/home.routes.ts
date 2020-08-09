import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './aboutMe/aboutMe.component';

const routes: Routes = [
    {
        path: 'home', component: HomeComponent, children: [
            
            { path: 'aboutMe',component: AboutMeComponent,children: [{ path: 'skills',component: SkillsComponent}] }
        ]
    }
];

export const HomeRoutes = RouterModule.forChild(routes);
