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

  action = null;
  formData: any;

  constructor(private service: AppService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    if( !localStorage.getItem('auth') ){
      this.router.navigate(['/login']);
    }
    this.formConfig();
    this.listAll();
  }

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
    debugger;
    if (this.action === 'update'){
      this.service.update(this.form.value).subscribe(result => {
        this.form.reset();
        this.action = null;
        this.listAll();
      });
    }else {
      this.service.create(this.form.value).subscribe(result => {
        this.users.push(result);
        this.form.reset();
      });
    }
  }

  /*Delete user by id*/
  delete(id) {
    this.service.delete(id).subscribe(result => {
      this.listAll();
    });
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
