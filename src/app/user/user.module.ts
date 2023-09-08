import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BagComponent } from './bag/bag.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    WishlistComponent,
    BagComponent,
    ProfileComponent,
    UserComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
