import React, { useState } from "react";

export default function AddData({ handleAddTransaction }) {
  const [lastId, setLastId] = useState(0);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: newId, 
      date: date,
      description: description,
      category: category,
      amount: amount,
    };

    setLastId(newId);

    onAdd(newTransaction);

    handleAddTransaction(newTransaction);

   
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={date}
          type="date"
          name="date"
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          value={description}
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          value={category}
          type="text"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          value={amount}
          type="text"
          name="amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add transaction</button>
      </form>
    </div>
  );
}



// creating an id that follows the order e.g 11,12 is not working unique ids are been generated instead 