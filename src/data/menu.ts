export interface MenuItem {
  name: string;
  icon: string;
}

export interface MealTime {
  breakfast: MenuItem[];
  lunch: MenuItem[];
  snack: MenuItem[];
}

export interface DayMenu {
  day: string;
  meals: MealTime;
}

export interface WeekMenu {
  week: number;
  days: DayMenu[];
}

export const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
] as const;

export const menuData: WeekMenu[] = [
  {
    week: 1,
    days: [
      {
        day: 'Monday',
        meals: {
          breakfast: [
            { name: 'Oatmeal', icon: '🥣' },
            { name: 'Butter/Bread', icon: '🍞' },
            { name: 'Fruit tea', icon: '☕' },
            { name: 'Fruit', icon: '🍎' }
          ],
          lunch: [
            { name: 'Rice soup/Bread', icon: '🍲' },
            { name: 'Carrot muffin', icon: '🧁' }
          ],
          snack: [
            { name: 'Chicken cutlet', icon: '🍖' },
            { name: 'Buckwheat side dish/Bread', icon: '🍚' },
            { name: 'Fruit juice', icon: '🥤' }
          ]
        }
      },
      {
        day: 'Tuesday',
        meals: {
          breakfast: [
            { name: 'Semolina porridge', icon: '🥣' },
            { name: 'Fruit puree/Bread', icon: '🍞' },
            { name: 'Fruit tea', icon: '☕' },
            { name: 'Fruit', icon: '🍎' }
          ],
          lunch: [
            { name: 'Beef meatball', icon: '🍖' },
            { name: 'Vegetable cream soup/Bread', icon: '🍲' },
            { name: 'Cucumber and carrot sticks', icon: '🥒' }
          ],
          snack: [
            { name: 'Pasta with sour cream', icon: '🍝' },
            { name: 'Fruit juice', icon: '🥤' }
          ]
        }
      },
      {
        day: 'Wednesday',
        meals: {
          breakfast: [
            { name: 'Rice porridge', icon: '🥣' },
            { name: 'Butter/Bread', icon: '🍞' },
            { name: 'Fruit tea', icon: '☕' },
            { name: 'Fruit', icon: '🍎' }
          ],
          lunch: [
            { name: 'Borscht/Bread', icon: '🍲' },
            { name: 'Apple muffin', icon: '🧁' }
          ],
          snack: [
            { name: 'Boiled chicken', icon: '🍗' },
            { name: 'Bulgur side dish/Bread', icon: '🍚' },
            { name: 'Fruit juice', icon: '🥤' }
          ]
        }
      },
      {
        day: 'Thursday',
        meals: {
          breakfast: [
            { name: 'French toast', icon: '🍞' },
            { name: 'Cottage cheese soufflé', icon: '🥛' },
            { name: 'Fruit tea', icon: '☕' },
            { name: 'Fruit', icon: '🍎' }
          ],
          lunch: [
            { name: 'Vegetable soup/Bread', icon: '🍲' },
            { name: 'Broccoli salad', icon: '🥗' }
          ],
          snack: [
            { name: 'Pasta with cheese and yogurt', icon: '🍝' },
            { name: 'Fruit juice', icon: '🥤' }
          ]
        }
      },
      {
        day: 'Friday',
        meals: {
          breakfast: [
            { name: 'Buckwheat porridge', icon: '🥣' },
            { name: 'Fruit puree/Bread', icon: '🍞' },
            { name: 'Fruit tea', icon: '☕' },
            { name: 'Fruit', icon: '🍎' }
          ],
          lunch: [
            { name: 'Broccoli cream soup/Bread', icon: '🍲' },
            { name: 'Khachapuri', icon: '🥙' }
          ],
          snack: [
            { name: 'Boiled fish', icon: '🐟' },
            { name: 'Bulgur and carrot side dish/Bread', icon: '🍚' },
            { name: 'Fruit juice', icon: '🥤' }
          ]
        }
      }
    ]
  },
  {
    week: 2,
    days: [
      {
        day: 'Monday',
        meals: {
          breakfast: [
            { name: 'Rice porridge', icon: '🥣' },
            { name: 'Butter/Bread', icon: '🍞' },
            { name: 'Fruit tea', icon: '☕' },
            { name: 'Fruit', icon: '🍎' }
          ],
          lunch: [
            { name: 'Cabbage soup/Bread', icon: '🍲' },
            { name: 'Cucumber and carrot sticks', icon: '🥒' }
          ],
          snack: [
            { name: 'Beef cutlet', icon: '🍖' },
            { name: 'Buckwheat side dish/Bread', icon: '🍚' },
            { name: 'Fruit juice', icon: '🥤' }
          ]
        }
      },
      {
        day: 'Tuesday',
        meals: {
          breakfast: [
            { name: 'Semolina porridge', icon: '🥣' },
            { name: 'Fruit puree/Bread', icon: '🍞' },
            { name: 'Fruit tea', icon: '☕' },
            { name: 'Fruit', icon: '🍎' }
          ],
          lunch: [
            { name: 'Beef kharcho soup/Bread', icon: '🍲' },
            { name: 'Vegetable salad with sour cream', icon: '🥗' }
          ],
          snack: [
            { name: 'Fried egg', icon: '🍳' },
            { name: 'Pasta side dish', icon: '🍝' },
            { name: 'Fruit juice', icon: '🥤' }
          ]
        }
      },
      {
        day: 'Wednesday',
        meals: {
          breakfast: [
            { name: 'Oatmeal', icon: '🥣' },
            { name: 'Butter/Bread', icon: '🍞' },
            { name: 'Fruit tea', icon: '☕' },
            { name: 'Fruit', icon: '🍎' }
          ],
          lunch: [
            { name: 'Lentil soup/Bread', icon: '🍲' },
            { name: 'Apple muffin', icon: '🧁' }
          ],
          snack: [
            { name: 'Beef meatballs', icon: '🍖' },
            { name: 'Bulgur side dish/Bread', icon: '🍚' },
            { name: 'Fruit juice', icon: '🥤' }
          ]
        }
      },
      {
        day: 'Thursday',
        meals: {
          breakfast: [
            { name: 'Rice porridge', icon: '🥣' },
            { name: 'Fruit puree/Bread', icon: '🍞' },
            { name: 'Fruit tea', icon: '☕' },
            { name: 'Fruit', icon: '🍎' }
          ],
          lunch: [
            { name: 'Chicken broth/Bread', icon: '🍲' },
            { name: 'Stewed broccoli', icon: '🥗' }
          ],
          snack: [
            { name: 'Pasta with sour cream', icon: '🍝' },
            { name: 'Fruit juice', icon: '🥤' }
          ]
        }
      },
      {
        day: 'Friday',
        meals: {
          breakfast: [
            { name: 'Vermicelli porridge', icon: '🥣' },
            { name: 'Butter/Bread', icon: '🍞' },
            { name: 'Fruit tea', icon: '☕' },
            { name: 'Fruit', icon: '🍎' }
          ],
          lunch: [
            { name: 'Pea soup/Bread', icon: '🍲' },
            { name: 'Mashed potatoes', icon: '🥔' }
          ],
          snack: [
            { name: 'Boiled fish', icon: '🐟' },
            { name: 'Bulgur and carrot side dish/Bread', icon: '🍚' },
            { name: 'Fruit juice', icon: '🥤' }
          ]
        }
      }
    ]
  }
];

/**
 * Determines the menu week number (1 or 2) based on current date
 * Base date - December 2, 2024 (Monday of week 1)
 */
export function getCurrentWeekNumber(): number {
  const baseDate = new Date(2024, 11, 2); // December 2, 2024
  const currentDate = new Date();

  // Reset time for accurate date comparison
  baseDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  const diffTime = currentDate.getTime() - baseDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);

  // Even week - week 1, odd week - week 2
  return (diffWeeks % 2) + 1;
}

/**
 * Gets current day of week (0-4 for Mon-Fri, null for weekends)
 */
export function getCurrentDayIndex(): number | null {
  const today = new Date();
  const dayOfWeek = today.getDay();

  // Sunday = 0, Monday = 1, ... Friday = 5, Saturday = 6
  // Convert to our format: Monday = 0, ... Friday = 4
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return null; // Weekend
  }

  return dayOfWeek - 1;
}
