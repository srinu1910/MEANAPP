import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  myname:string;
  constructor(private postservice: PostsService) { }

  ngOnInit() {
    this.postservice.getAllPosts().subscribe(posts => { this.myname = posts['name'];
      console.log(posts);
    });
  }

}
