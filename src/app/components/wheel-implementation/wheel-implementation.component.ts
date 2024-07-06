import { MealPlan, mealPlan } from '@/app/data/food-data';
import { CaloriasDiariasComponent } from '@/app/shared/components/calorias-diarias/calorias-diarias.component';
import { Component, OnInit, signal } from '@angular/core';
import axios from "axios";


@Component({
  selector: 'app-wheel-implementation',
  standalone: true,
  imports: [
    CaloriasDiariasComponent
  ],
  templateUrl: './wheel-implementation.component.html',
  styleUrl: './wheel-implementation.component.scss'
})
export class WheelImplementationComponent implements OnInit {
  consumedCalories = signal(0)
  ngOnInit(): void {
    this.getCalories()
  }

  getCalories() {
    const totalCalories = mealPlan.reduce((sum, meal) => {
      return sum + meal.food.calories;
    }, 0);
    this.consumedCalories.set(totalCalories)
  }

}
