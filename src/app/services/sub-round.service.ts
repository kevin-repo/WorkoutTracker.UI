import { environment } from '../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';
import { SubRound } from '../model/sub-round';

@Injectable({
  providedIn: 'root',
})
export class SubRoundService {
  /**
   * Sub round endpoint url
   */
  private url = `${environment.baseUrl}/subround`;

  constructor(private dataService: DataService) {}

  /**
   * Get a sub round
   * @param id Id
   * @returns SubRound
   */
  public get(id: number): Observable<SubRound> {
    return this.dataService.fetchData<SubRound>(`${this.url}/${id}`);
  }
}
