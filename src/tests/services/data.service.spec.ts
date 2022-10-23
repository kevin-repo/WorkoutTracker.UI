import {
  HttpClient,
  HttpClientModule,
  HttpParams,
  HttpStatusCode,
} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/services/data.service';
import { mapToMockify } from 'src/tests/mocks/mapToMockify';
import { configureTests } from 'src/tests/test.configure';
import { Mockify } from '../mocks/type';
import { expect, jest } from '@jest/globals';

describe('DataService', () => {
  let service: DataService;

  // Const for testing
  const baseAddress = 'https://localhost:7197/api';
  const testingEndpoint = 'test';
  const testingUrl = `${baseAddress}/${testingEndpoint}`;

  const mockHttpClient: Mockify<HttpClient> =
    mapToMockify<HttpClient>(HttpClient);

  beforeEach(() => {
    const configure = () => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [{ provide: HttpClient, useValue: mockHttpClient }],
      });
    };

    configureTests(configure).then(() => {
      service = TestBed.inject(DataService);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchData', () => {
    it('should call the proper endpoint for get', () => {
      jest.spyOn(mockHttpClient, 'get');
      service.fetchData<any[]>(testingEndpoint);
      expect(mockHttpClient.get).toHaveBeenCalledWith(testingUrl);
    });
  });

  describe('searchData', () => {
    it('should call the proper endpoint for get', () => {
      jest.spyOn(mockHttpClient, 'get');
      let params = new HttpParams();
      service.searchData<any[]>(testingEndpoint, params);
      expect(mockHttpClient.get).toHaveBeenCalledWith(testingUrl);
    });
  });

  describe('postData', () => {
    it('should call the proper endpoint to post data', () => {
      let jsonData = {} as any;
      jest
        .spyOn(mockHttpClient, 'post')
        .mockImplementation(() => HttpStatusCode.Ok);

      service.postData(testingEndpoint, jsonData);
      expect(mockHttpClient.post).toHaveBeenCalledWith(
        testingUrl,
        JSON.stringify(jsonData),
        expect.anything()
      );
    });
  });

  describe('putData', () => {
    it('should call the proper endpoint to putData', () => {
      let jsonData = {} as any;
      jest
        .spyOn(mockHttpClient, 'put')
        .mockImplementation(() => HttpStatusCode.Ok);

      service.putData(testingEndpoint, jsonData);
      expect(mockHttpClient.post).toHaveBeenCalledWith(
        testingUrl,
        JSON.stringify(jsonData),
        expect.anything()
      );
    });
  });

  describe('patchData', () => {
    it('should call the proper endpoint to patch data', () => {
      let jsonData = {} as any;
      jest
        .spyOn(mockHttpClient, 'patch')
        .mockImplementation(() => HttpStatusCode.Ok);

      service.patchData(testingEndpoint, jsonData);
      expect(mockHttpClient.patch).toHaveBeenCalledWith(
        testingUrl,
        JSON.stringify(jsonData),
        expect.anything()
      );
    });
  });
});
