import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { Cart, HeaderContainer, LocationButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Coffee Delivery" />

      <div>
        <LocationButton>
          <MapPin size={22} weight="fill" /> Ceilândia, DF
        </LocationButton>
        <Cart>
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </div>
    </HeaderContainer>
  )
}
