import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  bookform: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, 
    private route: Router,
    private bservice: BookService) { }

  ngOnInit(): void {
    this.InitializeForm();
  }

  InitializeForm() {
    this.bookform = this.fb.group({
      name: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    this.bservice.add(this.bookform.getRawValue());
    this.route.navigate(['/book']);
  }

}
