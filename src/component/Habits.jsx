// src/components/Habits.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHabit, removeHabit } from '../store/Reducers/dummy'; 

const Habits = () => {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits);

  const handleAddHabit = () => {
    const newHabit = { id: Date.now(), name: 'New Habit' };
    dispatch(addHabit(newHabit)); // Dispatch the addHabit action
  };

  const handleRemoveHabit = (habitId) => {
    dispatch(removeHabit({ id: habitId })); // Dispatch the removeHabit action
  };

  return (
    <div>
      <h1>Habits</h1>
      <div className="bg-blue-500 text-white p-4">
   If this is blue, Tailwind is working!
</div>
      <button onClick={handleAddHabit}>Add Habit</button>
      <ul>
        {habits.map((habit) => (
      <li key={habit.id} className="text-sm font-medium dark:text-red-900">
            {habit.name}
            <button onClick={() => handleRemoveHabit(habit.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Habits;
