import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() tittle = '';
  @Output() inc = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  btnClick(n:number){
    this.inc.emit(n);
  }
}
