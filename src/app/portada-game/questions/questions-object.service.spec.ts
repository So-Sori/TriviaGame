import { TestBed } from '@angular/core/testing';

import { QuestionsObjectService } from './questions-object.service';

describe('QuestionsObjectService', () => {
  let service: QuestionsObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
