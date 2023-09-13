import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Obra } from '../models/Obra';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObraService {
  private readonly API = '/api/obras'

  constructor(private http: HttpClient) { }

  listObras() {
    return this.http.get<Obra[]>(this.API)
      .pipe(
        first()
      )
  }
}
