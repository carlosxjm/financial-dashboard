import { useEffect, useState } from "react"
import { Transaction } from "../types"

export const useTransactionData = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasErrors, setHasErrors] = useState(false)


  useEffect(() => {
    const loadData = async () =>  {
      setHasErrors(false)

      try {
        const response = await fetch('https://raw.githubusercontent.com/carlosxjm/financial-dashboard/main/public/mock-api-data.json')
        const result = await response.json() 
        setTransactions(result)

      } catch (error) {
        setHasErrors(true)
      }
      
      setIsLoading(false)
    }

    loadData()
  }, [])

  return {
    transactions,
    isLoading,
    hasErrors,
  }
}