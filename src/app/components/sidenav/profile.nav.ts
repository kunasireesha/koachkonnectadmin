import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'profile-nav',
    templateUrl: './profile.nav.html',
    styleUrls: ['./profile.nav.css']


})
export class ProfileNavComponent implements OnInit {

    constructor(private route: ActivatedRoute, public router: Router) {
        this.pageNav = this.route.snapshot.data[0]['page'];
    }
    pageNav;
    ngOnInit() {

    }

    logout() {
        this.router.navigate(['/']);
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('userMobile');
    }
}