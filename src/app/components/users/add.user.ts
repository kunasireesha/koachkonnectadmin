import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../../services/main';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NavigationExtras, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'add-users',
    templateUrl: './add.user.html',
    styleUrls: ['./users.component.css']
})
export class AddUsersComponent implements OnInit {

    constructor(private formBuilder: FormBuilder,
        public mainServe: MainService,
        public toastr: ToastrManager,
        public router: Router,
        public route: ActivatedRoute) {
        this.route.params.subscribe((params: Params) => {
            this.userId = params['id'];
        });

        if (this.userId === '') {
            this.title = 'Add User';
            this.btntitle = 'ADD';
        } else {
            this.title = 'Edit User';
            this.btntitle = 'UPDATE';
            this.getUserData();
        }
    }

    ngOnInit() {
        this.adduserForm = this.formBuilder.group({
            user_name: ['', Validators.required],
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            role: ['', Validators.required],
            password: ['', Validators.required]
        });
    }


    adduserForm: FormGroup;
    submitted = false;
    userId;
    adduserFormdata;
    title;
    btntitle;



    get f() { return this.adduserForm.controls; }
    addUser() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.adduserForm.invalid) {
            return;
        }

        if (this.userId === undefined) {
            this.mainServe.addUser(this.adduserForm.value).subscribe(res => {
                if (res.json().status === 200) {
                    this.toastr.successToastr('User Added Successfully', 'Success!');
                    this.router.navigate(['/users']);
                }
            })
        } else {
            this.mainServe.updateUser(this.userId, this.adduserForm.value).subscribe(res => {
                if (res.json().status === 200) {
                    this.toastr.successToastr('User Updated Successfully', 'Success!');
                    this.router.navigate(['/users']);
                }
            })
        }

    }

    getUserData() {
        this.mainServe.getUserData(this.userId).subscribe(res => {
            this.adduserFormdata = res.json().data[0];
            this.adduserForm = this.formBuilder.group({
                user_name: [this.adduserFormdata.user_name, Validators.required],
                first_name: [this.adduserFormdata.first_name, Validators.required],
                last_name: [this.adduserFormdata.last_name, Validators.required],
                phone: [this.adduserFormdata.phone, Validators.required],
                email: [this.adduserFormdata.email, [Validators.required, Validators.email]],
                role: [this.adduserFormdata.role, Validators.required],
                password: [this.adduserFormdata.password, Validators.required]
            });
        })
    }


}
