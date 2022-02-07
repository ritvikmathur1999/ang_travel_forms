import { Component, OnInit } from '@angular/core';
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
  ticketDetails=[];
  localItem:string
  count=1;
  isPassenger: Boolean;

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
    this.localItem = localStorage.getItem('this.userDetails')
  }
  ngOnInit(): void {}

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
    this.count-=1;
  }

  triggerLocalStorage(userDetails:any[]){
    localStorage.clear()
    localStorage.setItem("userDetails",JSON.stringify(userDetails))
    this.ticketDetails=JSON.parse(localStorage.getItem("userDetails"))
  }
  
  showPassengers(){
    return this.isPassenger=true;
  }

  onSubmit(){
    this.userDetails=[];
    this.userDetails.push(this.passengerForm.value);
    this.triggerLocalStorage(this.userDetails);
    console.log(this.ticketDetails)
  }
}
