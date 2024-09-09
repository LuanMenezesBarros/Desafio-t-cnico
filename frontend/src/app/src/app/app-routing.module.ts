import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransacaoListComponent } from './components/transacao-list/transacao-list.component';
import { TransacaoFormComponent } from './components/transacao-form/transacao-form.component';

const routes: Routes = [
  { path: '', component: TransacaoListComponent },
  { path: 'create', component: TransacaoFormComponent },
  { path: 'edit/:id', component: TransacaoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
