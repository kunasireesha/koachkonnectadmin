import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'profile-nav',
    templateUrl: './profile.nav.html',
    styleUrls: ['./profile.nav.css']


})
export class ProfileNavComponent implements OnInit {

    constructor(private route: ActivatedRoute, ) {
        this.pageNav = this.route.snapshot.data[0]['page'];
    }
    pageNav;
    ngOnInit() {
        console.log(this.pageNav);
    }

}