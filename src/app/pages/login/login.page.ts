import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
 @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  constructor(
	  public router: Router
  ) { }

  ngOnInit() {}


  /*
  
  login(email,senha){
	 this.authService.Login(email.value,senha.value).then((res)=>{
	    this.router.navigate(['/tabs']);
	 }).catch((error) =>{ window.alert(error.message)});
	  
  } 

  cadastro(email,senha){
	 this.authService.Cadastro(email.value, senha.value).then((res)=>{
		    this.router.navigate(['/tabs']); 
	 }).catch((error) => {window.alert(error.message)});
	 
	 	  
  } 
  */ 

  login(){
    this.router.navigate(['/tabs']);
  }

   register(){
    this.router.navigate(['/register']);
  }
  
  segmentChanged(event: any) {
    if (event.detail.value === "login") {
      this.slides.slidePrev();
    } else {
      this.slides.slideNext();
    }

  }
  
  
  
}
