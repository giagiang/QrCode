import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {
  title = 'QR';
  public baseInfo='https://fullstack.edu.vn/';
  public QrInfo = this.baseInfo;
  public width =200;    
  public name = '';
  public age = 0;

  constructor(route: ActivatedRoute) {

    route.queryParams.subscribe((v : any) => {
      console.log('queryParams=', v);
      this.name = v["name"]
      this.age = v["age"]
      this.QrInfo += this.name + this.age
      console.log('queryParams=', v["name"]);
      // console.log('queryParams=', v.name);

      // if (v && v["name"]) {
      //   const data = v.data;
      //   console.log('queryParams data =', data);
      //   console.log('name =', data.name);
      //   console.log('age =', data.age);
        
      //   const obj = JSON.parse(data);
      //   console.log('queryParams obj =', obj);
      //   console.log('name =', obj.name);
      //   console.log('age =', obj.age);
      // }
    });
  }

  public ngOnInit(): void{
  }

  public changeBase(event:any): void{
    this.baseInfo = event.target.value;
    this.QrInfo = event.target.value;
    this.combine();
  }
  public changeName(event:any): void{
    this.name = event.target.value;
    this.combine();
  }
  public changeAge(event:any): void{
    console.log("age: " + event.target.value)
    this.age = event.target.value;
    this.combine();
  }
  private combine(): void {
    const data = JSON.stringify({ name: this.name, age: this.age });
    this.QrInfo = this.baseInfo + '?data=' + data;
    console.log('QrInfo=', this.QrInfo);
  }
}

