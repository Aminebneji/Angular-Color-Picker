import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit { 

  constructor() { }

 R : number= Math.floor(Math.random() * 255) ; 
 G : number = Math.floor(Math.random() * 255) ; 
 B : number = Math.floor(Math.random()* 255)  ;

colorGenerated = `RGB(${this.R}, ${this.G}, ${this.B})`;  

//  l = Math.max(this.R, this.G, this.B);                           je n'ai malheureusement pas eu le temps de faire une methode pour convertir
//  s : number = this.l - Math.min(this.R, this.G, this.B);           mes valeurs rgb et une nouvelle variable à appeler  dans le html pour donner le HSL 
//  h : number = this.s ;
 


// j'ai déclaré les classes en dehors et à l'interieur de la methode
//  pour les appeler dans le html en two way data binding 


  ngOnInit(): void {
  }

 randomColor(){ 
  this.R = Math.floor(Math.random() * 255) ; 
  this.G = Math.floor(Math.random() * 255) ; 
  this.B = Math.floor(Math.random()* 255)  ;
 
  this.colorGenerated = `RGB(${this.R}, ${this.G}, ${this.B})`;
     document.body.style.backgroundColor = this.colorGenerated ;

 }  

 
 

}



