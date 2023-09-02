import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { BagComponent } from './user/bag/bag.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserAuthGuard } from './user/user-auth.guard';
import { UserLoginGuard } from './user/user-login.guard';
import { UserComponent } from './user/user.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { WomenGuard } from './women.guard';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path: 'shop/men', component: MenComponent
  },
  {
    path: 'shop/women', component: WomenComponent
  },
  {
    path: 'shop/kids', component: KidsComponent
  },
  {
    path: 'shop/kitchen',
    loadChildren: () => import('../app/kitchen/kitchen.module').then(m => m.KitchenModule)
  },
  {
    path: 'shop/general',
    loadChildren: () => import('../app/general/general.module').then(m => m.GeneralModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../app/user/user.module').then(m => m.UserModule),
    canActivate: [UserAuthGuard]
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
