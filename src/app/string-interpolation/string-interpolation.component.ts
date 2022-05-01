import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  person = {
    primeironome: "Joao",
    sobrenome: "Piloni",
    idade: 18,
    endereco: 'Av. Rio Grande do sul 1761'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
