import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-new.component.html',
  styleUrl: './post-new.component.css'
})
export class PostNewComponent implements OnInit {
  formModel!: FormGroup;
  private postsService = inject(PostsService);
  private newPostId: number = 0;  // Almacena el nuevo ID generado dinámicamente

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.generateNewId(); // Se obtiene el nuevo ID antes de inicializar el formulario

    const currentday = new Date().toISOString().split('T')[0];

    this.formModel = this.fb.group({
      id: [{ value: this.newPostId, disabled: true }], // Campo deshabilitado para evitar modificaciones manuales
      title: ['', [Validators.required]],
      text: ['', [Validators.required]],
      author: ['', [Validators.required]],
      image: ['', [Validators.required, Validators.pattern(/^http/)]], // Validador para que empiece por "http"
      date: [currentday],
      category: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  //Obtiene el mayor ID de los posts existentes y le suma 1

  private generateNewId(): void {
    const allPosts = this.postsService.getAll();
    const maxId = allPosts.length > 0 ? Math.max(...allPosts.map(post => post.id)) : 0;
    this.newPostId = maxId + 1;
  }

  //Verifica si un campo tiene un error específico
  checkErrorField(field: string, error: string): boolean {
    return this.formModel.get(field)?.hasError(error) && this.formModel.get(field)?.touched || false;
  }

 //Envía el formulario y agrega un nuevo post
  onSubmit() {
    if (this.formModel.valid) {
      const newPost = { ...this.formModel.getRawValue(), id: this.newPostId }; // Asegura que el ID deshabilitado se incluya
      this.postsService.insert(newPost);
      this.generateNewId(); // Generar un nuevo ID para el próximo post
      this.formModel.reset();
      this.formModel.get('id')?.setValue(this.newPostId); // Asignar el nuevo ID al formulario

      Swal.fire({
        icon: "success",
        title: "Post añadido satisfactoriamente",
        showConfirmButton: false,
        timer: 1500
      });


     
      console.log(this.postsService.getAll());
    }
  }
}
