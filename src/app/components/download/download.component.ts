import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private ms: MainService) { }

  englishfiles:any;
  otherfiles:any;


  ngOnInit() {
  	this.ms.getFileList("english").subscribe((r:any)=>{
  		this.englishfiles = r;
  		console.log(r);
  	})

  	this.ms.getFileList("other").subscribe((r:any)=>{
  		this.otherfiles = r;
  		console.log(r);
  	})
  }

}
