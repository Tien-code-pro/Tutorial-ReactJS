import React from 'react';
import './ExpenseEntryItemList.css';
import { connect } from 'react-redux';

class ExpenseEntryItemList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         items: this.props.items
      }
      this.handleMouseEnter = this.handleMouseEnter.bind();
      this.handleMouseLeave = this.handleMouseLeave.bind();
      this.handleMouseOver = this.handleMouseOver.bind();
//new
      this.state = {
         isLoaded: false,
         items: []
      }
   }
//new
   setItems(remoteItems) {
      var items = [];
      remoteItems.forEach((item) => {
         let newItem = {
            id: item._id,
            name: item.name,
            amount: item.amount,
            spendDate: item.spend_date,
            category: item.category
         }
         items.push(newItem)
      });
      this.setState({
         isLoaded: true,
         items: items
      });
   }
   fetchRemoteItems() {
      fetch("http://localhost:8000/api/expenses")
         .then(res => res.json())
         .then(
            (result) => {
               this.setItems(result);
            },
            (error) => {
               this.setState({
                  isLoaded: false,
                  error
               });
            }
         )
   }
   deleteRemoteItem(id) {
      fetch('http://localhost:8000/api/expense/' + id, { method: 'DELETE' })
         .then(res => res.json())
         .then(
            () => {
               this.fetchRemoteItems()
            }
         )
   }
   componentDidMount() { 
      this.fetchRemoteItems(); 
   }

   handleDelete = (id, e) => { 
      e.preventDefault(); 
      console.log(id); 
   
      this.deleteRemoteItem(id); 
   }

   handleMouseEnter(e) {
      e.target.parentNode.classList.add("highlight");
   }
   handleMouseLeave(e) {
      e.target.parentNode.classList.remove("highlight");
   }
   handleMouseOver(e) {
      console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
   }
   handleDelete = (id, e) => {
      e.preventDefault();
      console.log(id);
      this.setState((state, props) => {
         let items = [];
         state.items.forEach((item, idx) => {
            if(item.id != id)
               items.push(item)
         })
         let newState = {
            items: items
         }
         return newState;
      })
   }
   getTotal() {
      let total = 0;
      for(var i = 0; i < this.state.items.length; i++) {
         total += this.state.items[i].amount
      }
      return total;
   }

   // #
   
   render() {
      const lists = this.state.items.map((item) =>
         <tr key={item.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{new Date(item.spendDate).toDateString()}</td>
            <td>{item.category}</td>
            <td><a href="#" 
               onClick={(e) =>  this.handleDelete(item.id, e)}>Remove</a></td>
         </tr>
      );
      return (
         <table onMouseOver={this.handleMouseOver}>
            <thead>
               <tr>
                  <th>Item</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Remove</th>
               </tr>
            </thead>
            <tbody>
               {lists}
               <tr>
                  <td colSpan="1" style={{ textAlign: "right" }}>Total Amount</td>
                  <td colSpan="4" style={{ textAlign: "left" }}>
                     {this.getTotal()}
                  </td> 
               </tr>
            </tbody>
         </table>
      );  
   }
   render() {
   let lists = [];
   if (this.state.isLoaded) {
      lists = this.state.items.map((item) =>
         <tr key={item.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{new Date(item.spendDate).toDateString()}</td>
            <td>{item.category}</td>
            <td><a href="#" onClick={(e) => this.handleDelete(item.id, e)}>Remove</a></td>
         </tr>
      );
   }
   return (
      <div>
         <table onMouseOver={this.handleMouseOver}>
            <thead>
               <tr>
                  <th>Item</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Remove</th>
               </tr>
            </thead>
            <tbody>
               {lists}
            </tbody>
         </table>
      </div>
   );
}
   
}
export default ExpenseEntryItemList;