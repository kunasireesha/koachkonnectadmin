import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { MainService } from '../../services/main';

@Component({
  selector: 'categories',
  templateUrl: './categories.html',
  styleUrls: ['./categories.css'],
  providers: []
})
export class CategoriesComponent implements OnInit {

  constructor(public mainServe: MainService, public router: Router, public toastr: ToastrManager) { }

  // public collapse = true;
  ngOnInit() {
    this.getCategories();
  }
  catData = [];

  //get category data
  getCategories() {
    this.mainServe.getCategories().subscribe(res => {
      this.catData = res.json().data;
    })
  }

  //delete category
  delete(id) {
    this.mainServe.deleteCategory(id).subscribe(res => {
      if (res.json().status === 200) {
        this.toastr.successToastr('Deleted Successfully', 'Success!');
        this.getCategories();
      } else {
        this.toastr.successToastr(res.json().message, 'error!');
      }
    })
  }


}
