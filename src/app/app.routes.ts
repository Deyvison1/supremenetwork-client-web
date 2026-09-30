import { Routes } from '@angular/router';

import { loadRemoteModule } from '@angular-architects/native-federation';

import { AuthorizationService, hasRoleGuard } from '@supremenetwork/ui';

import { KeycloakService } from './core/service/keycloak.service';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./shared/components/home-page/home-page.component').then((m) => m.HomePageComponent),
  },
  {
    path: 'client',
    loadComponent: () =>
      import('./feature/client/client-grid/client-grid.component').then(
        (r) => r.ClientGridComponent,
      ),
    canActivate: [hasRoleGuard(['CLIENT'])],
  },

  {
    path: 'client/add',
    loadComponent: () =>
      import('./feature/client/client-form/client-form.component').then(
        (r) => r.ClientFormComponent,
      ),
    canActivate: [hasRoleGuard(['CLIENT_MANAGE'])],
  },

  {
    path: 'client/edit/:id',
    loadComponent: () =>
      import('./feature/client/client-form/client-form.component').then(
        (r) => r.ClientFormComponent,
      ),
    canActivate: [hasRoleGuard(['CLIENT_MANAGE'])],
  },

  {
    path: 'client/view/:id',
    loadComponent: () =>
      import('./feature/client/client-view/client-view.component').then(
        (r) => r.ClientViewComponent,
      ),
    canActivate: [hasRoleGuard(['CLIENT'])],
  },

  {
    path: 'product',
    loadComponent: () =>
      import('./feature/product/product-grid/product-grid.component').then(
        (r) => r.ProductGridComponent,
      ),
    canActivate: [hasRoleGuard(['PRODUCT'])],
  },

  {
    path: 'product/add',
    loadComponent: () =>
      import('./feature/product/product-form/product-form.component').then(
        (r) => r.ProductFormComponent,
      ),
    canActivate: [hasRoleGuard(['PRODUCT_MANAGE'])],
  },

  {
    path: 'product/edit/:id',
    loadComponent: () =>
      import('./feature/product/product-form/product-form.component').then(
        (r) => r.ProductFormComponent,
      ),
    canActivate: [hasRoleGuard(['PRODUCT_MANAGE'])],
  },

  {
    path: 'category',
    loadComponent: () =>
      import('./feature/category/category-grid/category-grid.component').then(
        (r) => r.CategoryGridComponent,
      ),
    canActivate: [hasRoleGuard(['CATEGORY'])],
  },

  {
    path: 'category/add',
    loadComponent: () =>
      import('./feature/category/category-form/category-form.component').then(
        (r) => r.CategoryFormComponent,
      ),
    canActivate: [hasRoleGuard(['CATEGORY_MANAGE'])],
  },

  {
    path: 'category/edit/:id',
    loadComponent: () =>
      import('./feature/category/category-form/category-form.component').then(
        (r) => r.CategoryFormComponent,
      ),
    canActivate: [hasRoleGuard(['CATEGORY_MANAGE'])],
  },

  {
    path: 'forbidden',
    loadComponent: () =>
      import('./shared/components/forbidden/forbidden.component').then((r) => r.ForbiddenComponent),
  },

  {
    path: 'user',
    providers: [
      {
        provide: AuthorizationService,
        useExisting: KeycloakService,
      },
    ],
    loadChildren: () => loadRemoteModule('keycloak-user-mf', './Routes').then((m) => m.routes),
  },
];
