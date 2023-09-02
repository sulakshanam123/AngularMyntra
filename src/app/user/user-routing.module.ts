import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BagComponent } from "./bag/bag.component";
import { ProfileComponent } from "./profile/profile.component";
import { UserComponent } from "./user.component";
import { WishlistComponent } from "./wishlist/wishlist.component";


const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {        
                path: 'my-profile',
                component: ProfileComponent
            },
            {
                path: 'wishlist',
                component: WishlistComponent
            },
            {
                path: 'bag',
                component: BagComponent
            }
        ]
    }
        
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }