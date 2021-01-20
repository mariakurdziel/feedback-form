import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FeedbackFormComponent} from './feedback-form/feedback-form.component';
import {StartingScreenComponent} from './starting-screen/starting-screen.component';
import {SummaryScreenComponent} from './summary-screen/summary-screen.component';

import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxInputStarRatingModule} from '@ngx-lite/input-star-rating';
import {FeedbacksListComponent} from './feedbacks-list/feedbacks-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FeedbackFormComponent,
    FeedbacksListComponent,
    StartingScreenComponent,
    SummaryScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxInputStarRatingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
