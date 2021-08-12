import { Component, VERSION } from '@angular/core';
import candidateData from './candidate.json';

interface Candidate {
  id: number;
  first_name: String;
  last_name: String;
  email: string;
  gender: String;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  candidates: Candidate[] = candidateData;
  username: string = '';
  clickme() {
    console.log('it does nothing', this.username);
    //candidates.foreach
  }
}
