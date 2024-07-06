import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {MatSlider} from "@angular/material/slider";
import {MatProgressSpinner, ProgressSpinnerMode} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-calorias-diarias',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatRadioGroup,
    FormsModule,
    MatRadioButton,
    MatSlider,
    MatProgressSpinner
  ],
  templateUrl: './calorias-diarias.component.html',
  styleUrl: './calorias-diarias.component.scss'
})
export class CaloriasDiariasComponent implements OnInit{
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  @Input() caloriasDiarias?: number = 100
  @Input() caloriasTotales?: number = 2500
  constructor() {

  }
  ngOnInit(): void {
    if (this.caloriasDiarias && this.caloriasTotales) {
      this.value = (this.caloriasDiarias / this.caloriasTotales) * 100
    }
  }
}
