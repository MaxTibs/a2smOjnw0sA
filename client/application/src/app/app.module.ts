import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NguiMapModule} from '@ngui/map';
//Component
import { AppComponent } from './app.component';
import { ColorChart } from './components/colorChart/colorChart.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { HeaderTopComponent } from './components/my-header/header-top/header-top.component';
import { HeaderMidComponent } from './components/my-header/header-mid/header-mid.component';
import { BannerComponent } from './components/my-header/banner/banner.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ForumComponent } from './components/pages/forum/forum.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { MySliderComponent } from './components/my-slider/my-slider.component';
import { TestPageComponent } from './components/pages/test-page/test-page.component';
import { routing } from './app.routes';

//Classes
import { Couleur } from './classes/couleur';

//Services
import { Socket } from './services/socket';

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
    MySliderComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCc2wrWw_Bk_GMfG5V9WKGMsa0f_ugyeLM'})
  ],
  providers: [Couleur, Socket],
  bootstrap: [AppComponent]
})
export class AppModule { }
