import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-new',
  imports: [ReactiveFormsModule],
  templateUrl: './post-new.component.html',
  styleUrl: './post-new.component.css'
})
export class PostNewComponent {
  formModel: FormGroup;
  postsService = inject(PostsService);

  constructor() {
    this.formModel = new FormGroup({
      title: new FormControl("",[
        Validators.required,
      ]),
      text: new FormControl("",[
        Validators.required,
      ]),
      author: new FormControl("",[
        Validators.required,
      ]),
      image: new FormControl("",[
        Validators.required,
      ]),
      date: new FormControl("",[
        Validators.required
      ]),
      category: new FormControl("",[
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }

  checkErrorField(field: string, error: string): boolean {
    if (this.formModel.get(field)?.hasError(error) && this.formModel.get(field)?.touched) {
      return true;
    }
    return false;
  }

  onSubmit() {
    if (this.formModel.valid) {
      this.postsService.insert(this.formModel.value);
      this.formModel.reset();
      alert("Post añadido satisfactoriamente");
      console.log(this.postsService.getAll());
    }
  }

}