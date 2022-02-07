import { Component, Input, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
FormComponent
@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {
  @Input() ticketDetails:any[];
  @Input() userDetails:any[];

  constructor() { }

  ngOnInit(): void {
  }
}
