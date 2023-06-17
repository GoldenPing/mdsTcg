import { TestBed } from '@angular/core/testing';

import { MainSeptorInterceptor } from './main-septor.interceptor';

describe('MainSeptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MainSeptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MainSeptorInterceptor = TestBed.inject(MainSeptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
