import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adverties',
  templateUrl: './adverties.component.html',
  styleUrls: ['./adverties.component.css']
})
export class AdvertiesComponent implements OnInit {

  @Input() blog:any;

  constructor() { }

  ngOnInit(): void {
  }

}
