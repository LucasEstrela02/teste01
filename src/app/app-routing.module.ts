import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) },
  { path: 'produtos', loadChildren: () => import('./pages/produtos/produtos.module').then( m => m.ProdutosPageModule) },
  { path: 'produtos/:id', loadChildren: () => import('./pages/produtos/produtos.module').then( m => m.ProdutosPageModule) },
  { path: 'ajuda', loadChildren: () => import('./pages/ajuda/ajuda.module').then( m => m.AjudaPageModule) },
  { path: 'medico', loadChildren: () => import('./pages/medico/medico.module').then( m => m.MedicoPageModule) },
  { path: 'clinica', loadChildren: () => import('./pages/clinica/clinica.module').then( m => m.ClinicaPageModule) },
  { path: 'parceiros', loadChildren: () => import('./pages/parceiros/parceiros.module').then( m => m.ParceirosPageModule) },
  { path: 'consulta', loadChildren: () => import('./pages/consulta/consulta.module').then( m => m.ConsultaPageModule) },
  { path: 'pagamento', loadChildren: () => import('./pages/pagamento/pagamento.module').then( m => m.PagamentoPageModule) },
  { path: 'tipopagamento', loadChildren: () => import('./pages/tipopagamento/tipopagamento.module').then( m => m.TipopagamentoPageModule) },
  { path: 'tipoproduto', loadChildren: () => import('./pages/tipoproduto/tipoproduto.module').then( m => m.TipoprodutoPageModule) },
  { path: 'notificacoes', loadChildren: () => import('./pages/notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
