import { Tag } from "@chakra-ui/react"
import { Transaction } from "../../types"

export const StatusTag = ({ status }: { status: Transaction['status'] }) => {
  const color =  status === 'Paid' ? 'green' : 'yellow'

  return <Tag colorScheme={color}>{status}</Tag>
}