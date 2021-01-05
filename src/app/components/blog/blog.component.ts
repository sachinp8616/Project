import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {

  id: any = '';
  blog = {};

  subscription!: Subscription

  constructor(private blogService: BlogService,
    private route: ActivatedRoute) { 
      this.id = route.snapshot.paramMap.get('id');
      if(this.id){
       this.subscription = blogService.getBlog(this.id).subscribe((item:any) => (this.blog = item.blog))
      }
    }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
