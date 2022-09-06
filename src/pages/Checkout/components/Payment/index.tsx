import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react'
import { useState } from 'react'
import { PaymentButton, PaymentContainer, PaymenyMethod } from './styles'

export function Payment() {
  const [method, setMethod] = useState('')

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
          onClick={() => setMethod('CreditCard')}
          isActive={method === 'CreditCard'}
        >
          <CreditCard size={16} /> CARTÃO DE CRÉDITO
        </PaymentButton>
        <PaymentButton
          onClick={() => setMethod('DebitCard')}
          isActive={method === 'DebitCard'}
        >
          <Bank size={16} /> CARTÃO DE DÉBITO
        </PaymentButton>
        <PaymentButton
          onClick={() => setMethod('Money')}
          isActive={method === 'Money'}
        >
          <Money size={16} /> DINHEIRO
        </PaymentButton>
      </PaymenyMethod>
    </PaymentContainer>
  )
}
