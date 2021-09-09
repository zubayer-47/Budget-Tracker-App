import React, { Component } from 'react';

export default class ExpenseComp extends Component {
   state = {
      isRemove: false
   }
   render() {
      const { expenseName, expense, handleChange } = this.props
      return (
         <>
         <div className='border p-3 my-5'>
            <form onSubmit={e => e.preventDefault()} name='expense'>
               <h1 className='text-blue-300 text-xl'>Expenses</h1>

               <div>
                  <label htmlFor="expenseName">Expense Name</label>
                  <input type="text" id='expenseName' name="expenseName" value={expenseName} onChange={handleChange}  className='block border px-2 w-full mb-3' />
               </div>

               <div>
                  <label htmlFor="expenseAmount">Expense Amount</label>
                     <input type="number" id='expenseAmount' name="expense" value={expense} onChange={handleChange}  className='block border px-2 w-full mb-3' />
               </div>

               <input type="submit" value='Add Expense' className='px-5' />
            </form>
         </div>

            {(expenseName && expense) && !this.state.isRemove && (<div className='flex justify-between bg-indigo-400 text-gray-50 px-4' >
               <p>{expenseName} </p> <p>${expense}</p>
               <button onClick={() => this.setState({
                  isRemove: true
               })}>remove</button>
            </div>)}
         
         <hr />
      </>
      )
   }
}
