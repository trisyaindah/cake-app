import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CakeService {
  private api = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}

  getCakes(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8000/api/cakes');
  }
  getOrders() {
    return this.http.get<any[]>('http://localhost:8000/api/orders');
  }
  deleteOrder(id: number) {
    return this.http.delete(`${this.api}/orders/${id}`);
  }
  getOrder(id: number) {
    return this.http.get(`${this.api}/orders/${id}`);
  }

  updateOrder(id: number, data: any) {
    return this.http.put(`${this.api}/orders/${id}`, data);
  }

}
