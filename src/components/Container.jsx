import React, { useEffect, useState } from "react";
import Search from "./Search";
import AddData from "./AddData";
import Table from "./Transactions";

function Container() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const url = "http://localhost:3000/transactions";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data); 
      });
  }, [url]);

  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddData />
      <Table transactions={filteredTransactions} />
    </div>
  );
}

export default Container;
