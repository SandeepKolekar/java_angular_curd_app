import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.less']
})
export class UpdateStudentComponent implements OnInit {
  updateForm: FormGroup;
  modalReference: NgbModalRef;
  @Input() public stdDto;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    public activeModal: NgbActiveModal
    ) { }

  //Update student
  registerStdService(stdDto) : Observable<any> {
    return this.httpClient.post("http://localhost:8080/updateStudent",stdDto);
  }
  updateStudent(){
    this.registerStdService(this.updateForm.value).subscribe(res => {
      this.passEntry.emit('success');
      this.activeModal.close('success');
    });
  }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      rollno: this.stdDto.rollno,
      name:  this.stdDto.name,
      address: this.stdDto.address,
      email: this.stdDto.email,
      phone: this.stdDto.phone,
      dob: this.stdDto.dob,
  });
  }
  
  closeModel(){
    this.passEntry.emit('close');
    this.activeModal.dismiss('close');
  }

}
