import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { CakeListComponent } from './components/cake-list/cake-list';
import { OrderFormComponent } from './components/order-form/order-form';
import { OrderEditComponent } from './components/order-edit/order-edit';


export const routes: Routes = [
  { path: '', component: CakeListComponent },
  { path: 'order', component: OrderFormComponent },
  { path: 'orders/edit/:id', component: OrderEditComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
  ],
};
