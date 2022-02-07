import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
   gender= ['male', 'female'];

  //Final Data
  userDetails = [];
  count=1;

  addPassengerForm: FormGroup;

  //Dynamic Form Template
  passengerDetailsForm(count:number): FormGroup {
    return this.fb.group({
      id:count,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  constructor(private fb: FormBuilder) {
    this.addPassengerForm = this.passengerDetailsForm(this.count);
  }

  //Form Format
  passengerForm = this.fb.group({
    from: ['', Validators.required],
    to: ['', Validators.required],
    email:['', Validators.required],
    phoneNo:['', Validators.required],
    addMember: this.fb.array(
      [this.passengerDetailsForm(this.count)],
      Validators.required
    ),
  });


  get addMember(): FormArray {
    return this.passengerForm.get('addMember') as FormArray;
  }

  //Pushes new array to addMember Array
  addPassenger() {
    this.count+=1;
    this.addMember.push(this.passengerDetailsForm(this.count));
  }

  deletePassenger(){
    this.addMember.removeAt(-1)
  }

  ngOnInit(): void {}

  onSubmit(){
    this.userDetails.push(this.passengerForm.value);
    console.log(this.userDetails);
  }
}
