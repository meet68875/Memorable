// src/store/habitsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const habitsSlice = createSlice({
  name: 'habits',
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      state.push(action.payload); // Add a new habit
    },
    removeHabit: (state, action) => {
      return state.filter((habit) => habit.id !== action.payload.id); // Remove a habit by id
    },
    // Add more reducers as needed
  },
});

// Export actions and reducer
export const { addHabit, removeHabit } = habitsSlice.actions;
export default habitsSlice.reducer;

