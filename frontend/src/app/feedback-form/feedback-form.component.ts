import { Component, OnInit} from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'],
  providers: [FeedbackService]
})
export class FeedbackFormComponent implements OnInit {

  login: String;
  email: String;
  rating: String;
  title: String;
  description: String;
  submitted = false;

  constructor(private feedbackService: FeedbackService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addFeedback(form: NgForm) {
    this.submitted=true;

    if(form.invalid) {
     return;
    }

    const newFeedback = {
      login: this.login,
      email: this.email,
      rating: this.rating,
      title: this.title,
      description: this.description
    }

    this.feedbackService.addFeedback(newFeedback);
    this.router.navigate(['/summary']);

  }
}
