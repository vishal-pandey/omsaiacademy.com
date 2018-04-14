import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

	courses = [
		{
			"course": "Spoken English",
			"for": ["School Students","College Students","Teacher's","Professionals","Interviews","Jobs","Group Discussion"]
		},
		{
			"course": "Advance Spoken English",
			"for": ["Learn to speak English to the advance Level, in most fluent way."]
		},
		{
			"course": "Competitive English",
			"for": ["UPSC", "SSC", "Railway", "Bank", "DSSSB"]
		},
		{
			"course": "Interview",
			"for": ["IAS", "Bank", "SSC", "Other Govt. Jobs"]
		},
		{
			"course": "Group Discussion",
			"for": ["NDA", "Bank", "Addmission", "Any Other Area"]
		},
		{
			"course": "Class 1st to 5th",
			"for": ["Strong Foundation", "Attention On Every Student", "Overall Development", "Good Marks", "Regular Tes"]
		},
		{
			"course": "Class 6th to 10th",
			"for": ["Strong Foundation", "Attention On Every Student", "Overall Development", "Good Marks", "Regular Tes"]
		},
		{
			"course": "Class 11th to 12th",
			"for": ["Arts", "English", "Economics", "Political Science", "Geography", "History"]
		},

	]

  constructor() { }

  ngOnInit() {
  }

}
