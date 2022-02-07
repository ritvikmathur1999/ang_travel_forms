import { FormGroup, FormControl } from '@angular/forms';

export default class TravelFormModel
  { 
    passengerDetails = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    }) 
}
    