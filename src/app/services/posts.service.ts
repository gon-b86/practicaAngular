import { Injectable } from '@angular/core';
import { IPost } from '../interface/ipost.interface';
import { POSTS } from '../db/posts.db';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postsList: IPost[] = POSTS;
  private categoryList: string[] = [];

  constructor() {
    this.categoryList = Array.from(new Set(POSTS.map(post => post.category)));;
  }

  getAll(): IPost[] {
    return this.postsList;
  }

  getById(idPost: number): IPost|undefined{
    return this.postsList.find(post => post.id === idPost)
  }

  getByTitle(title: string): IPost[] {
    return this.postsList.filter(post => post.title.toLowerCase().includes(title.toLowerCase()))
  }

  getByCategory(category: string): IPost[] {
    return this.postsList.filter(post => post.category.includes(category));
  }

  getCategoryList(): string[] {
    return this.categoryList;
  }

  getByTitleCategory(title: string, category: string) {
    return this.postsList.filter(post => post.title.includes(title) && post.category.includes(category))
  }

  insert(post: IPost): void {
    this.postsList.push(post);
  }

}


