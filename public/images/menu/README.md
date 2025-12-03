# Menu Images

This folder contains meal images for menu cards.

## Folder Structure

```
menu/
├── week1/
│   ├── monday/
│   │   ├── breakfast.jpg
│   │   ├── lunch.jpg
│   │   └── snack.jpg
│   ├── tuesday/
│   │   ├── breakfast.jpg
│   │   ├── lunch.jpg
│   │   └── snack.jpg
│   ├── wednesday/
│   │   ├── breakfast.jpg
│   │   ├── lunch.jpg
│   │   └── snack.jpg
│   ├── thursday/
│   │   ├── breakfast.jpg
│   │   ├── lunch.jpg
│   │   └── snack.jpg
│   └── friday/
│       ├── breakfast.jpg
│       ├── lunch.jpg
│       └── snack.jpg
└── week2/
    ├── monday/
    │   ├── breakfast.jpg
    │   ├── lunch.jpg
    │   └── snack.jpg
    └── ... (same for Tuesday-Friday)
```

## Image Requirements

- **Format**: JPG or PNG
- **Recommended size**: 800x600px (4:3 aspect ratio)
- **Content**: Dishes from the menu for specific days
- **Style**: Bright, appetizing, suitable for kindergarten

## Total Images Needed

- 2 weeks × 5 days × 3 meals = **30 images**

## Content Examples

### Week 1 - Monday
- `week1/monday/breakfast.jpg` — Oatmeal, butter, bread, tea, fruit
- `week1/monday/lunch.jpg` — Rice soup, bread, carrot muffin
- `week1/monday/snack.jpg` — Chicken cutlet, buckwheat side dish, bread, juice

### Week 1 - Tuesday
- `week1/tuesday/breakfast.jpg` — Semolina porridge, fruit puree, bread, tea
- `week1/tuesday/lunch.jpg` — Beef meatball, cream soup, cucumbers and carrots
- `week1/tuesday/snack.jpg` — Pasta with sour cream, juice

... and so on for all days of both weeks

## Used Paths

Images are loaded from paths:
- `/images/menu/week{1|2}/{monday-friday}/{breakfast|lunch|snack}.jpg`

For example:
- `/images/menu/week1/monday/breakfast.jpg`
- `/images/menu/week2/friday/snack.jpg`
