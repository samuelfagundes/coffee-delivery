import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import IntroImage from '../../../assets/Intro-Coffee.png'
import { IntroContainer, VantagesContainer, VantagesItem } from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </div>
        <VantagesContainer>
          <VantagesItem iconBackground="darkYellow">
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </VantagesItem>
          <VantagesItem iconBackground="brown">
            <div>
              <Package size={16} weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </VantagesItem>
          <VantagesItem iconBackground="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </VantagesItem>
          <VantagesItem iconBackground="purple">
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </VantagesItem>
        </VantagesContainer>
      </div>
      <img src={IntroImage} alt="" />
    </IntroContainer>
  )
}
