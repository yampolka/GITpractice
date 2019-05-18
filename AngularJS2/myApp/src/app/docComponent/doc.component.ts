import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HttpClient} from   '@angular/common/http' ;



import {Doctor} from '../doctor.model';



@Component({
    selector: 'doc-comp',
    templateUrl: './doc.component.html',
    styleUrls: ['./doc.component.css']
})

export class DocComponent {

    @Input('DoctorInfo') DoctorInfo: Doctor;

    @Output() onShow = new EventEmitter<Doctor>();

    showMe(){
        this.onShow.emit(this.DoctorInfo);
    }

    test(){
        console.log("am i test function");
    }
}