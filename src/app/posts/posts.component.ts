import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getPosts() {
    this.http
      .get('https://blog-apps-c12bf.firebaseio.com/posts.json')
      .subscribe(
        data => {
          this.posts = Object.values(data);
        }
      )
  }

}
