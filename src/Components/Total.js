import React, { Component } from 'react';
import Left from './Left';

export default class Total extends Component {

   render() {
      const {amount, expense} = this.props;
      return (
         <div className='my-3'>
            <h1 className='text-xl my-2 px-2'>Total Income: {(amount.amount && amount.other) ? +amount.amount + +amount.other: amount.amount}</h1>
            <h1 className='text-xl my-2 px-2'>Total Expense: {expense.expense}</h1>
            <Left {...this.props} />
         </div>
      )
   }
}
