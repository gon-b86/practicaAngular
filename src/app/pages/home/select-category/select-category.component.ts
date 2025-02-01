import { Component, EventEmitter, inject, Output } from '@angular/core';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-select-category',
  imports: [],
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.css'
})
export class SelectCategoryComponent {

  @Output() seleccionEmitida: EventEmitter<string> = new EventEmitter();
  categoryList: string[] = [];
  postsService = inject(PostsService)

  ngOnInit() {
    this.categoryList = this.postsService.getCategoryList();
  }

  getCategory (event: any) {
    this.seleccionEmitida.emit(event.target.value);
  }

}
