import { Component } from '@angular/core';
import { DataService, Insta } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'omnicell-project';
  selectedInstaCard: any;

  constructor(private dataService:DataService){}

  ngOnInit(){
    this.dataService.cardSelected.subscribe((instaCard:Insta)=>{
      this.selectedInstaCard=instaCard;
    })
  }

}
