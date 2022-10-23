import { TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/services/data.service';
import { SubRoundService } from 'src/app/services/sub-round.service';
import { mapToMockify } from '../mocks/mapToMockify';
import { Mockify } from '../mocks/type';
import { configureTests } from '../test.configure';

describe('SubRoundService', () => {
  let service: SubRoundService;

  // Const for testing
  const testingUrl = 'subround';

  // Mocks
  const mockDataService: Mockify<DataService> =
    mapToMockify<DataService>(DataService);

  beforeEach(() => {
    const configure = () => {
      TestBed.configureTestingModule({
        providers: [{ provide: DataService, useValue: mockDataService }],
      });
    };

    configureTests(configure).then(() => {
      service = TestBed.inject(SubRoundService);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
