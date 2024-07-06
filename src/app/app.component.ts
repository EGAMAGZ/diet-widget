import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListAlimentosComponent} from "@/app/shared/components/list-alimentos/list-alimentos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListAlimentosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'diet-widget';
}
