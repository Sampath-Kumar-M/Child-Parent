import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addbook() {
    this.router.navigate(['addbook'], {relativeTo: this.route});
  }

}
