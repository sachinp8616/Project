import { RouterModule } from '@angular/router';
import { BlogService } from './services/blog.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { AdvertiesComponent } from './components/adverties/adverties.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogComponent,
    BlogListComponent,
    SingleBlogComponent,
    AdvertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
