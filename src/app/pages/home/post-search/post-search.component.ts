import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-search',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './post-search.component.html',
  styleUrl: './post-search.component.css'
})
export class PostSearchComponent {
  @Output() busquedaEmitida: EventEmitter<string> = new EventEmitter();
  titleForm: FormGroup;

  constructor() {
    this.titleForm = new FormGroup({
      title: new FormControl("", [])
    }, [])
  }

  getTitle() {
    this.busquedaEmitida.emit(this.titleForm.value.title);
    this.titleForm.reset();
  }

  getInputTitle(event:any) {
    this.busquedaEmitida.emit(event.target.value);
  }

}
