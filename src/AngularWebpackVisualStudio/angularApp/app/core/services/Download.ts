import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Configuration } from './../../app.constants';
import { Skills } from './../../models/skills';
import { Portfolio } from './../../models/portfolio';
import { School } from './../../models/school';
import { Work } from './../../models/work';
import { Email } from './../../models/email';

@Injectable()
export class Download {
    private actionUrlSkill: string;
    private actionUrlFolio: string;
    private actionUrlSchool: string;
    private actionUrlWork: string;
    private actionUrl: string;
    private headers: HttpHeaders;


    constructor(private http: HttpClient, configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/things/';

        this.actionUrlSkill = configuration.Server + 'data/dataSkill.json';
        this.actionUrlFolio = configuration.Server + 'data/dataFolio.json';
        this.actionUrlSchool = configuration.Server + 'data/dataSchool.json';
        this.actionUrlWork = configuration.Server + 'data/dataWork.json';

        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set('Accept', 'application/json');
    }

    getSkillFile(): Observable<Skills[]> {
        return this.http.get<Skills[]>(this.actionUrlSkill, { headers: this.headers });
    }

    getPortfolioFile(): Observable<Portfolio[]> {
        return this.http.get<Portfolio[]>(this.actionUrlFolio, { headers: this.headers });
    }

    getSchoolFile(): Observable<School[]> {
        return this.http.get<School[]>(this.actionUrlSchool, { headers: this.headers });
    }

    getWorkFile(): Observable<Work[]> {
        return this.http.get<Work[]>(this.actionUrlWork, { headers: this.headers });
    }

    sendEmail(email: Email): /*Observable<Email>*/any {
        console.log("send the email to the API");
        console.log(email);
        const emailToSend = JSON.stringify(email);
        console.log("email to send",emailToSend);
        return this.http.post<Email>(this.actionUrl, emailToSend, { headers: this.headers });
    }
}