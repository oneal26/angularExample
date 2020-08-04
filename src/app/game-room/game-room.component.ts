import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Observer } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})

export class GameRoomComponent implements OnInit {

  name = '';
  color = '';

  constructor(private http: HttpClient) { }


  getApi(): Observable<any> {
    var apiUrl = 'https://reqres.in/api/products/4'
    return this.http.get(apiUrl);
  }

  ngOnInit() {
    this.getApi()
      .subscribe((data)=>{
        this.name = data.data.name;
        this.color = data.data.color;
        console.log(this.name);
      });

  }

}
