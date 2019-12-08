import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<any>;
  form: FormGroup;

  constructor(private service: AppService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    if( !localStorage.getItem('auth') ){
      this.router.navigate(['/login']);
    }
    this.formConfig();
    this.listAll();
  }

  formConfig() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required]
    });
  }

  create() {
    this.service.create(this.form.value).subscribe(result => {
      this.users.push(result);
      this.form.reset();
    });
  }

  delete(id) {
    this.service.delete(id).subscribe(result => {
      this.listAll();
    });
  }

  listAll(){
    this.service.listAll()
      .subscribe(result => this.users = result);
  }

  logout(){
    localStorage.removeItem('auth')
    this.router.navigate(['/login'])
  }
}
