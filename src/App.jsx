import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ExpenseForm from "./components/ExpenseForm";
// import IncomeForm 
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'


const ParentComponent = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => // ...
    const fetchIncomes = async () => //...

    fetchExpenses();
    fetchIncomes();
  },[]);

  const handleExpenseAdded = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleIncomeAdded = (newIncome) => {
    setIncomes = ([...incomes, newIncome]);
  };

  return (
    <>
      <div>
        <ExpenseForm onExpenseAdded={handleExpenseAdded} />
        <IncomeForm onIncomeAdded={handleIncomeAdded} />
      </div>
    <Navbar/>
    <Sidebar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>

    <Footer/>
  </>
  );
};
