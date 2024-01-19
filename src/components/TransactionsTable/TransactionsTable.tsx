import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { StatusTag } from "../StatusTag/StatusTag";
import { Transaction } from "../../types";

interface TransactionsTableProps {
  transactions: Transaction[]
  onlyPaid: boolean
}

export const TransactionsTable = ({ transactions, onlyPaid }: TransactionsTableProps) => (
  <Table>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th isNumeric>Amount</Th>
        <Th>Status</Th>
        <Th>Created at</Th>
        <Th>Updated at</Th>
      </Tr>
    </Thead>
    <Tbody>
      {transactions.map(
        ({ id, name, amount, status, createdAt, updatedAt }) => (status === 'Paid' || !onlyPaid) && (
          <Tr key={id}>
            <Td>{id}</Td>
            <Td>{name}</Td>
            <Td isNumeric>
              {amount + " "}
              {amount >= 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </Td>
            <Td>
              <StatusTag status={status} />
            </Td>
            <Td>{createdAt}</Td>
            <Td>{updatedAt}</Td>
          </Tr>
        )
      )}
    </Tbody>
  </Table>
);
