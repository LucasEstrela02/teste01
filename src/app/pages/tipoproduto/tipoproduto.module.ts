import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoprodutoPageRoutingModule } from './tipoproduto-routing.module';

import { TipoprodutoPage } from './tipoproduto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoprodutoPageRoutingModule
  ],
  declarations: [TipoprodutoPage]
})
export class TipoprodutoPageModule {}
