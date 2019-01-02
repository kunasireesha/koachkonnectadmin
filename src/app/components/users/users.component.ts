import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public mainServe: MainService, public router: Router, public toastr: ToastrManager) { }
  key: string = 'uname';
  reverse: boolean = false;
  ngOnInit() {
    this.getUsersData();
  }
  usersData = [];

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  getUsersData() {
    this.mainServe.getUsersList().subscribe(res => {
      this.usersData = res.json().data;
    })
  }

  editUser(id) {
    this.router.navigate(['/addusers', id])
  }
  addUser() {
    this.router.navigate(['/addusers', ''])
  }

  deleteUser(id) {
    this.mainServe.deleteUser(id).subscribe(res => {
      if (res.json().status === 200) {
        this.toastr.successToastr('Deleted Successfully', 'Success!');
        this.getUsersData();
      } else {
        this.toastr.successToastr(res.json().message, 'error!');
      }
    })
  }

}
