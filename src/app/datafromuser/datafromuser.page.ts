import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datafromuser',
  templateUrl: './datafromuser.page.html',
  styleUrls: ['./datafromuser.page.scss'],
})
export class DatafromuserPage implements OnInit {

  data = [];

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
  }


}
