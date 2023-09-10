import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: 'product-details', loadChildren: () => import('./components/product-details/product-details.module').then(m => m.ProductDetailsModule) },
{ path: '', redirectTo: "product-details", pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
