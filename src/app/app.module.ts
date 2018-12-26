import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import swal from 'sweetalert'
// import { routing } from './app.routing';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/login/forgot.password';
//side menus
import { LogNavComponent } from './components/sidenav/logo.nav';
import { ProfileNavComponent } from './components/sidenav/profile.nav';
import { HeaderNavComponent } from './components/sidenav/header.nav';

//categories
import { CategoriesComponent } from './components/categories/categories';
import { AddCatComponent } from './components/categories/add.cat';
import { AddSubCatComponent } from './components/categories/add.sub.cat';
import { SubCatComponent } from './components/categories/subcategories';

//products
import { ProductsComponent } from './components/products/products.component';
import { AddProductsComponent } from './components/products/add.product';

//users
import { UsersComponent } from './components/users/users.component';
import { AddUsersComponent } from './components/users/add.user';

//wholesellers
import { WholesellersComponent } from './components/wholesellers/wholesellers.component';
import { AddWholesellersComponent } from './components/wholesellers/add.wholeseller';

//vendors
import { VendorsComponent } from './components/vendors/vendors.component';
import { AddVendorsComponent } from './components/vendors/add.vendor';

//orders
import { OrdersComponent } from './components/orders/orders.component';
import { VendorManagementComponent } from './components/vendor-management/vendor-management.component';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    CategoriesComponent,
    LogNavComponent,
    ProfileNavComponent,
    AddCatComponent,
    AddSubCatComponent,
    SubCatComponent,
    HeaderNavComponent,
    ProductsComponent,
    AddProductsComponent,
    UsersComponent,
    AddUsersComponent,
    WholesellersComponent,
    AddWholesellersComponent,
    VendorsComponent,
    AddVendorsComponent,
    OrdersComponent,
    VendorManagementComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    TooltipModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'forgotpassword', component: ForgotPasswordComponent },
      { path: 'category', component: CategoriesComponent, data: [{ page: 'categorie' }] },
      { path: 'addcategory', component: AddCatComponent, data: [{ page: 'addcategorie' }] },
      { path: 'subcategory', component: SubCatComponent, data: [{ page: 'subcategorie' }] },
      { path: 'addsubcategory', component: AddSubCatComponent, data: [{ page: 'addsubcategorie' }] },
      { path: 'prducts', component: ProductsComponent, data: [{ page: 'products' }] },
      { path: 'addprducts', component: AddProductsComponent, data: [{ page: 'addproducts' }] },
      { path: 'users', component: UsersComponent, data: [{ page: 'users' }] },
      { path: 'addusers', component: AddUsersComponent, data: [{ page: 'addusers' }] },
      { path: 'wholesellers', component: WholesellersComponent, data: [{ page: 'wholesellers' }] },
      { path: 'addwholesellers', component: AddWholesellersComponent, data: [{ page: 'addwholesellers' }] },
      { path: 'vendors', component: VendorsComponent, data: [{ page: 'vendors' }] },
      { path: 'addvendors', component: AddVendorsComponent, data: [{ page: 'addvendors' }] },
      { path: 'orders', component: OrdersComponent, data: [{ page: 'orders' }] }

    ], { useHash: true })
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: [BrowserModule, TranslateModule]
})
export class AppModule { }
