import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Course } from "../model/course";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

Injectable({
  providedIn:'root'
})

export class CoursesService{
 constructor(private http:HttpClient){}



 loadAllCourses():Observable<Course[]>{
  return this.http.get<Course[]>('/api/courses').pipe(
    map(res=>res["payload"])
  )
  // .subscribe(
  //   res => {

      // const courses: Course[] = res["payload"].sort(sortCoursesBySeqNo);

      // this.beginnerCourses = courses.filter(course => course.category == "BEGINNER");

      // this.advancedCourses = courses.filter(course => course.category == "ADVANCED");

    // });
 }
}