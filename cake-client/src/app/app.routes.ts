import { Routes } from '@angular/router';
import { CakeListComponent } from './components/cake-list/cake-list';
import { OrderEditComponent } from './components/order-edit/order-edit'; // ✅ pastikan ini ada

export const routes: Routes = [
    { path: '', component: CakeListComponent },
    { path: 'orders/edit/:id', component: OrderEditComponent }, // ✅ ini yang penting
];
