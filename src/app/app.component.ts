import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListAlimentosBreakfast} from "@/app/shared/components/list-alimentos/list-alimentos.component";
import {ListBitacoraComponent} from "@/app/shared/components/list-bitacora/list-bitacora.component";
import {CaloriasDiariasComponent} from "@/app/shared/components/calorias-diarias/calorias-diarias.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListAlimentosBreakfast, ListBitacoraComponent, CaloriasDiariasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'diet-widget';
}
