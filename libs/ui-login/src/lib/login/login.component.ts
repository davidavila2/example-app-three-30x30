import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
    if (this.form.invalid) return;
    this.router.navigate(['/projects']);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }

}
