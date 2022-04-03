import { Component, OnInit } from '@angular/core';
import { DataService, Insta } from '../services/data.service';

@Component({
  selector: 'app-insta-cards',
  templateUrl: './insta-cards.component.html',
  styleUrls: ['./insta-cards.component.scss']
})
export class InstaCardsComponent implements OnInit {

  constructor(private _data:DataService) { }
  instaCards:any=[];
  newLikes:number=0;
  sortByLikesClicked:boolean=false;

  ngOnInit(): void {
    this._data.getData().subscribe((data:Insta)=>{
      this.instaCards=data;
    });
    this._data.likeIncreased.subscribe((likes:number)=>{
      this.newLikes=likes;
      console.log(this.newLikes);
    })
  }

  

}
