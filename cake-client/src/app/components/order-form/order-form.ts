import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CakeService } from '../../services/cake';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-form.html',
})
export class OrderFormComponent implements OnInit {
  private cakeService = inject(CakeService);
  private http = inject(HttpClient);
  private router = inject(Router);

  cakes: any[] = [];
  form = {
    customer_name: '',
    address: '',
    cake_id: '',
  };

  ngOnInit(): void {
    this.cakeService.getCakes().subscribe((data) => {
      this.cakes = data;
    });
  }

  submitOrder(orderForm: any) {
    if (!orderForm.valid) return;

    const url = 'http://localhost:8000/api/orders';
    this.http.post(url, this.form).subscribe({
      next: () => {
        alert('✅ Pesanan berhasil dikirim!');
        this.router.navigate(['/']); // ✅ Redirect ke halaman utama
      },
      error: () => {
        alert('❌ Gagal mengirim pesanan.');
      },
    });
  }
}
