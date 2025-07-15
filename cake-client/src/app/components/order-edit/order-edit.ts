import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CakeService } from '../../services/cake';

@Component({
  selector: 'app-order-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-edit.html',
})
export class OrderEditComponent implements OnInit {
  orderId!: number;
  order: any = {};
  cakes: any[] = [];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private cakeService: CakeService
  ) {}

  ngOnInit(): void {
    this.orderId = +this.route.snapshot.paramMap.get('id')!;
    this.loadOrder();
    this.loadCakes();
  }

  loadOrder(): void {
    this.cakeService.getOrder(this.orderId).subscribe((data) => {
      this.order = data;
    });
  }

  loadCakes(): void {
    this.cakeService.getCakes().subscribe((data) => {
      this.cakes = data;
    });
  }

  // update(): void {
  //   this.cakeService.updateOrder(this.orderId, this.order).subscribe(() => {
  //     alert('Pesanan berhasil diperbarui');
  //     this.router.navigate(['/']); // kembali ke daftar
  //   });
  // }

  submitForm() {
    this.cakeService.updateOrder(this.orderId, this.order).subscribe({
      next: () => {
        alert('Pesanan berhasil diperbarui!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
        alert('Gagal memperbarui pesanan.');
      }
    });
  }


}
