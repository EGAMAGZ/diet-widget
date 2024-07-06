export interface Food {
  name: string;
  calories: number;
  description: string;
}

export interface MealTime {
  name: string;
}

export interface MealPlan {
  dayOfWeek: string;
  food: Food;
  mealTime: MealTime;
}

export interface FoodEaten {
  food: Food;
  date: Date;
  dayOfWeek: string;
}


// Ejemplos de alimentos
const food1: Food = {
  name: "Manzana",
  calories: 95,
  description: "Fruta fresca, rica en fibra y vitaminas."
};

const food2: Food = {
  name: "Pollo a la parrilla",
  calories:165,
  description: "Pechuga de pollo sin piel, cocida a la parrilla."
};

const food3: Food = {
  name: "Arroz integral",
  calories: 215,
  description: "Arroz integral cocido, alto en fibra."
};

const food4: Food = {
  name: "Yogur natural",
  calories: 100,
  description: "Yogur bajo en grasa, sin azúcar añadido."
};

const food5: Food = {
  name: "Ensalada verde",
  calories: 85,
  description: "Mezcla de lechugas, espinacas y otros vegetales."
};

// Ejemplos de tiempos de comida
export const breakfast: MealTime = {
  name: "Desayuno"
};

export const lunch: MealTime = {
  name: "Almuerzo"
};

export const dinner: MealTime = {
  name: "Cena"
};

export const snack: MealTime = {
  name: "Merienda"
};

// Plan de comidas del paciente para una semana
export const mealPlan: MealPlan[] = [
  {
    dayOfWeek: "Lunes",
    food: food1,
    mealTime: breakfast
  },
  {
    dayOfWeek: "Lunes",
    food: food2,
    mealTime: lunch
  },
  {
    dayOfWeek: "Lunes",
    food: food3,
    mealTime: dinner
  },
  {
    dayOfWeek: "Martes",
    food: food4,
    mealTime: breakfast
  },
  {
    dayOfWeek: "Martes",
    food: food2,
    mealTime: lunch
  },
  {
    dayOfWeek: "Martes",
    food: food5,
    mealTime: dinner
  },
  {
    dayOfWeek: "Miércoles",
    food: food1,
    mealTime: breakfast
  },
  {
    dayOfWeek: "Miércoles",
    food: food3,
    mealTime: lunch
  },
  {
    dayOfWeek: "Miércoles",
    food: food4,
    mealTime: dinner
  }
];

// Registro de alimentos consumidos por el paciente
export const foodEaten: FoodEaten[] = [
  {
    food: food1,
    date: new Date("2023-07-01"),
    dayOfWeek: "Lunes"
  },
  {
    food: food2,
    date: new Date("2023-07-01"),
    dayOfWeek: "Lunes"
  },
  {
    food: food3,
    date: new Date("2023-07-01"),
    dayOfWeek: "Lunes"
  },
  {
    food: food4,
    date: new Date("2023-07-02"),
    dayOfWeek: "Martes"
  },
  {
    food: food2,
    date: new Date("2023-07-02"),
    dayOfWeek: "Martes"
  },
  {
    food: food5,
    date: new Date("2023-07-02"),
    dayOfWeek: "Martes"
  },
  {
    food: food1,
    date: new Date("2023-07-03"),
    dayOfWeek: "Miércoles"
  },
  {
    food: food3,
    date: new Date("2023-07-03"),
    dayOfWeek: "Miércoles"
  },
  {
    food: food4,
    date: new Date("2023-07-03"),
    dayOfWeek: "Miércoles"
  }
];
