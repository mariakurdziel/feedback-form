import {Component, OnInit} from '@angular/core';
import {Feedback} from '../feedback';
import {FeedbackService} from '../feedback.service';

@Component({
  selector: 'app-feedbacks-list',
  templateUrl: './feedbacks-list.component.html',
  styleUrls: ['./feedbacks-list.component.css']
})
export class FeedbacksListComponent implements OnInit {

  feedbacks: Feedback[];

  constructor(private feedbackService: FeedbackService) {
  }

  ngOnInit(): void {
    this.getFeedbacks();
  }

  parseDates(feedbacks: Feedback[]) {
    feedbacks.forEach((feedback) => {
      let index = feedback.date.indexOf('T');
      feedback.date = feedback.date.substring(0, index);
    });
  }

  getFeedbacks() {
    this.feedbackService.getFeedbacks().subscribe((feedbacks: Feedback[]) => {
      this.parseDates(feedbacks);
      this.feedbacks = feedbacks;
    });
  }
}
