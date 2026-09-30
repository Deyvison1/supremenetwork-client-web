import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ViewQrCodeComponent } from '../view-qr-code/view-qr-code.component';
import { ProductResponseDTO } from '../../dto/response/product-response.dto';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  private readonly dialogService = inject(MatDialog);

  readonly products = input<ProductResponseDTO[]>([]);

  openModalViewQrCode(): void {
    this.dialogService.open(ViewQrCodeComponent, {
      width: '420px',
      maxWidth: '95vw',
      panelClass: 'app-dialog',
    });
  }
}
