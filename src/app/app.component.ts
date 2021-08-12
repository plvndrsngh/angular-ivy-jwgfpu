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
  candidatesFilter: Candidate[] = [];
  //let temp: Criminal[] = [];
  username: string = '';

  onClickSubmit(data) {
    let male = false;
    let female = false;
    let condition = true;
    if (data.male && data.female) {
      condition = false;
    } else if (!data.male && !data.female) {
      condition = false;
    } else {
      if (data.male) {
        male = true;
      } else {
        female = true;
      }
    }

    this.candidatesFilter = [];
    this.candidates = candidateData;
    if (data.username != '') {
      this.candidates.forEach(childObj => {
        if (childObj.first_name == data.username && condition == false) {
          this.candidatesFilter.push(childObj);
        } else if (male == true) {
          if (
            childObj.first_name == data.username &&
            childObj.gender == 'Male'
          ) {
            this.candidatesFilter.push(childObj);
          }
        } else if (male == false) {
          if (
            childObj.first_name == data.username &&
            childObj.gender == 'Female'
          ) {
            this.candidatesFilter.push(childObj);
          }
        }
      });

      this.candidates = this.candidatesFilter;
    }
  }
}
