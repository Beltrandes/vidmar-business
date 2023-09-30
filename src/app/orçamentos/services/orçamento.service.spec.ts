import { TestBed } from '@angular/core/testing';

import { OrçamentoService } from './orçamento.service';

describe('OrçamentoService', () => {
  let service: OrçamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrçamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
