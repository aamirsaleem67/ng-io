import {  OnInit, Output, EventEmitter } from '@angular/core';
import { Component, ContentChildren, ViewChild, QueryList, AfterViewInit, Input } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.css']
})
export class FormContentComponent implements OnInit, AfterViewInit {

  @Output() userSubmit= new EventEmitter<any>();
  @ContentChildren(NgModel) public models: QueryList<NgModel>;
  @ViewChild(NgForm) public form: NgForm;

  public ngAfterViewInit(): void {
    const ngContentModels = this.models.toArray();
    ngContentModels.forEach((model) => {
      this.form.addControl(model);
    });
  }
  constructor() { }

  ngOnInit() {
  }
  public onSubmit(editForm: any): void {
    console.log(editForm);
  }

  // onSubmit(value: any) {
  //   //  console.log(value);
  //    this.userSubmit.emit(value);
  // }

}
