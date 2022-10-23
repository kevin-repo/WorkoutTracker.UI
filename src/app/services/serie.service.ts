import { environment } from '../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';
import { Serie } from '../model/serie';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  /**
   * Sub round endpoint url
   */
  private url = `${environment.baseUrl}/serie`;

  constructor(private dataService: DataService) {}

  /**
   * Get a serie
   * @param id Id
   * @returns Serie
   */
  public get(id: number): Observable<Serie> {
    return this.dataService.fetchData<Serie>(`${this.url}/${id}`);
  }
}
