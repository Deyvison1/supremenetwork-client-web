import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { KeycloakService } from './core/service/keycloak.service';

import { SIDEBAR_MENU } from './core/constants/sidebar-menu.constant';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

import { FooterComponent } from './shared/components/footer/footer.component';
import { LoadingComponent } from './shared/components/loading/loading.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
    MatMenuModule,
    LoadingComponent,
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('supremenetwork-client-web');

  private readonly keycloakService = inject(KeycloakService);

  readonly menuItems = computed(() =>
    SIDEBAR_MENU.filter((item) => !item.role || this.keycloakService.hasAnyRole([item.role])),
  );

  get getUserName(): string | undefined {
    return this.keycloakService.getUserProfile()?.username;
  }

  logout(): void {
    this.keycloakService.logout();
  }
}
