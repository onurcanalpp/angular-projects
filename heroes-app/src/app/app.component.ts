import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {

  url = 'http://echo.jsontest.com/key/value/one/two';
  results = [];
  constructor(private http: HttpClient){
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
      for(let key in data){
        if(data.hasOwnProperty(key)){
          this.results.push(data[key]);
        }
      }
    })
  }

  title = 'Heroes Title';

}
