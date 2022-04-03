import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Insta {
  Image: string;
  likes: number;
  timestamp: any;
}

@Injectable()
export class DataService {

  apiUrl='https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json';
  cardSelected=new EventEmitter<Insta>();
  likeIncreased=new EventEmitter<number>();

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<Insta>(this.apiUrl);
  }

}