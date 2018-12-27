import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppSettings } from '../config';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';


@Injectable()
export class MainService {
    constructor(private http: Http, public router: Router, private translate: TranslateService
    ) { }


    postInputParamsUrl(url, params) {
        const headers = new Headers({
            'Content-Type': "application/json",
        });
        return this.http.post(AppSettings.baseUrl + url, params, { headers: headers });
    }

    getInputParams(url) {
        const headers = new Headers({
            'Content-Type': "application/x-www-form-urlencoded",
        });
        return this.http.get(AppSettings.baseUrl + url, { headers: headers });
    }

    addUser(params): Observable<any> {
        return this.postInputParamsUrl('admins', params);
    }


    login(params): Observable<any> {
        return this.postInputParamsUrl('admin/login', params);
    }

    //get IND locations
    getProducts(): Observable<any> {
        return this.getInputParams('dhukan/products');
    }



}
