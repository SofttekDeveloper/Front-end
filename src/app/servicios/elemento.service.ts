import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Elemento {
  id: number;
  nombre: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class ElementoService {
  private apiUrl = 'http://127.0.0.1:8000/elementos';

  constructor(private http: HttpClient) {}

  obtenerElementos(): Observable<Elemento[]> {
    return this.http.get<Elemento[]>(this.apiUrl);
  }
}
