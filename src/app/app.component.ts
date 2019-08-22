import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoHuamian';

  customizeText(arg: any) {
    let temp = '';
    switch (arg.valueText) {
      case '0' || '360': {
        //statements; 
        temp = 'N';
        break;
      }
      
      
      case '45.0': {
        //statements; 
        temp = 'NE';
        break;
      }
      case '90.0': {
        //statements; 
        temp = 'E';
        break;
      }
      case '135.0': {
        //statements; 
        temp = 'SE';
        break;
      }
      case '180.0': {
        //statements; 
        temp = 'S';
        break;
      }
      case '225.0': {
        //statements; 
        temp = 'SW';
        break;
      }
      case '270.0': {
        //statements; 
        temp = 'W';
        break;
      }
      case '315.0': {
        //statements; 
        temp = 'WN';
        break;
      }
      default: {
        //statements; 
        break;
      }
    }return temp;
  }
  
}

