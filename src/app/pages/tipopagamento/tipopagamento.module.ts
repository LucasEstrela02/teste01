import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipopagamentoPageRoutingModule } from './tipopagamento-routing.module';

import { TipopagamentoPage } from './tipopagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipopagamentoPageRoutingModule
  ],
  declarations: [TipopagamentoPage]
})
export class TipopagamentoPageModule {}
