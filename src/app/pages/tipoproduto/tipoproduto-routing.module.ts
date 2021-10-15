import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoprodutoPage } from './tipoproduto.page';

const routes: Routes = [
  {
    path: '',
    component: TipoprodutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoprodutoPageRoutingModule {}
