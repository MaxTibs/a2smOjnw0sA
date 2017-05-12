import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ColorChart } from './components/colorChart/colorChart.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { routing } from '../app.routes';

import { Couleur } from './classes/couleur';
import { HeaderTopComponent } from './components/my-header/header-top/header-top.component';
import { HeaderMidComponent } from './components/my-header/header-mid/header-mid.component';
import { BannerComponent } from './components/my-header/banner/banner.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ForumComponent } from './components/pages/forum/forum.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { MySliderComponent } from './components/my-slider/my-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorChart,
    MyHeaderComponent,
    HeaderTopComponent,
    HeaderMidComponent,
    BannerComponent,
    HomeComponent,
    ForumComponent,
    MyFooterComponent,
    MySliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Couleur],
  bootstrap: [AppComponent]
})
export class AppModule { }
