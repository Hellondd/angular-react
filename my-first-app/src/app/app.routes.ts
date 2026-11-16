import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contacts } from './contacts/contacts';
import { PostsList } from './posts-list/posts-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contacts', component: Contacts },
  { path: 'posts', component: PostsList },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
