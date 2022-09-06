import MotoBoy from '../../assets/motoBoy.png'
import { DeliveryInfo } from './DeliveryInfo'
import { SuccessContainer } from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <DeliveryInfo />
      </div>
      <img src={MotoBoy} alt="" />
    </SuccessContainer>
  )
}
