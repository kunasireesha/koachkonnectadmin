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


    //post with params
    postInputParamsUrl(url, params) {
        const headers = new Headers({
            'Content-Type': "application/json",
        });
        return this.http.post(AppSettings.baseUrl + url, params, { headers: headers });
    }


    //put with params
    putInputParams(url, params) {
        const headers = new Headers({
            'Content-Type': "application/json",
        });
        return this.http.put(AppSettings.baseUrl + url, params, { headers: headers });
    }

    //get
    getInputParams(url) {
        const headers = new Headers({
            'Content-Type': "application/json",
        });
        return this.http.get(AppSettings.baseUrl + url, { headers: headers });
    }


    //delete
    deleteParams(url) {
        const headers = new Headers({
            'Content-Type': "application/json",
        });
        return this.http.delete(AppSettings.baseUrl + url, { headers: headers });
    }




    //login
    login(params): Observable<any> {
        return this.postInputParamsUrl('admin/login', params);
    }

    //add user
    addUser(params): Observable<any> {
        return this.postInputParamsUrl('admins', params);
    }

    //delete user
    deleteUser(id): Observable<any> {
        return this.deleteParams('admins/' + id);
    }
    //update user
    updateUser(id, params): Observable<any> {
        return this.putInputParams('admins/' + id, params);
    }

    //get users
    getUsersList(): Observable<any> {
        return this.getInputParams('admins');
    }

    //get user data by id
    getUserData(id): Observable<any> {
        return this.getInputParams('admins/' + id);
    }

    //get categories
    getCategories(): Observable<any> {
        return this.getInputParams('categories');
    }

    //add cate
    addCategory(params): Observable<any> {
        return this.postInputParamsUrl('categories', params);
    }

    //get cat data
    getCategoryData(id): Observable<any> {
        return this.getInputParams('admins/' + id);
    }

    //update category
    updateCategory(id, params): Observable<any> {
        return this.putInputParams('categories/' + id, params);
    }

    //del category
    deleteCategory(id): Observable<any> {
        return this.deleteParams('categories/' + id);
    }

}
