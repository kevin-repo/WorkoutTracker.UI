import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Fetch datas
   * @param url Url
   * @returns Array of objects
   */
  fetchDatas<T>(url: string): Observable<T[]> {
    return this.httpClient.get<T[]>(this.buildUrl(url));
  }

  /**
   * Fetch data
   * @param url Url
   * @returns Object
   */
  fetchData<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.buildUrl(url));
  }

  /**
   * Search data
   * @param url Url
   * @param params Parameters
   * @returns Array of objects
   */
  searchData<T>(url: string, params: HttpParams): Observable<T[]> {
    return this.httpClient.get<T[]>(this.buildUrl(url), {
      params: params,
    });
  }

  /**
   * Post data
   * @param url Url
   * @param data Input data
   * @returns Object returns by post call
   */
  postData<Tin, Tout>(url: string, data?: Tin): Observable<Tout> {
    let jsonData = null;

    if (data) {
      jsonData = JSON.stringify(data);
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post<Tout>(this.buildUrl(url), jsonData, options);
  }

  /**
   * Put data
   * @param url Url
   * @param data Data
   * @returns Object returns by put call
   */
  putData<Tin, Tout>(url: string, data?: Tin): Observable<Tout> {
    let jsonData = null;

    if (data) {
      jsonData = JSON.stringify(data);
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.put<Tout>(this.buildUrl(url), jsonData, options);
  }

  /**
   * Patch data
   * @param url Url
   * @param data Data
   * @returns Object returns by patch call
   */
  patchData<Tin, Tout>(url: string, data: Tin): Observable<Tout> {
    const jsonData = JSON.stringify(data);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.patch<Tout>(this.buildUrl(url), jsonData, options);
  }

  /**
   * Build endpoint url
   */
  private buildUrl(url: string): string {
    return `${environment.baseUrl}/${url}`;
  }
}
