import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {

  @Input() blog:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoBlogDetails(url: any){
      this.router.navigate(['/blog/'+url]);
  }

}
