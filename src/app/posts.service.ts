import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class PostsService {
  constructor(private http: Http) { 
  }

  getAllPosts(){
    return this.http.get("/api/posts")
    .map((res) => {
      return res.json()
    });
  }


}
