import { TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/services/data.service';
import { SerieService } from 'src/app/services/serie.service';
import { mapToMockify } from '../mocks/mapToMockify';
import { Mockify } from '../mocks/type';
import { configureTests } from '../test.configure';

describe('SerieService', () => {
  let service: SerieService;

  // Const for testing
  const testingUrl = 'serie';

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
      service = TestBed.inject(SerieService);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
