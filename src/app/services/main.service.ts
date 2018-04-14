import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MainService {

  constructor(private http:HttpClient) { }

  getBatch(){
  	return this.http.get("http://api.omsaiacademy.com/schedule/getschedule.php");
  }

  getFileList(folder){
  	let tosent1 = new FormData();
    tosent1.append('folder',folder);  
  	return this.http.post("http://api.omsaiacademy.com/download/getfilelist.php", tosent1, {responseType: 'json'});
  }

  getTeacherList(){
    return this.http.get("http://api.omsaiacademy.com/faculty/getlist.php");
  }

  getSliderList(){
    return this.http.get("http://api.omsaiacademy.com/gallery/getsliderlist.php");
  }

  getOtherList(){
    return this.http.get("http://api.omsaiacademy.com/gallery/getotherlist.php");
  }

}
