'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { menuData, getCurrentWeekNumber } from '@/data/menu';

const mealConfig = {
  breakfast: {
    title: 'Breakfast',
    time: '9:00–9:15',
    bgGradient: 'from-peach/20 to-cream',
    badgeColor: 'bg-peach/30 text-terracotta',
    illustration: '🥣🍞☕🍎'
  },
  lunch: {
    title: 'Lunch',
    time: '12:30–13:00',
    bgGradient: 'from-sage/10 to-cream',
    badgeColor: 'bg-sage/30 text-sage',
    illustration: '🍲🥗🍞🥤'
  },
  snack: {
    title: 'Afternoon Snack',
    time: '15:30–16:00',
    bgGradient: 'from-terracotta/10 to-cream',
    badgeColor: 'bg-terracotta/30 text-terracotta',
    illustration: '🍗🍝🧃🍪'
  }
} as const;

const dayNamesEn = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const dayNamesRu = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNamesRu = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

interface MealCardProps {
  mealType: 'breakfast' | 'lunch' | 'snack';
  items: Array<{ name: string; icon: string }>;
  delay: number;
  weekNumber: number;
  dayName: string;
}

const MealCard = ({ mealType, items, delay, weekNumber, dayName }: MealCardProps) => {
  const config = mealConfig[mealType];
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset state when parameters change
    setIsLoading(true);
    setImageError(false);
    setImageSrc('');

    // Try different image formats
    const basePath = `/images/menu/week${weekNumber}/${dayName}/${mealType}`;
    const formats = ['webp', 'jpg', 'jpeg', 'png'];

    // Try to load first available format
    const tryFormats = async () => {
      for (const format of formats) {
        const path = `${basePath}.${format}`;
        try {
          const response = await fetch(path, { method: 'HEAD' });
          if (response.ok) {
            setImageSrc(path);
            setIsLoading(false);
            return;
          }
        } catch {
          continue;
        }
      }
      // If no format found, show fallback
      setImageError(true);
      setIsLoading(false);
    };

    tryFormats();
  }, [weekNumber, dayName, mealType]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.15 }}
      whileHover={{ scale: 1.01, y: -2 }}
      className="flex flex-col md:flex-row rounded-3xl bg-cream shadow-soft overflow-hidden transition-all duration-300 hover:shadow-soft-lg border border-sand"
    >
      {/* Left side - text */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
        {/* Time badge */}
        <span
          className={`inline-flex self-start px-4 py-1.5 rounded-xl text-sm font-semibold mb-3 ${config.badgeColor}`}
        >
          {config.time}
        </span>

        {/* Title */}
        <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
          {config.title}
        </h3>

        {/* Food items list */}
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay * 0.15 + idx * 0.05 }}
              className="flex items-center gap-3 text-charcoal"
            >
              <span className="w-2 h-2 rounded-full bg-terracotta flex-shrink-0"></span>
              <span className="text-base md:text-lg font-medium">{item.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Right side - image or illustration */}
      <div className={`relative w-full md:w-[35%] min-h-[200px] md:min-h-[280px] flex items-center justify-center bg-gradient-to-br ${config.bgGradient} overflow-hidden`}>
        {isLoading ? (
          // Show empty space while loading
          <div className="w-full h-full" />
        ) : imageSrc ? (
          // Show image if loaded
          <motion.img
            src={imageSrc}
            alt={config.title}
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onError={() => {
              setImageError(true);
              setIsLoading(false);
            }}
            className="w-full h-full object-cover"
          />
        ) : imageError ? (
          // Show emoji only if image not found
          <div className="text-4xl md:text-5xl flex flex-wrap gap-2 justify-center items-center p-6">
            {config.illustration.split('').map((emoji, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-block"
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

const WeekendMessage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="text-center py-16 px-8 rounded-3xl bg-cream shadow-soft-lg border border-sand"
  >
    <motion.div
      className="w-24 h-24 mx-auto mb-6 rounded-full bg-sage/20 flex items-center justify-center"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
    >
      <svg className="w-12 h-12 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    </motion.div>
    <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-3">
      Weekend
    </h3>
    <p className="text-warm-gray text-lg">
      The kindergarten is closed on weekends
    </p>
  </motion.div>
);

export default function WeeklyMenu() {
  const [selectedDay, setSelectedDay] = useState<'today' | 'tomorrow'>('today');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const getTargetDate = () => {
    const date = new Date(currentDate);
    if (selectedDay === 'tomorrow') {
      date.setDate(date.getDate() + 1);
    }
    return date;
  };

  const targetDate = getTargetDate();
  const dayOfWeek = targetDate.getDay();
  const weekNumber = getCurrentWeekNumber();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  const formattedDate = `${dayNamesRu[dayOfWeek]}, ${targetDate.getDate()} ${monthNamesRu[targetDate.getMonth()]}`;

  const handleDayChange = (day: 'today' | 'tomorrow') => {
    setSelectedDay(day);
    setAnimationKey(prev => prev + 1);
  };

  // Получаем меню для выбранного дня
  const weekData = menuData.find(w => w.week === weekNumber);
  const dayIndex = dayOfWeek === 0 ? null : dayOfWeek - 1; // 0=Вс, 1=Пн, ..., 6=Сб
  const dayMenu = !isWeekend && dayIndex !== null && weekData ? weekData.days[dayIndex] : null;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Day Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mb-8"
      >
        <div className="inline-flex p-1.5 rounded-2xl bg-sand shadow-soft">
          <button
            onClick={() => handleDayChange('today')}
            className={`px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
              selectedDay === 'today'
                ? 'bg-terracotta text-cream shadow-soft'
                : 'text-charcoal hover:bg-sand/50'
            }`}
          >
            Today
          </button>
          <button
            onClick={() => handleDayChange('tomorrow')}
            className={`px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300 flex items-center gap-2 ${
              selectedDay === 'tomorrow'
                ? 'bg-terracotta text-cream shadow-soft'
                : 'text-charcoal hover:bg-sand/50'
            }`}
          >
            Tomorrow
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Date Display */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg className="w-5 h-5 text-warm-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-xl font-semibold text-charcoal">
            {formattedDate}
          </p>
        </div>
        {!isWeekend && (
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-sand text-warm-gray">
            Week {weekNumber}
          </span>
        )}
      </motion.div>

      {/* Menu Cards */}
      <div key={animationKey} className="space-y-6">
        {isWeekend ? (
          <WeekendMessage />
        ) : dayMenu ? (
          <>
            <MealCard
              mealType="breakfast"
              items={dayMenu.meals.breakfast}
              delay={0}
              weekNumber={weekNumber}
              dayName={dayNamesEn[dayOfWeek]}
            />
            <MealCard
              mealType="lunch"
              items={dayMenu.meals.lunch}
              delay={1}
              weekNumber={weekNumber}
              dayName={dayNamesEn[dayOfWeek]}
            />
            <MealCard
              mealType="snack"
              items={dayMenu.meals.snack}
              delay={2}
              weekNumber={weekNumber}
              dayName={dayNamesEn[dayOfWeek]}
            />
          </>
        ) : null}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-warm-gray">
          Menu is subject to change
        </p>
      </motion.div>
    </div>
  );
}
