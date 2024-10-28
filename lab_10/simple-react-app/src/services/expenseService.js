import { db } from '../firebase'; 
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, Timestamp } from 'firebase/firestore';

const expenseService = {
  addExpense: async (expense) => {
    try {
      const docRef = await addDoc(collection(db, 'expenses'), expense);
      return docRef.id;
    } catch (error) {
      console.error('Error adding expense: ', error);
    }
  },
  getExpenses: async () => {
    try {
      const snapshot = await getDocs(collection(db, 'expenses'));
      return snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          date: data.date instanceof Timestamp ? data.date.toDate() : null,
        };
      });
    } catch (error) {
      console.error('Error getting expenses: ', error);
    }
  },
  updateExpense: async (id, updatedExpense) => {
    try {
      const expenseRef = doc(db, 'expenses', id);
      await updateDoc(expenseRef, updatedExpense);
    } catch (error) {
      console.error('Error updating expense: ', error);
    }
  },
  deleteExpense: async (id) => {
    try {
      const expenseRef = doc(db, 'expenses', id);
      await deleteDoc(expenseRef);
    } catch (error) {
      console.error('Error deleting expense: ', error);
    }
  },
};

export default expenseService;
