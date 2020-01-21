import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router} from '@angular/router';
// import * as moment from 'moment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

   todaysDate = new Date()

  constructor(private router : Router) { }  

  ngOnInit() {
  }

  logOut() {
    this.router.navigate(['/login']);
  }


  // getMonthsStartweek(date): number {
  //   return moment(this.date).startOf('month').day()
  // }   
 
  
}
