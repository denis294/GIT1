import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() datepost: Date;

  constructor() { }

  ngOnInit() {
  }

  like() {
    console.log('Like!');
    this.postLoveIts ++;
  }

  nolike() {
    console.log('Dont like!');
    this.postLoveIts --;
  }

}
