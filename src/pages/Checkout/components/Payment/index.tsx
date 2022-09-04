import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react'
import { PaymentContainer, PaymenyMethod } from './styles'

export function Payment() {
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
        <button id="active">
          <CreditCard size={16} /> CARTÃO DE CRÉDITO
        </button>
        <button>
          <Bank size={16} /> CARTÃO DE DÉBITO
        </button>
        <button>
          <Money size={16} /> DINHEIRO
        </button>
      </PaymenyMethod>
    </PaymentContainer>
  )
}
