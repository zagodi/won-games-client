import Profile from 'templates/Profile'
import OrdersList, { OrderListProps } from 'components/OrdersList'

import mockOrders from 'components/OrdersList/mock'

export default function Orders({ items }: OrderListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: mockOrders
    }
  }
}
