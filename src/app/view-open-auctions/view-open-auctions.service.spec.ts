import { TestBed, inject } from '@angular/core/testing';

import { ViewOpenAuctionsService } from './view-open-auctions.service';

describe('ViewOpenAuctionsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ViewOpenAuctionsService]
        });
    });

    it('should be created', inject([ViewOpenAuctionsService], (service: ViewOpenAuctionsService) => {
        expect(service).toBeTruthy();
    }));
});
