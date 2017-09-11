import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  handleLogin(value: any) {
       console.log('Login' + value);
  }
  handleRegister(value: any) {
       console.log('Register' + value);
  }
}
