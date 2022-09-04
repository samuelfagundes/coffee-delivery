import { AddressForm } from './components/AddressForm/'
import { Payment } from './components/Payment'
import { CheckoutContainer, DeliveryFormContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <DeliveryFormContainer>
        <h1>Complete seu pedido</h1>
        <AddressForm />
        <Payment />
      </DeliveryFormContainer>
    </CheckoutContainer>
  )
}
