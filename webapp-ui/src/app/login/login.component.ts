import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../app.service";
import {ActivatedRoute, Router} from "@angular/router";

/*Login component typescript file*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;

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

  /*IMplemantion login functionality and if OK is going to be redirected to the users page*/
  login() {
      (this.service.login(this.values.username.value, this.values.password.value).subscribe(
        data => {
          this.router.navigate(['/users'])
        },
        error => {
          return false;
         }
      ));
  }
}
