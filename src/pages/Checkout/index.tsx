import { AddressForm } from './components/AddressForm/'
import { Order } from './components/Order'
import { Payment } from './components/Payment'
import {
  CheckoutContainer,
  DeliveryFormContainer,
  OrderContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <DeliveryFormContainer>
        <h1>Complete seu pedido</h1>
        <AddressForm />
        <Payment />
      </DeliveryFormContainer>
      <OrderContainer>
        <h1>Cafés selecionados</h1>
        <Order />
      </OrderContainer>
    </CheckoutContainer>
  )
}
