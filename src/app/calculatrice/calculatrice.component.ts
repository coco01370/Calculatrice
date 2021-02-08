import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {

  constructor() { }

  numberOne: number;
  numberTwo: number;
  total: number;
  addition: boolean;
  soustraction: boolean;
  multiplication: boolean;
  division: boolean;

  ngOnInit(): void {
    this.addition = false;
    this.soustraction = false;
    this.multiplication = false;
    this.division = false;
  }

  public Addition(){
    this.addition = true;
    this.soustraction = false;
    this.multiplication = false;
    this.division = false;
  }

  public Soustraction(){
    this.addition = false;
    this.soustraction = true;
    this.multiplication = false;
    this.division = false;
  }

  public Multiplication(){
    this.addition = false;
    this.soustraction = false;
    this.multiplication = true;
    this.division = false;
  }

  public Division(){
    this.addition = false;
    this.soustraction = false;
    this.multiplication = false;
    this.division = true;
  }
}
