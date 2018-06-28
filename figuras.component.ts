import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public a:number;
  public b:number;
  public resultado;

  areaRectangulo(){
    this.resultado=this.a*this.b;
  }
  areaCirculo(){
    this.resultado=Math.pow(this.a,this.b)*Math.PI;
  }
  areaTriangulo(){
    this.resultado=this.a * this.b/2;
  }
  areaCuadrado(){
    this.resultado=this.a*this.b;
  }
  areaTrapecio(){
    this.resultado=this.a+this.b/2;
  }
  
}