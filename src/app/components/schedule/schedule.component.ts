import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private ms: MainService) { }

  batch:any;

  displayedColumns = ['sno', 'batch', 'btime', 'day'];
  dataSource = this.batch;




  ngOnInit() {
  	this.ms.getBatch().subscribe((r:any)=>{
  		this.batch = r;
  		this.dataSource = r;
  		console.log(r);
  	})
  }

}
