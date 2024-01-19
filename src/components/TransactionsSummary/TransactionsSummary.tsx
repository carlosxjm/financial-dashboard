import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Flex, Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import { parseCurrencyToShow } from "../../services/parseCurrencyToShow";
import { ReactNode } from "react";

interface TransactionsSummaryProps {
  totalRevenue: number
  totalExpenses: number
  totalPayable: number
  totalReceivable: number
}

const DefaultStat = ({ children }: { children: ReactNode }) => (
  <Stat width={{ base: '49%', md: '32%' }} mb="4" flexBasis='auto' flexGrow='0'>{children}</Stat>
)

export const TransactionsSummary = ({ totalRevenue, totalExpenses, totalPayable, totalReceivable }: TransactionsSummaryProps) => (
  <>
    <Flex justifyContent={{ base: 'space-between', md: 'flex-start' }} marginBottom="4" wrap="wrap" gap="8px">
      <DefaultStat>
        <StatLabel>Revenue</StatLabel>
        <StatNumber>{parseCurrencyToShow(totalRevenue)}</StatNumber>
        <StatHelpText><ArrowUpIcon color="green" />5% previous period</StatHelpText>
      </DefaultStat>
      <DefaultStat>
        <StatLabel>Expenses</StatLabel>
        <StatNumber>{parseCurrencyToShow(totalExpenses)}</StatNumber>
        <StatHelpText><ArrowDownIcon color="red" />20% previous period</StatHelpText>
      </DefaultStat>
      <DefaultStat>
        <StatLabel>Profit</StatLabel>
        <StatNumber>{parseCurrencyToShow(totalRevenue + totalExpenses)}</StatNumber>
        <StatHelpText><ArrowUpIcon color="green" />10% previous period</StatHelpText>
      </DefaultStat>
      <DefaultStat>
        <StatLabel>Accounts Receivable</StatLabel>
        <StatNumber>{parseCurrencyToShow(totalReceivable)}</StatNumber>
        <StatHelpText><ArrowDownIcon color="red" />50% previous period</StatHelpText>
      </DefaultStat>
      <DefaultStat>
        <StatLabel>Accounts Payable</StatLabel>
        <StatNumber>{parseCurrencyToShow(totalPayable)}</StatNumber>
        <StatHelpText><ArrowDownIcon color="red" />2% previous period</StatHelpText>
      </DefaultStat>
    </Flex>
  </>
)
