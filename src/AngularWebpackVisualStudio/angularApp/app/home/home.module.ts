import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './aboutMe/aboutMe.component';

import { HomeRoutes } from './home.routes';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatProgressBarModule,
        HomeRoutes
    ],

    declarations: [
        HomeComponent,
        SkillsComponent,
        AboutMeComponent
    ],

    exports: [
        HomeComponent
    ]
})

export class HomeModule { }
