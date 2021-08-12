import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {
    this.addMoreItem();
    this.loadUsers();
  }

  ngOnInit() {}

  items = [];
  users = [];
  page = 0;
  count = 10;
  message;

  async presentToast() {
    const toast = await this.toastController.create({
      // header: 'Toast header',
      translucent: true,
      message: this.message,
      position: 'top',
      cssClass: 'middle',
      duration: 2000,
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  loadUsers() {
    this.http
      .get(`https://randomuser.me/api/?results=10&page=${this.page}`)
      .subscribe((res) => {
        console.log(res);
        this.users = this.users.concat(res[`results`]);
        console.log('users:', this.users);
      });
  }

  loadData(event) {
    setTimeout(() => {
      if (this.count == 50) {
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        event.target.complete();
        this.infiniteScroll.disabled = true;
        this.message = "You've reached at end of the list";
        this.presentToast();
        return;
      } else {
        console.log('Done');
        this.message = this.count + '/50';
        this.presentToast();
        this.count = this.count + 10;
        console.log('count:', this.count);

        this.loadUsers();
        event.target.complete();
      }
    }, 2000);
  }

  addMoreItem() {
    for (let i = 0; i < 15; i++) {
      this.items.push(i);
    }
  }
}
