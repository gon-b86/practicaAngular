import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostViewComponent } from './pages/post-view/post-view.component';
import { PostNewComponent } from './pages/post-new/post-new.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: 'home' },
    { path: "home", component: HomeComponent},
    { path: "post/:idPost", component: PostViewComponent},
    { path: "postnew", component: PostNewComponent },
    { path: "**", redirectTo: 'home' }
];
