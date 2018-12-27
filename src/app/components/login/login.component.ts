import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../../services/main';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, public mainServe: MainService, public toastr: ToastrManager, public router: Router) { }
  logindata;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    var data = this.loginForm.value;
    this.mainServe.login(data).subscribe(res => {
      this.logindata = res.json().data;
      if (res.json().status === 200) {
        this.toastr.successToastr('Login Successfully', 'Success!');
        sessionStorage.setItem('userId', JSON.stringify(this.logindata._id));
        sessionStorage.setItem('userName', JSON.stringify(this.logindata.first_name + ' ' + this.logindata.last_name));
        sessionStorage.setItem("userMobile", JSON.stringify(this.logindata.phone));
        this.router.navigate(['/users']);
      } else {
        this.toastr.successToastr('Login Successfully', 'error!');
      }
    })

  }

}
