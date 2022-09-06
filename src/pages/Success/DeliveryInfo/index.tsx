import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { DeliveryInfoContainer, InfoItem } from './styles'

export function DeliveryInfo() {
  return (
    <DeliveryInfoContainer>
      <InfoItem iconBackground="purple">
        <div>
          <MapPin weight="fill" size={16} />
        </div>
        <section>
          <p>
            Entrega em <span>Rua João Daniel Martinelli, 102</span>
          </p>
          <p>Farrapos - Porto Alegre, RS</p>
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
          <span>Cartão de Crédito</span>
        </section>
      </InfoItem>
    </DeliveryInfoContainer>
  )
}
