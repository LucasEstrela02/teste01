import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  private productId: string = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    public navCtrl: NavController, 
    public http   : HttpClient,
    public items,
  ) { 
    this.productId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.load();
  }
  load(){
      this.http
      .get('http://localhost/dbionic/retrieve-data.php')
      .subscribe((data : any) => 
      {
         console.dir(data);
         this.items = data;			
      },
      (error : any) =>
      {
         console.dir(error);
      });
   }

}
