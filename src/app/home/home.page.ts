import { Component } from '@angular/core';

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  language: string = this.translateService.currentLang;
  allLang = [{"name":'English',"notation":'en'},
  {"name":'Russia',"notation":'ru'},
  {"name":'Chinese',"notation":'ch'},]
  constructor(private translateService: TranslateService) {
    if(this.language == null){
      this.language = 'en'
    }
  } 

  languageChange() { 
    this.translateService.use(this.language);
  } 

 changeTheme(event){
  console.log(event.detail.checked);
  if(event.detail.checked){
    document.body.setAttribute('color-theme','dark')
  } else{
    document.body.setAttribute('color-theme','light')

  }
  
 }
  

}

