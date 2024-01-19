import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Switch,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { DefaultBox } from "../../components/DefaultBox/DefaultBox";
import { useTransactionData } from "../../data/useTransactionData";
import { TransactionsSummary } from "../../components/TransactionsSummary/TransactionsSummary";
import { TransactionsTable } from "../../components/TransactionsTable/TransactionsTable";
import { UnexpectedErrorPage } from "../ErrorPage/UnexpectedErrorPage";
import { DashboardLoader } from "./DashboardLoader";
import { useSummaryData } from "../../data/useSummaryData";
import { useState } from "react";

export const Dashboard = () => {
  const [onlyPaid, setOnlyPaid] = useState(false)
  const { isLoading, transactions, hasErrors } = useTransactionData()
  const summaryData = useSummaryData(transactions)

  const handleOnlyPaidChange = () => {
    setOnlyPaid(!onlyPaid)
  }

  if (hasErrors) {
    return <UnexpectedErrorPage />
  }
  
  if (isLoading) {
    return <DashboardLoader />
  }

  return (
    <>
      <Heading>Overview</Heading>
      <Flex gap="12px" mt="4">
        <DefaultBox>
          <Heading size="sm" marginBottom="4">Summary</Heading>
          <TransactionsSummary {...summaryData} />
        </DefaultBox>
        <DefaultBox>
          <Heading size="sm" marginBottom="4">Account information</Heading>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th isNumeric>Usage</Th>
                  <Th isNumeric>Limit</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Daily debit limit</Td>
                  <Td isNumeric>$19.00</Td>
                  <Td isNumeric>$19.00</Td>
                </Tr>
                <Tr>
                  <Td>Daily debit limit</Td>
                  <Td isNumeric>$19.00</Td>
                  <Td isNumeric>$19.00</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </DefaultBox>
      </Flex>
      <Flex pt="3">
        <DefaultBox width="100%">
          <Heading size="sm" marginBottom="4">Filter</Heading>

          <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='only-paids' mb='0'>
              Show only paid transacations?
            </FormLabel>
            <Switch id='only-paids' onChange={handleOnlyPaidChange} checked={onlyPaid} />
          </FormControl>

        </DefaultBox>
      </Flex>
      <Flex pt="3">
        <DefaultBox width="100%">
          <TableContainer>
            <TransactionsTable transactions={transactions} onlyPaid={onlyPaid} />
          </TableContainer>
        </DefaultBox>
      </Flex>
    </>

  );
};
