import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListAlimentosComponent} from "@/app/shared/components/list-alimentos/list-alimentos.component";
import {ListBitacoraComponent} from "@/app/shared/components/list-bitacora/list-bitacora.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListAlimentosComponent, ListBitacoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'diet-widget';
}
