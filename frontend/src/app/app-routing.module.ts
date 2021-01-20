import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbacksListComponent } from './feedbacks-list/feedbacks-list.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { StartingScreenComponent } from './starting-screen/starting-screen.component';
import {SummaryScreenComponent} from './summary-screen/summary-screen.component';

const routes: Routes = [{path: '', component: StartingScreenComponent}, { path: 'form', component: FeedbackFormComponent}, {path: 'summary', component: SummaryScreenComponent},
  {path: 'feedbacks', component: FeedbacksListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
