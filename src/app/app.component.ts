import { Component } from '@angular/core';
import { Ipost } from './shared/module/posts';
import { posts } from './shared/const/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'posts';
  constructor() {}

postArr: Array<Ipost> = posts;
}
