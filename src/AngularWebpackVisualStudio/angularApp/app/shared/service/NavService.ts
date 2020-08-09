import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NavService {

    private darkTheme = new Subject<boolean>();

    // Observable string streams
    darkThemeLoaded$ = this.darkTheme.asObservable();

    setDarkThemeLoaded$(flag: boolean) {
        this.darkTheme.next(flag);
    }
}
