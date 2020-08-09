import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HomeService {

    private skillsLoaded = new Subject<boolean>();
    private aboutMeLoaded = new Subject<boolean>();

    // Observable string streams
    skillsPageLoaded$ = this.skillsLoaded.asObservable();
    aboutMePageLoaded$ = this.aboutMeLoaded.asObservable();

    setSkillsPageLoaded$(flag: boolean) {
        this.skillsLoaded.next(flag);
    }

    setAboutMePageLoaded$(flag: boolean) {
        this.aboutMeLoaded.next(flag);
    }
}