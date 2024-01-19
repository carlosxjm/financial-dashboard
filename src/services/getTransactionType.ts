import { Transaction, TransactionType } from "../types"


export const getTransactionType = (transaction: Transaction): TransactionType => {
  if (transaction.status === 'Paid') {
    if (transaction.amount > 0) {
      return 'Revenue'
    } 

    return 'Expense'
  }

  if (transaction.amount > 0) {
    return 'Receivable'
  }


  return 'Payable'
}