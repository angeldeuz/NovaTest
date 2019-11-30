import { HttpClientTestingModule} from '@angular/common/http/testing';



import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service.service';

describe('ServiceService', () => {


  beforeEach(() => TestBed.configureTestingModule({
    //importacion del protocolo http para testing
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ServiceService = TestBed.get(ServiceService);
    expect(service).toBeTruthy();
  });
});
