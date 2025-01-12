import { Component, DestroyRef, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})

export class SignupComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
    }),
    confirmPassword: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
    }),
    firstName: new FormControl('', { validators: [Validators.required] }),
    lastName: new FormControl('', { validators: [Validators.required] }),
    street: new FormControl('', { validators: [Validators.required] }),
    number: new FormControl('', { validators: [Validators.required] }),
    postalCode: new FormControl('', { validators: [Validators.required] }),
    city: new FormControl('', { validators: [Validators.required] }),
    role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'
    >('student', { validators: [Validators.required] }),
    agree: new FormControl(false, { validators: [Validators.required] })
  })

  get emailIsInvalid() {
    return this.form.controls.email.touched && this.form.controls.email.invalid && this.form.controls.email.dirty
  }

  get passwordIsInvalid() {
    return this.form.controls.password.touched && this.form.controls.password.invalid && this.form.controls.password.dirty
  }

  onSubmit() {
    console.log(this.form)
    window.localStorage.setItem('saved-users',
      JSON.stringify(this.form.value))
  }

  onReset() {
    this.form.reset()
  }
}
