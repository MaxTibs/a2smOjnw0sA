import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumComponent } from './app/components/pages/forum/forum.component';
import { HomeComponent } from './app/components/pages/home/home.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forum', component: ForumComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
