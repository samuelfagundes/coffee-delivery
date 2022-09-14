import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react'
import { useContext, useState } from 'react'
import { OrderContext } from '../../../../context/OrderContext'
import { PaymentButton, PaymentContainer, PaymenyMethod } from './styles'

export function Payment() {
  const { updatePaymentInfo } = useContext(OrderContext)
  const [method, setMethod] = useState('')

  function updateMethodCredidCard() {
    const method = 'CreditCard'
    setMethod(method)
    updatePaymentInfo(method)
  }

  function updateMethodDebitCard() {
    const method = 'DebitCard'
    setMethod(method)
    updatePaymentInfo(method)
  }

  function updateMethodMoney() {
    const method = 'Money'
    setMethod(method)
    updatePaymentInfo(method)
  }

  return (
    <PaymentContainer>
      <div>
        <CurrencyDollarSimple size={22} />
        <p>
          Pagamento
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </p>
      </div>
      <PaymenyMethod>
        <PaymentButton
          onClick={() => updateMethodCredidCard()}
          isActive={method === 'CreditCard'}
        >
          <CreditCard size={16} /> CARTÃO DE CRÉDITO
        </PaymentButton>
        <PaymentButton
          onClick={() => updateMethodDebitCard()}
          isActive={method === 'DebitCard'}
        >
          <Bank size={16} /> CARTÃO DE DÉBITO
        </PaymentButton>
        <PaymentButton
          onClick={() => updateMethodMoney()}
          isActive={method === 'Money'}
        >
          <Money size={16} /> DINHEIRO
        </PaymentButton>
      </PaymenyMethod>
    </PaymentContainer>
  )
}
