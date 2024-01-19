export interface Transaction {
  id: string
  name: string
  amount: number
  status: 'Paid' | 'Pending'
  createdAt: string
  updatedAt: string
}

export type TransactionType = 'Revenue' | 'Expense' | 'Receivable' | 'Payable'
