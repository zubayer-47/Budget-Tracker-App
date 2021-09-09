
export default function Left(props) {
   // console.log(props);
   let count = 0;
   const {amount, other} = props.amount;
   const {expense, expenseName} = props.expense;

   if (amount ||other) {
      const x = (amount && other) ? (+amount + +other) : +amount;

      if (expense && expenseName) {
         const res = x - Number(expense)
         count = res;
         console.log(res);
      }
   }
   return (
      <h1 className='text-xl my-2 px-2'>Left Over: {count}</h1>
   )
}
