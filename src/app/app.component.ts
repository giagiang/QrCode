import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QR';
  public QrInfo='https://www.facebook.com/gia.giang.18/';
  public width =200;

  public change(event:any): void{
    console.log('event=', event.target.value);
    this.QrInfo = event.target.value
  }
}
