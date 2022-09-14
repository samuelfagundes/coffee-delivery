import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../../context/OrderContext'
import { DeliveryInfoContainer, InfoItem } from './styles'

export function DeliveryInfo() {
  const { street, addressNumber, district, city, uf, paymentInfo } =
    useContext(OrderContext)

  function ajustPaymentType() {
    if (paymentInfo === 'CreditCard') {
      return 'Cartão de crédito'
    } else if (paymentInfo === 'DebitCard') {
      return 'Cartão de débito'
    } else if (paymentInfo === 'Money') {
      return 'Dinheiro'
    }
  }

  return (
    <DeliveryInfoContainer>
      <InfoItem iconBackground="purple">
        <div>
          <MapPin weight="fill" size={16} />
        </div>
        <section>
          <p>
            Entrega em{' '}
            <span>
              {street}, {addressNumber}
            </span>
          </p>
          <p>
            {district} - {city}, {uf}
          </p>
        </section>
      </InfoItem>
      <InfoItem iconBackground="yellow">
        <div>
          <Timer weight="fill" size={16} />
        </div>
        <section>
          <p>Previsão de entrega</p>
          <span>20 min - 30 min</span>
        </section>
      </InfoItem>
      <InfoItem iconBackground="darkYellow">
        <div>
          <CurrencyDollar size={16} />
        </div>
        <section>
          <p>Pagamento na entrega</p>
          <span>{ajustPaymentType()}</span>
        </section>
      </InfoItem>
    </DeliveryInfoContainer>
  )
}
