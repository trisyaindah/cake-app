import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakeService } from '../../services/cake';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cake-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  // imports: [CommonModule],
  templateUrl: './cake-list.html',
  styleUrls: ['./cake-list.css'],
})
export class CakeListComponent implements OnInit {
  cakeService = inject(CakeService);
  cakes = signal<any[]>([]);
  orders = signal<any[]>([]); // Tambah orders

  ngOnInit(): void {
    this.cakeService.getCakes().subscribe((data: any[]) => {
      this.cakes.set(data);
    });
    this.cakeService.getCakes().subscribe((data) => this.cakes.set(data));
    this.cakeService.getOrders().subscribe((data) => this.orders.set(data));
  }

  loadOrders(): void {
    this.cakeService.getOrders().subscribe((data: any[]) => {
      this.orders.set(data);
    });
  }

  editOrder(order: any): void {
    console.log('Edit order:', order);
    // TODO: arahkan ke form edit atau tampilkan modal
  }

  deleteOrder(orderId: number): void {
    if (confirm('Yakin ingin menghapus pesanan ini?')) {
      this.cakeService.deleteOrder(orderId).subscribe({
        next: () => {
          alert('Pesanan berhasil dihapus');
          this.loadOrders(); // refresh daftar
        },
        error: (err) => {
          console.error(err);
          alert('Gagal menghapus pesanan');
        }
      });
    }
  }

}
