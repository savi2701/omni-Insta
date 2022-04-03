import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-insta-card-preview',
  templateUrl: './insta-card-preview.component.html',
  styleUrls: ['./insta-card-preview.component.scss']
})
export class InstaCardPreviewComponent implements OnInit {

  @Input() selectedInstaCard:any;
  
  likeBtnClicked:boolean=false;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  increaseLikes(){
    this.selectedInstaCard.likes++;
    console.log("selecard likes"+this.selectedInstaCard.likes)
    this.dataService.likeIncreased.emit(this.selectedInstaCard.likes);
    
  }

}
