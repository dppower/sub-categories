import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ViewOpenAuctionsComponent } from './view-open-auctions/view-open-auctions.component';

import { ViewOpenAuctionsService } from "./view-open-auctions/view-open-auctions.service";

@NgModule({
    declarations: [
        AppComponent,
        ViewOpenAuctionsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [ViewOpenAuctionsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
