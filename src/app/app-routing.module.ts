import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {CoursesComponent} from './components/courses/courses.component';
import {DownloadComponent} from './components/download/download.component';
import {FacltyComponent} from './components/faclty/faclty.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {ScheduleComponent} from './components/schedule/schedule.component';

const routes: Routes = [
	{
		path : "",
		component: HomeComponent
	},
	{
		path:"about-us",
		component: AboutComponent
	},
	{
		path:"courses",
		component: CoursesComponent
	},
	{
		path:"batch-schedule",
		component: ScheduleComponent
	},
	{
		path:"faculty",
		component: FacltyComponent
	},
	{
		path:"photo-gallery",
		component: GalleryComponent
	},
	{
		path:"download",
		component: DownloadComponent
	},
	{
		path:"contact-us",
		component: ContactComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
