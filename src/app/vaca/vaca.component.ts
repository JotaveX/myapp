import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaca',
  templateUrl: './vaca.component.html',
  styleUrls: ['./vaca.component.css']
})
export class VacaComponent implements OnInit {

  cio = Date
  doenca = ""

  showVaca: boolean = false;
  showInseminacao: boolean = false;
  showParto: boolean = false;
  showMedicacao: boolean = false;
  showVacinacao: boolean = false;
  showProducao: boolean = false;


  vaca = {
    nome: "",
    sexo: "",
    nasc: Date,
    numBrin: 0,
    codigo: 0,
    pai: "",
    mae: "",
    foto: File,
    obs: "",
  }

  inseminacao = {
    inseminacao: Date,
    touro: "",
    inseminador: "",
  }

  parto = {
    parto_previsto: Date,
    parto: Date,
    sexo_filhote: "",
  }

  medicacao = {
    medicamento_data: Date,
    medicamento: "",
    aplicador: "",
  }

  vacinacao = {

    data_vacinacao: Date,
    vacina: "",
    vacinador: "",
    }

  producao = {
    forma: "",
    litros: 0,
    peso: 0,
    altura: 0,
    score: 0,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
