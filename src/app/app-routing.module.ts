import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'usuario', loadChildren: './pages/usuario/usuario.module#UsuarioPageModule' },
  { path: 'productos', loadChildren: './pages/productos/productos.module#ProductosPageModule' },
  { path: 'miscompras', loadChildren: './pages/miscompras/miscompras.module#MiscomprasPageModule' },
  { path: 'misentregas', loadChildren: './pages/misentregas/misentregas.module#MisentregasPageModule' },
  { path: 'carrito', loadChildren: './pages/carrito/carrito.module#CarritoPageModule' },
  { path: 'ubicacion', loadChildren: './pages/ubicacion/ubicacion.module#UbicacionPageModule' },  { path: 'configuracion', loadChildren: './pages/configuracion/configuracion.module#ConfiguracionPageModule' },

  // { path: 'misentregas-item-modal', loadChildren: './pages/misentregas-item-modal/misentregas-item-modal.module#MisentregasItemModalPageModule' },

  // { path: 'miscompras-item-modal', loadChildren: './pages/miscompras-item-modal/miscompras-item-modal.module#MiscomprasItemModalPageModule' },

  // { path: 'carrito-item-modal', loadChildren: './pages/carrito-item-modal/carrito-item-modal.module#CarritoItemModalPageModule' },

  // { path: 'producto-modal', loadChildren: './pages/producto-modal/producto-modal.module#ProductoModalPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
