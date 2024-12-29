import { Component, Input, OnInit } from '@angular/core';
import {Ipost} from '../../module/posts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
[x: string]: any;
posts: any;

  constructor() { }
  
  ngOnInit(): void {}
   @Input() postobj!: Ipost

}
