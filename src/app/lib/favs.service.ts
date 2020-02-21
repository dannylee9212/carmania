import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
    providedIn: 'root'
})
export class FavsService {

    constructor(
        private cookieService: CookieService
    ) {}

    checkFavState(id: number) {

        // get all id from the cookie
        if(this.checkFavExists(id)) {
            return false;
        } else {
            return true;
        }
    }
    onToggleFav(id: number) {
        let state: boolean;

        // convert into an array
        const allCookies = JSON.parse(this.cookieService.get('favs'))
        if(!this.checkFavExists(id)) {
            //add to favs
            allCookies.push(id);
            state = false;
        } else {
            allCookies.splice(allCookies.indexOf(id), 1)
            state = true;
        }
        // in cookie, only store string.
        this.cookieService.set('favs', JSON.stringify(allCookies));
        return state;
    }
    getAllCookies() {
        if(this.cookieService.check('favs')) {
            return JSON.parse(this.cookieService.get('favs'))
        } else {
            this.cookieService.set('favs', '[]');
            return [];
        }
    }

    checkFavExists(id: number) {
        const allCookies = this.getAllCookies();
        console.log(allCookies);
        // where the includes method come from?
        return allCookies.includes(id);
    }
}
