
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "123" });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    });
});

test("should setup edit expense action object", () => {
    const action = editExpense("123", {note: "New note value"});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: { note: "New note value"}
    });
});

test("should setup add expense action object with provides values", () => {
    const expense = {
        description: 'Rent', 
        amount: 100,
        createdAt: 1000,
        note: "This was last monyhs rent"
    }
    const action = addExpense(expense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    });
});

test("should setup add expense action object with defuatl values", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { description: '', note: '', amount: 0, createdAt: 0,
        id: expect.any(String) }
    });
});