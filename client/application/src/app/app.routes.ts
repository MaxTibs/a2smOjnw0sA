import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumComponent } from './components/pages/forum/forum.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TestPageComponent } from './components/pages/test-page/test-page.component';

// Route Configuration
export const routes: Routes = [
  { path: 'slideshow', component: HomeComponent },
  { path: 'forum', component: ForumComponent },
  { path: '', component: TestPageComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
