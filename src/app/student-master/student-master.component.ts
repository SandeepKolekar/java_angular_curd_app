import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AddStudentComponent } from '../add-student/add-student.component';
import { UpdateStudentComponent } from '../update-student/update-student.component';
@Component({
  selector: 'app-student-master',
  templateUrl: './student-master.component.html',
  styleUrls: ['./student-master.component.less']
})
export class StudentMasterComponent implements OnInit {
  stdList :object[];
  modalReference: NgbModalRef;
  constructor(private httpClient: HttpClient,
    private modalService: NgbModal) {}

  //get student details
  getStdDetailsService() : Observable<any> {
    return this.httpClient.get("http://localhost:8080/getStudents");
  }
  getStdList(){
    this.getStdDetailsService().subscribe(res => {
      console.dir(res);
      this.stdList  = res;
    });
  }
  
  getReportService() : Observable<any> {
    return this.httpClient.get("http://localhost:8080/student-report");
  }
  getReport(){
    window.open("http://localhost:8080/student-report");
    // this.getReportService().subscribe(res => {
    //   console.dir(res);
    //   window.open("http://localhost:8080/student-report");
    // });
  }




  //add student model
  addStudent(){
    let rollno , stdDto;
    if(this.stdList.length){
    stdDto = this.stdList[this.stdList.length - 1] ;
    rollno = stdDto.rollno + 1 ;
    }

    else 
    rollno = 101;
    this.modalReference = this.modalService.open(AddStudentComponent, { size: 'lg' });
    this.modalReference.componentInstance.rollno =  rollno;
    this.modalReference.componentInstance.passEntry.subscribe((action: string) => {
      if (action == 'success') {
        this.getStdList();
      }
    });
  }
  

  //update student model
  updateStudent(std){
    this.modalReference =  this.modalService.open(UpdateStudentComponent, { size: 'lg' });
    this.modalReference.componentInstance.stdDto =  std;
    this.modalReference.componentInstance.passEntry.subscribe((action: string) => {
      if (action == 'success') {
        this.getStdList();
      }
    });
  }

  //delete student
  deleteStdService(rollno) : Observable<any> {
    return this.httpClient.post("http://localhost:8080/deleteStudent",rollno);
  }
  deleteStudent(std){
    this.deleteStdService(std.rollno).subscribe(res => {
      console.dir(res);
      this.getStdList();
    });
  }

  ngOnInit() {
   this.getStdList();
  }

}
