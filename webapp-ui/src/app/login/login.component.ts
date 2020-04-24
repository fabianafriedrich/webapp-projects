import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../app.service";
import {ActivatedRoute, Router} from "@angular/router";
import {invalid} from "@angular/compiler/src/render3/view/util";

/*Login component typescript file*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  isSubmitted = false;
  validLogin = false;

  constructor(private service: AppService, private formBuilder: FormBuilder, private router: Router,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.formConfig();
  }

  /*Get all the values from the login form*/
  get values() { return this.form.controls; }

  /*Form fields validation*/
  formConfig() {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, [Validators.required]],
    });

  }

  messageTimeout() {
    setTimeout (() => {
      console.log('test');
    }, 2000);
  }

  /*Implementation login functionality and if OK is going to be redirected to the users page*/
  login() {
    this.isSubmitted = true;
    (this.service.login(this.values.username.value, this.values.password.value).subscribe(
      data => {
        this.router.navigate(['/users'])
        this.validLogin = true;

      },
      error => {
        this.form.controls['username'].setErrors({invalid: true});
      }
    ));
  }
}
