import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with 5 controls', () => {
    expect(component.signUpForm.contains('name')).toBeTruthy();
    expect(component.signUpForm.contains('email')).toBeTruthy();
    expect(component.signUpForm.contains('phone')).toBeTruthy();
    expect(component.signUpForm.contains('password')).toBeTruthy();
  });

  it('should make the name control required', () => {
    const nameControl = component.signUpForm.get('name')!;
    nameControl.setValue('');
    expect(nameControl.valid).toBeFalsy();
    expect(nameControl.errors!['required']).toBeTruthy();
  });

  it('should make the email control required', () => {
    const emailControl = component.signUpForm.get('email')!;
    emailControl.setValue('');
    expect(emailControl.valid).toBeFalsy();
    expect(emailControl.errors!['required']).toBeTruthy();
  });

  it('should validate email minimum length', () => {
    const emailControl = component.signUpForm.get('email')!;
    emailControl.setValue('abc');
    expect(emailControl.valid).toBeFalsy();
    expect(emailControl.errors!['minlength']).toBeTruthy();
  });

  it('should make the phone control required', () => {
    const phoneControl = component.signUpForm.get('phone')!;
    phoneControl.setValue('');
    expect(phoneControl.valid).toBeFalsy();
    expect(phoneControl.errors!['required']).toBeTruthy();
  });

  it('should make the password control required', () => {
    const passwordControl = component.signUpForm.get('password')!;
    passwordControl.setValue('');
    expect(passwordControl.valid).toBeFalsy();
    expect(passwordControl.errors!['required']).toBeTruthy();
  });

  it('should validate password minimum length', () => {
    const passwordControl = component.signUpForm.get('password')!;
    passwordControl.setValue('123');
    expect(passwordControl.valid).toBeFalsy();
    expect(passwordControl.errors!['minlength']).toBeTruthy();
  });

  it('should check if the form is invalid when empty', () => {
    expect(component.signUpForm.valid).toBeFalsy();
  });

  it('should display an error message when name is empty', () => {
    let nameInput = fixture.debugElement.query(By.css('#name')).nativeElement;
    nameInput.value = '';
    nameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    let errorMsg = fixture.debugElement.query(By.css('.inputBox span'));
    expect(errorMsg.nativeElement.textContent).toContain('Name is required.');
  });

  it('should display an error message when email is empty', () => {
    let emailInput = fixture.debugElement.query(By.css('#email')).nativeElement;
    emailInput.value = '';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    let errorMsg = fixture.debugElement.query(By.css('.inputBox span'));
    expect(errorMsg.nativeElement.textContent).toContain('Email is required.');
  });

  it('should display an error message when phone is empty', () => {
    let phoneInput = fixture.debugElement.query(By.css('#phone')).nativeElement;
    phoneInput.value = '';
    phoneInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    let errorMsg = fixture.debugElement.query(By.css('.inputBox span'));
    expect(errorMsg.nativeElement.textContent).toContain('Phone number is required.');
  });

  it('should display an error message when password is empty', () => {
    let passwordInput = fixture.debugElement.query(By.css('#password')).nativeElement;
    passwordInput.value = '';
    passwordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    let errorMsg = fixture.debugElement.query(By.css('.inputBox span'));
    expect(errorMsg.nativeElement.textContent).toContain('Password is required.');
  });

  it('should display an error message when email is too short', () => {
    let emailInput = fixture.debugElement.query(By.css('#email')).nativeElement;
    emailInput.value = 'a@b';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    let errorMsg = fixture.debugElement.query(By.css('.inputBox span'));
    expect(errorMsg.nativeElement.textContent).toContain('Email must be at least 4 characters long.');
  });

  it('should display an error message when password is too short', () => {
    let passwordInput = fixture.debugElement.query(By.css('#password')).nativeElement;
    passwordInput.value = '123';
    passwordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    let errorMsg = fixture.debugElement.query(By.css('.inputBox span'));
    expect(errorMsg.nativeElement.textContent).toContain('Password must be at least 4 characters long.');
  });

});
