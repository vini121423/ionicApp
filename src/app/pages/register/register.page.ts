import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public selected:boolean;

  constructor() { }

  ngOnInit() {
  }

  public alterarUsuarioTrue(){
   this.selected = true;
  }

  public alterarUsuarioFalse(){
   this.selected = false;
  }

}
