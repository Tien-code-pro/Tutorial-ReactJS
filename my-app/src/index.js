import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Apps from './Routing/components/App';
import UseStates from './Hooks/useState';
import TwoWays from './Hooks/TwoWay';
import Todolists from './Hooks/Todolist';
import Clock from './components/Clock';
import ExpenseEntryItemList from './components/ExpenseEntryItemList'
import ExpenseEntryItemList2 from './components/ExpenseEntryItemList2'
import ExpenseEntryItem from './components/ExpenseEntryItem'
import MountedAndUnmounteds from './components/MountedAndUnmounted'
import ExpenseForm from './components/ExpenseForm'

const items = [
   { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
   { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
   { id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
   { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
   { id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
   { id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
   { id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
   { id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
   { id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
   { id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
]

const item = {
  id: 1, 
  name : "Grape Juice", 
  amount : 30.5, 
  spendDate: new Date("2020-10-10"), 
  category: "Food" 
}


ReactDOM.render(
   <React.StrictMode>
      <ExpenseEntryItemList items={items} />
      <App />
      {/* <Clock /> */}
      <ExpenseEntryItem item={item} />
      <UseStates />
      <TwoWays />
      <Todolists />
      <MountedAndUnmounteds />
      {/* <ExpenseEntryItemList2 /> */}
      <ExpenseForm />
      {/* <Apps /> */}
      
   </React.StrictMode>,
   document.getElementById('root')
);