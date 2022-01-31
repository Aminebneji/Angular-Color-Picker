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

 l = Math.max(this.R, this.G, this.B);
 s : number = this.l - Math.min(this.R, this.G, this.B);
 h : number = this.s ;
 

  ngOnInit(): void {
  }

 randomColor(){ 
  this.R = Math.floor(Math.random() * 255) ; 
  this.G = Math.floor(Math.random() * 255) ; 
  this.B = Math.floor(Math.random()* 255)  ;
 
  this.colorGenerated = `RGB(${this.R}, ${this.G}, ${this.B})`;
     document.body.style.backgroundColor = this.colorGenerated ;
  console.log(this.h , this.s , this.l)
 }  

 
 

}




