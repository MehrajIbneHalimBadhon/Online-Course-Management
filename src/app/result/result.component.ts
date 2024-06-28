import { Component, Input, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service'
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
value = JSON.parse(localStorage.getItem("value"));
  constructor(private shared: ApiService) { }

  ngOnInit(): void {
    
  }
  


}
