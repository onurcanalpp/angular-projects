import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {

  constructor() { }

  getSimpleFormValues(data){
    console.warn(data);
  }

  ngOnInit(): void {
    console.log();
  }

}
