import { Component, OnInit } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "My Button";
  i = 0;
  mode = "determinate";
  btnEnable = true;
  selectDisabled= false;
  selectedOption = 1;
  name = "";

  constructor() { }

  ngOnInit(): void {
  }

  save(){ 
    console.log("click")
  }
  
  inc(){
    this.i++;
    this.buttonName = "It was clicked " + this.i + " times";
  }

  disable(){
    this.btnEnable = false;
    this.mode = "indeterminate";
    setTimeout(() => {
      this.btnEnable = true;
    this.mode = "determinate";
    }, 3000); 
  }

  cbChange(event: any){
    console.log(event.checked);
    this.selectDisabled=event.checked;
    
  }

  selectionChange(event: any){
    console.log(event);
    this.selectedOption = event.value
  }

  inputEvent(event: any){
    console.log(event);
    this.name= event.target.value;
  }
}
