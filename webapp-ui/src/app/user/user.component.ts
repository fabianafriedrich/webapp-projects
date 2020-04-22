import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../app.service";
import {Router} from "@angular/router";

/*User component typescript file*/
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<any>;
  form: FormGroup;
  save = false;


  action = null;

  constructor(private service: AppService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    if( !localStorage.getItem('auth') ){
      this.router.navigate(['/login']);
    }
    this.formConfig();
    this.listAll();
  }
  /*Get all the values from the user form*/
  get values() { return this.form.controls; }

  /*Form fields validation*/
  formConfig() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required]
    });
  }

  /*Populate form to update*/
  updateItem(user) {
    this.action = 'update';
    this.form = this.formBuilder.group({
      id: [user.id],
      name: [user.name, Validators.required],
      email: [user.email, [Validators.required, Validators.email]],
      phone: [user.phone, Validators.required]
    });
  }

  /*Creating new user*/
  create() {
    this.save = true;
    if (this.form.valid) {
      if (this.action === 'update'){
        this.service.update(this.form.value).subscribe(result => {
            this.save = false;
            this.form.reset();
            this.action = null;
            this.listAll();
          },
          error => {
            return false;
          });
      }else {
        this.service.create(this.form.value).subscribe(result => {
            this.save = false;
            this.users.push(result);
            this.form.reset();
          },
          error => {
            return false;
          });
      }
    }

  }

  /*Delete user by id*/
  delete(id) {
    this.service.delete(id).subscribe(() => {
    });
    this.listAll();
  }

  /*List all users*/
  listAll(){
    this.service.listAll()
      .subscribe(result => this.users = result);
  }

  /*Logout of the system*/
  logout(){
    localStorage.removeItem('auth')
    this.router.navigate(['/login'])
  }
}
