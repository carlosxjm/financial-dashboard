import { useMemo } from "react";
import { Transaction } from "../types";
import { getTransactionType } from "../services/getTransactionType";

export const useSummaryData = (transactions: Transaction[]) => {
  const summaryData = useMemo(() => {
    let totalRevenue = 0
    let totalExpenses = 0
    let totalPayable = 0
    let totalReceivable = 0

    for (let index = 0; index < transactions.length; index++) {
      const transaction = transactions[index];
      const transactionType = getTransactionType(transaction)

      switch(transactionType) {
        case 'Revenue':
          totalRevenue += transaction.amount
          break
        case 'Expense':
          totalExpenses += transaction.amount
          break
        case 'Payable':
          totalPayable += transaction.amount
          break
        case 'Receivable':
          totalReceivable += transaction.amount
          break
      }
    }

    return {
      totalRevenue,
      totalExpenses,
      totalPayable,
      totalReceivable,
    }
  }, [transactions])


  return summaryData
}