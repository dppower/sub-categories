import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOpenAuctionsComponent } from './view-open-auctions.component';

describe('ViewOpenAuctionsComponent', () => {
    let component: ViewOpenAuctionsComponent;
    let fixture: ComponentFixture<ViewOpenAuctionsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViewOpenAuctionsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewOpenAuctionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
