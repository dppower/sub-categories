import { Component, OnInit } from '@angular/core';

import { Category } from "./categories";
import { ViewOpenAuctionsService } from "./view-open-auctions.service";

const test_categories = (<Category[]>[
    { 
        name: "root",
        children: [1, 2]
    },
    {
        name: "Category 1",
        children: [3, 4]
    },
    {
        name: "Category 2",
        children: [5, 6]
    },
    {
        name: "Child Category A",
        children: [7, 8]
    },
    {
        name: "Child Category B"
    },
    {
        name: "Child Category C"
    },
    {
        name: "Child Category D"
    },
    {
        name: "Grandchild Catergory E"
    },
    {
        name: "Grandchild Catergory F"
    }
]);

@Component({
    selector: 'app-view-open-auctions',
    templateUrl: './view-open-auctions.component.html',
    styleUrls: ['./view-open-auctions.component.css']
})
export class ViewOpenAuctionsComponent implements OnInit {

    categories: Category[] = test_categories;

    constructor(private http_service_: ViewOpenAuctionsService) { };

    ngOnInit() {
        //this.http_service_.getCategories().subscribe(categories => this.categories = categories);
    };
}
