import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.less']
})
export class AddStudentComponent implements OnInit {
  registerForm: FormGroup;
  modalReference: NgbModalRef;
  @Input() public rollno;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    public activeModal: NgbActiveModal
    ) { }

  //Register student
  registerStdService(stdDto) : Observable<any> {
    return this.httpClient.post("http://localhost:8080/addStudent",stdDto);
  }
  registerStudent(){
    this.registerStdService(this.registerForm.value).subscribe(res => {
      this.passEntry.emit('success');
      this.activeModal.close('success');


    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      rollno: this.rollno,
      name: '',
      address: '',
      email: '',
      phone: '',
      dob: ''
  });
  }
  
  closeModel(){
    this.passEntry.emit('close');
    this.activeModal.dismiss('close');
  }

}
