import { Component, Input, OnInit } from '@angular/core';
import { DataService, Insta } from 'src/app/services/data.service';

@Component({
  selector: 'app-insta-card',
  templateUrl: './insta-card.component.html',
  styleUrls: ['./insta-card.component.scss']
})
export class InstaCardComponent implements OnInit {

  constructor(private dataService:DataService) { }
  @Input() cardInfo:any;
  @Input() newLikes:number=0;

  ngOnInit(): void {
   
  }

  previewImage(){
    this.dataService.cardSelected.emit(this.cardInfo);
  }
}
