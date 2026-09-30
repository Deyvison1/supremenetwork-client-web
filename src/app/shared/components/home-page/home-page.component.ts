import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { CompanyVisualizationComponent } from '../company-visualization/company-visualization.component';
import { ProductsComponent } from '../products/products.component';
import { ProductService } from '../../../core/service/product.service';
import { ProductResponseDTO } from '../../dto/response/product-response.dto';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, CompanyVisualizationComponent, ProductsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  private readonly productService = inject(ProductService);

  readonly aboutTheCompany = 'Sobre a Suprema Network';

  readonly products = signal<ProductResponseDTO[]>([]);

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (resp) => {
        this.products.set(resp.data ?? []);
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
      },
    });
  }
}
