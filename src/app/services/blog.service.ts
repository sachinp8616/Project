import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogsUrl = 'https://docully.com/blog/api/blogs';

  constructor(private http: HttpClient) {}

  getBlogs() {
    return this.http.get(this.blogsUrl);
  }

  getBlog(id:any){
    return this.http.get(`https://docully.com/blog/api/view/${id}/blogs`)
  }
}
