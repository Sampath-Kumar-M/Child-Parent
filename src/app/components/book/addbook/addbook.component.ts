import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { PriceValidator } from 'src/app/validators/price.validator';

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
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      price: new FormControl(null, [Validators.required, PriceValidator(200,500)])
    })
  }

  onSubmit() {
    this.bservice.add(this.bookform.getRawValue());
    this.route.navigate(['/book']);
  }

}
