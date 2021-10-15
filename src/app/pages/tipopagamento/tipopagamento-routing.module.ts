import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipopagamentoPage } from './tipopagamento.page';

const routes: Routes = [
  {
    path: '',
    component: TipopagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipopagamentoPageRoutingModule {}
