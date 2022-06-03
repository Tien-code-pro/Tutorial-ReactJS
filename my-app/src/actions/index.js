import { v4 as uuidv4 } from 'uuid';
import { ADD_EXPENSE, DELETE_EXPENSE } from './Types';

export const addExpense = ({ name, amount, spendDate, category }) => ({
   type: ADD_EXPENSE,
   payload: {
      id: uuidv4(),
      name,
      amount,
      spendDate,
      category
   }
});
export const deleteExpense = id => ({
   type: DELETE_EXPENSE,
   payload: {
      id
   }
});
