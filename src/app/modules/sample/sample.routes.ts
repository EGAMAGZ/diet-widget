import { Routes } from "@angular/router";
import { SampleRoutes } from "./routing/sample-routes";

export const routes: Routes = [
  {
    path: SampleRoutes.initialSample.uri.slice(1),
    loadComponent: () => import('./initial-sample/initial-sample.component')
      .then(c => c.InitialSampleComponent)
  }
]
