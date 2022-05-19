import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcontainer',
  templateUrl: './ngcontainer.component.html',
  styleUrls: ['./ngcontainer.component.css']
})
export class NgcontainerComponent implements OnInit {

  users = [
    {login: "bob", role:"admin", lastlogin: new Date('2/1/2018')},
    {login: "lia", role:"user", lastlogin: new Date('4/30/2018')},
    {login: "john", role:"admin", lastlogin: new Date('4/23/2018')},
    {login: "robin", role:"user", lastlogin: new Date('2/20/2018')},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
