import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit, OnDestroy {
  p:any;
  blogs = [
    {
      "id": 43,
      "title": "This is a test blog",
      "blog_url": "this-is-a-test-blog-2",
      "content": "<p>Testing Blog content</p>",
      "image": "1608128909.png",
      "author": "WebAdmin",
      "imgUrl": "https://www.docully.com/blog/blogimages/1608128909.png",
      "category_id": "null",
      "meta_title": null,
      "meta_description": null,
      "meta_keyword": null,
      "time_toread": "3",
      "adv_title": "Start Free Trial",
      "adv_description": "15 Days, 1 GB, No Credit Card required.",
      "adv_image": "https://www.docully.com/blog/public/advimages/1609259711.png",
      "adv_buttonlink": null,
      "adv_butttonname": "Start Now",
      "created_at": "2020-12-15 08:00:22",
      "updated_at": "2020-12-29 16:35:11"
  },
  {
      "id": 53,
      "title": "Blog with Sid",
      "blog_url": "blog-with-sid",
      "content": "<p>I am going to send this access to you</p>",
      "image": "1608114919.jpg",
      "author": "Siddhesh Rane",
      "imgUrl": "https://www.docully.com/blog/blogimages/1608114919.jpg",
      "category_id": "[\"Database\"]",
      "meta_title": null,
      "meta_description": null,
      "meta_keyword": null,
      "time_toread": "3",
      "adv_title": "Start your free trial",
      "adv_description": "No Credit Card required",
      "adv_image": "https://www.docully.com/blog/public/advimages/1609259711.png",
      "adv_buttonlink": "https://docully.com/#/free-trial",
      "adv_butttonname": "Start",
      "created_at": "2020-12-16 10:35:19",
      "updated_at": "2020-12-18 12:51:37"
  },
  {
      "id": 54,
      "title": "new blog by ashish",
      "blog_url": "new-blog-ashish",
      "content": "<p>sadsad</p>",
      "image": "1608646041.jpg",
      "author": "ashish",
      "imgUrl": "https://www.docully.com/blog/blogimages/1608646041.jpg",
      "category_id": "[\"Technical\"]",
      "meta_title": "asdasdas",
      "meta_description": "sad",
      "meta_keyword": "sadsad,asdsad,asd,as,das",
      "time_toread": "2",
      "adv_title": "adv title",
      "adv_description": "adv description",
      "adv_image": "https://www.docully.com/blog/advimages/1608646041.gif",
      "adv_buttonlink": null,
      "adv_butttonname": "dasddsadas",
      "created_at": "2020-12-22 14:07:21",
      "updated_at": "2020-12-22 14:07:21"
  },
  {
      "id": 55,
      "title": "Wonderful product",
      "blog_url": "wonderful-product",
      "content": "<p>testasdklj</p>",
      "image": "1608794270.png",
      "author": "Docully",
      "imgUrl": "https://www.docully.com/blog/blogimages/1608794270.png",
      "category_id": "[\"Technical\",\"Database\"]",
      "meta_title": "title",
      "meta_description": "deta",
      "meta_keyword": "key",
      "time_toread": "5",
      "adv_title": "Advertisement",
      "adv_description": "Big Advertisement",
      "adv_image": "https://www.docully.com/blog/advimages/1608794270.png",
      "adv_buttonlink": "https://docully.com/#/use-case/corporate",
      "adv_butttonname": "Corporate",
      "created_at": "2020-12-24 07:17:50",
      "updated_at": "2020-12-24 07:17:50"
  }
  ];

  subscription!: Subscription;

  constructor(private blogService: BlogService) {
     this.subscription = this.blogService.getBlogs().subscribe((item: any) => (this.blogs = [...this.blogs,...item.blogs]))
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
