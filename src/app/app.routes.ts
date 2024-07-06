import { Routes } from '@angular/router';
import { AppModules } from './routing/app-modules';

export const routes: Routes = [
  {
    path: AppModules.sample.id,
    loadChildren: () => import("./modules/sample/sample.routes").then(r => r.routes)
  }
];
