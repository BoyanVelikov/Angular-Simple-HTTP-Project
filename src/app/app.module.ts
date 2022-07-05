import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { ShortenPipe } from './shorten.pipe';
import { Interceptor } from './interceptor.service';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { FurnitureAllComponent } from './furniture-all/furniture-all.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureEditComponent } from './furniture-edit/furniture-edit.component';

const furnitureRoutes: any = [{
  path: '', children: [FurnitureAllComponent, FurnitureDetailsComponent, FurnitureEditComponent]
},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ShortenPipe,
    FurnitureAllComponent,
    FurnitureDetailsComponent,
    FurnitureEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forChild(furnitureRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


