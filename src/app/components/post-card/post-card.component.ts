import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IPost } from '../../interface/ipost.interface';

@Component({
  selector: 'app-post-card',
  imports: [RouterLink],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  @Input() miPost!: IPost;

}
