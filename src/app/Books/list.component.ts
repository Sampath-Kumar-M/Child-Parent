import { Component, OnInit } from "@angular/core";
import { BookDetails } from "../models/bookdetails";


@Component({
    selector: 'app-books-list',
    templateUrl: './list.component.html'

}) export class ListComponent implements OnInit {
    books: BookDetails[] = [];
    ngOnInit(): void {
        this.books = [{
            id: 1,
            name: 'story'
        },
        {
            id: 2,
            name: 'maths'
        }
        ]
    }

    deletebook(data: any) {
        if (confirm("Are u sure to delete the book, Action cannot be undone?")){
            this.books.splice(this.books.findIndex(obj => obj.id == data), 1);
        }
    }

}