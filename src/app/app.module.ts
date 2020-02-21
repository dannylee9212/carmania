import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesHomeComponent } from './articles/articles-home/articles-home.component';
import { ArticleComponent } from './articles/article/article.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SlidenavComponent } from './header/slidenav/slidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// ngx boots
import { CarouselModule } from 'ngx-bootstrap/carousel';

// MAT
import { MatSidenavModule } from '@angular/material/sidenav';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CardComponent } from './articles/card/card.component';
import { TruncatePipe } from './lib/pipes/truncate.pipe';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MatIconModule } from '@angular/material/icon';
// form 
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';

// cookie
import { CookieService } from 'ngx-cookie-service';
import { FavsComponent } from './articles/favs/favs.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ArticlesComponent,
    ArticlesHomeComponent,
    ArticleComponent,
    FooterComponent,
    HeaderComponent,
    SlidenavComponent,
    CarouselComponent,
    CardComponent,
    TruncatePipe,
    NewsletterComponent,
    FavsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    CarouselModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
