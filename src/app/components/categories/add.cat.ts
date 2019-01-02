import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../../services/main';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NavigationExtras, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'add-cat',
    templateUrl: './add.cat.html',
    styleUrls: ['./add.cat.css']


})
export class AddCatComponent implements OnInit {

    constructor(private formBuilder: FormBuilder,
        public mainServe: MainService,
        public toastr: ToastrManager,
        public router: Router,
        public route: ActivatedRoute) {
        this.route.params.subscribe((params: Params) => {
            this.categoryId = params['id'];
        });

        if (this.categoryId === '') {
            this.title = 'Add Category';
            this.btntitle = 'ADD';
        } else {
            this.title = 'Edit Category';
            this.btntitle = 'UPDATE';
            this.getCategoryData();
        }
    }

    ngOnInit() {
        this.addcategoryForm = this.formBuilder.group({
            category_name: ['', Validators.required],
            no_of_coaches: ['', Validators.required],
            status: ['', Validators.required],
            Actions: ['', Validators.required],

        });

    }

    addcategoryForm: FormGroup;
    submitted = false;
    categoryId;
    categoryFormdata;
    title;
    btntitle;

    //add and update category
    addCategory() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.addcategoryForm.invalid) {
            return;
        }

        if (this.categoryId === undefined || this.categoryId === '') {
            this.mainServe.addCategory(this.addcategoryForm.value).subscribe(res => {
                if (res.json().status === 200) {
                    this.toastr.successToastr('Category Added Successfully', 'Success!');
                    this.router.navigate(['/users']);
                }
            })
        } else {
            this.mainServe.updateCategory(this.categoryId, this.addcategoryForm.value).subscribe(res => {
                if (res.json().status === 200) {
                    this.toastr.successToastr('Category Updated Successfully', 'Success!');
                    this.router.navigate(['/users']);
                }
            })
        }
    }

    //get category data
    getCategoryData() {
        this.mainServe.getCategoryData(this.categoryId).subscribe(res => {
            this.categoryFormdata = res.json().data[0];
            this.addcategoryForm = this.formBuilder.group({
                category_name: [this.categoryFormdata.category_name, Validators.required],
                no_of_coaches: [this.categoryFormdata.no_of_coaches, Validators.required],
                status: [this.categoryFormdata.status, Validators.required],
                Actions: [this.categoryFormdata.Actions, Validators.required],
            });
        })
    }
}