import React from 'react';

import Home from './Home'
import ExpenseEntryItemList from './ExpenseEntryItemList'
import ExpenseEntryItemForm from './ExpenseEntryItemForm'
import './App.css'

import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
 } from 'react-router-dom'

 function App() {
    return (
       <Router>
          <div>
             <nav>
                <ul>
                   <li>
                      <Link to="/">Home</Link>
                   </li>
                   <li>
                      <Link to="/list">List Expenses</Link>
                   </li>
                   <li>
                      <Link to="/add">Add Expense</Link>
                   </li>
                </ul>
             </nav>
 
             <Routes>
                <Route path="/list">
                   <ExpenseEntryItemList />
                </Route>
                <Route path="/add">
                   <ExpenseEntryItemForm />
                </Route>
                <Route path="/">
                   <Home />
                </Route>
             </Routes>
          </div>
       </Router>
    );
 }
 export default App;