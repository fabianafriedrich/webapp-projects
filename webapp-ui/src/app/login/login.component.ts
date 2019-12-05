import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {debounce} from "rxjs/operators";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private service: AppService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.formConfig();
  }

  get values() { return this.form.controls; }

  formConfig() {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, [Validators.required]],
    });

  }

  login() {
    debugger;
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
