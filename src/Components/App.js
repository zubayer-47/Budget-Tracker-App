import React, { Component } from 'react'
import ExpenseComp from './ExpenseComp'
import Header from './Header'
import IncomeComp from './IncomeComp'
import Total from './Total'

export default class App extends Component {
   state = {
      amount: {
         amount: 0,
         other: 0,
      },
      expense: {
         expenseName: '',
         expense: 0
      }
   } 
   
   handleChange = (e) => {
      this.setState({
         ...this.state,
         [e.nativeEvent.path[2].name]: {
            ...this.state[e.nativeEvent.path[2].name],
            [e.target.name]: e.target.value
         }
      })
   }

   render() {
      return (
         <div className='shadow-md m-10 p-5 leading-10'>

            <Header />
            
            <IncomeComp {...this.state.amount} handleChange={this.handleChange} />

            <ExpenseComp {...this.state.expense} handleChange={this.handleChange}  />

            <Total {...this.state} />
         </div>
      )
   }
}
