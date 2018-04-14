import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-faclty',
  templateUrl: './faclty.component.html',
  styleUrls: ['./faclty.component.css']
})
export class FacltyComponent implements OnInit {

	// faculty = [
	// 	{
	// 		"name": "Sunil Chauthary",
	// 		"qual": "B.Sc MBA",
	// 		"phone": "9599016074",
	// 		"img": "http://www.omsaiacademy.com/sunil.jpg"
	// 	},
	// 	{
	// 		"name": "Nirma Sir",
	// 		"qual": "B.Tech",
	// 		"phone": "",
	// 		"img": "http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif"
	// 	},
	// 	{
	// 		"name": "S.K. Panday",
	// 		"qual": "M.Sc Biotech",
	// 		"phone": "",
	// 		"img": "http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif"
	// 	},
	// 	{
	// 		"name": "Shushil Kumar",
	// 		"qual": "MA",
	// 		"phone": "",
	// 		"img": "http://www.omsaiacademy.com/faculty/pic/shushil.jpg"
	// 	},
	// 	{
	// 		"name": "Abhimanyu Tomar",
	// 		"qual": "UPSC Aspirant",
	// 		"phone": "",
	// 		"img": "http://www.omsaiacademy.com/faculty/pic/tomar.jpg"
	// 	},
	// 	{
	// 		"name": "Sandeep Singh",
	// 		"qual": "B.Com M.Com C.S. Apearing",
	// 		"phone": "",
	// 		"img": "http://www.omsaiacademy.com/faculty/pic/sandeep.jpg"
	// 	},
	// ]


	faculty:any;



  constructor(private ms: MainService) { }

  ngOnInit() {
  	this.ms.getTeacherList().subscribe((r:any)=>{
  		this.faculty = r;
  		console.log(r);
  	})
  }

}
