import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-list-bitacora',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatCheckboxModule,MatButtonModule],
  templateUrl: './list-bitacora.component.html',
  styleUrl: './list-bitacora.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListBitacoraComponent {

}
export interface CardItem {
  title: string;
  kcal: string;
  items: { name: string, kcal: string }[];
  date: string;
}
