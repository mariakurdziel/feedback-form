import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Feedback} from "./feedback";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  addFeedback(newFeedback) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/feedbacks', newFeedback, {headers: headers}).subscribe(newFeedback);
  }

  getFeedbacks() {
    return this.http.get('http://localhost:3000/feedbacks');
  }
}
