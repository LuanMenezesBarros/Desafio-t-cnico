import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {
  private apiUrl = 'http://localhost:8000/api/transacoes'; // URL do backend

  constructor(private http: HttpClient) {}

  getTransacoes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createTransacao(transacao: any): Observable<any> {
    return this.http.post(this.apiUrl, transacao);
  }

  updateTransacao(id: number, transacao: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, transacao);
  }

  deleteTransacao(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
