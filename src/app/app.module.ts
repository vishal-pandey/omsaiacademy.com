import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LayoutModule} from '@angular/cdk/layout';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';

import { NguCarouselModule } from '@ngu/carousel';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';








import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { FacltyComponent } from './components/faclty/faclty.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DownloadComponent } from './components/download/download.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainService } from './services/main.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CoursesComponent,
    ScheduleComponent,
    FacltyComponent,
    GalleryComponent,
    DownloadComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    LayoutModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    NguCarouselModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
