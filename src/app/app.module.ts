import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstaCardsComponent } from './insta-cards/insta-cards.component';
import { InstaCardComponent } from './insta-cards/insta-card/insta-card.component';
import { DataService } from './services/data.service';
import { InstaCardPreviewComponent } from './insta-card-preview/insta-card-preview.component';
import { SortLikesPipe } from './sort-likes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InstaCardsComponent,
    InstaCardComponent,
    InstaCardPreviewComponent,
    SortLikesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService,SortLikesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
