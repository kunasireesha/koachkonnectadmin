import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../../services/main';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'add-users',
    templateUrl: './add.user.html',
    styleUrls: ['./users.component.css']
})
export class AddUsersComponent implements OnInit {
    adduserForm: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder,
        public mainServe: MainService,
        public toastr: ToastrManager,
        public router: Router) { }


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


    get f() { return this.adduserForm.controls; }
    addUser() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.adduserForm.invalid) {
            return;
        }

        this.mainServe.addUser(this.adduserForm.value).subscribe(res => {
            if (res.json().status === 200) {
                this.toastr.successToastr('Added Successfully', 'Success!');
                this.router.navigate(['/users']);
            }
        })

    }
}
