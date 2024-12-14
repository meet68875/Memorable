import { configureStore } from '@reduxjs/toolkit';
import habitreducer from './Reducers/dummy'

const store = configureStore({
  reducer: {
    habits: habitreducer,
  },
});

export default store;