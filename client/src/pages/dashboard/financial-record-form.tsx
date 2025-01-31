import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";

export const FinancialRecordForm = () => {

    const [description, setDescription] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [paymentMethod, setPaymentMethod] = useState<string>("");

    const { user } = useUser();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newRecord = {
            userId: user?.id,
            date: new Date().toISOString(),
            description: description,
            amount: parseFloat(amount),
            category: category,
            paymentMethod: paymentMethod,
        };

        // addRecord(newRecord);
        setDescription("");
        setAmount("");
        setCategory("");
        setPaymentMethod("");
    };
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Description:</label>
                    <input type="text" required className="input" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-field">
                    <label>Amount:</label>
                    <input type="number" required className="input" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="form-field">
                    <label>Category:</label>
                    <select required className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select a category</option>
                        <option value="salary">Salary</option>
                        <option value="food">Food</option>
                        <option value="rent">Rent</option>
                        <option value="utilities">Utilities</option>
                        <option value="transportation">Transportation</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="clothing">Clothing</option>
                        <option value="health">Health</option>
                        <option value="insurance">Insurance</option>
                        <option value="personal">Personal</option>
                        <option value="savings">Savings</option>
                        <option value="debt">Debt</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-field">
                    <label>Payment Method:</label>
                    <select required className="input" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="">Select a payment method</option>
                        <option value="cash">Cash</option>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                        <option value="check">Check</option>
                        <option value="transfer">Transfer</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit" className="button">
                    Add Record
                </button>
            </form>
        </div>
    )
};
