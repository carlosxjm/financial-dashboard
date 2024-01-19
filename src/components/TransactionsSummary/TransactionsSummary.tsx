import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Flex, Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import { parseCurrencyToShow } from "../../services/parseCurrencyToShow";

interface TransactionsSummaryProps {
  totalRevenue: number
  totalExpenses: number
  totalPayable: number
  totalReceivable: number
}

export const TransactionsSummary = ({ totalRevenue, totalExpenses, totalPayable, totalReceivable }: TransactionsSummaryProps) =>  (
  <>
    <Flex justifyContent="space-between" marginBottom="4">
      <Stat>
        <StatLabel>Revenue</StatLabel>
        <StatNumber>{parseCurrencyToShow(totalRevenue)}</StatNumber>
        <StatHelpText><ArrowUpIcon color="green" />5% previous period</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Expenses</StatLabel>
        <StatNumber>{parseCurrencyToShow(totalExpenses)}</StatNumber>
        <StatHelpText><ArrowDownIcon color="red" />20% previous period</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Profit</StatLabel>
        <StatNumber>{parseCurrencyToShow(totalRevenue + totalExpenses)}</StatNumber>
        <StatHelpText><ArrowUpIcon color="green" />10% previous period</StatHelpText>
      </Stat>
    </Flex>
    <Flex justifyContent="flex-start">
      <Stat>
        <StatLabel>Accounts Receivable</StatLabel>
        <StatNumber>{parseCurrencyToShow(totalReceivable)}</StatNumber>
        <StatHelpText><ArrowDownIcon color="red" />50% previous period</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Accounts Payable</StatLabel>
        <StatNumber>{parseCurrencyToShow(totalPayable)}</StatNumber>
        <StatHelpText><ArrowDownIcon color="red" />2% previous period</StatHelpText>
      </Stat>
      <Stat></Stat>
    </Flex>
  </>
)
