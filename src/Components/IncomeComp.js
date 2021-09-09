import React, { Component } from 'react';

export default class IncomeComp extends Component {

   render() {
      const {amount,other, handleChange} = this.props
      return (
            <div className='border p-3 mt-3'>

               <form onSubmit={e => e.preventDefault()} name='amount'>
                  <h4 className='text-blue-300 text-xl'>Income</h4>
                  <div>
                     <label htmlFor="amount">Paycheck Net Amount</label>
                     <input type="number" placeholder='Amount' value={amount} onChange={handleChange} name='amount' id='amount' className='block border px-2 w-full' />
                  </div>
                  <div>
                     <label htmlFor="otherIncome">Other Income</label>
                     <input type="number" placeholder='other amount' value={other} onChange={handleChange} name='other' id='otherIncome' className='block border px-2 w-full mb-3' />
                  </div>

                  <input type="submit" value='Update Income' className='px-5' />
               </form>
            </div>
      )
   }
}
