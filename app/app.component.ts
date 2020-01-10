import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  template: `<p >{{data |json}}</p>`
})
export class AppComponent implements OnInit {

  logs: Array<string> = []
  data: any

  ngOnInit() {
    let source$ = new Observable(observer => {
      observer.next({app:"PAM"});
      
    })

    source$.subscribe(
      x => this.data = x,
      error => console.log(error),
      () => console.log('>>>>> Complete')
    );

    
  }

  
}
