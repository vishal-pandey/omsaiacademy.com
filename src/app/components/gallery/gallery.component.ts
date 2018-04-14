import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private ms: MainService) { }

  public carouselOne: NguCarousel;

  slider:any = [];
  other:any = [];
  

  ngOnInit() {
  	this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }

    this.ms.getSliderList().subscribe((r:any)=>{
    	for(var i of r){
    		if (i != '.' && i != '..') {
    			this.slider.push(i);
    		}
    	}
    })

    this.ms.getOtherList().subscribe((r:any)=>{
    	for(var i of r){
    		if (i != '.' && i != '..') {
    			this.other.push(i);
    		}
    	}
    })
  }

  public myfunc(event: Event) {
     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel
  }

}
