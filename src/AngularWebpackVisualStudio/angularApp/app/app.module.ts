import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from './shared/shared.module';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutes,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
        CoreModule.forRoot(),
        HomeModule,
        MatButtonModule,
        MatProgressBarModule,
    ],

    declarations: [
        AppComponent
    ],

    bootstrap: [AppComponent],
})

export class AppModule { }
