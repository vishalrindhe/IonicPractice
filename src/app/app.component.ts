import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

interface User {
  id: number;
  first: string;
  last: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private translate: TranslateService) {
    // translate.addLangs(['en','fr','ch'])
    // translate.setDefaultLang('en')
    // const browserLang =   translate.getBrowserLang()
    // translate.use(browserLang.match(/en|fr|ch/) ? browserLang : 'en')
    this.initializeApp();
  }

  initializeApp(){
    this.translate.setDefaultLang('en');
  }
  // onCancel(){

  // }

  // onChange(lang){
  //   console.log("abc");
  //   this.translate.use('fr')
  //   console.log(lang);
  // }
}
