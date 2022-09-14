import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { OrderContext } from '../../context/OrderContext'
import { Cart, Counter, HeaderContainer, LocationButton } from './styles'

export function Header() {
  const { orderList, saveOrderList } = useContext(OrderContext)
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Coffee Delivery" />
      </Link>

      <div>
        <LocationButton>
          <MapPin size={22} weight="fill" /> Ceilândia, DF
        </LocationButton>
        <Link to="/checkout" onClick={saveOrderList}>
          <Cart>
            <ShoppingCart size={22} weight="fill" />
            {orderList.length > 0 ? <Counter>{orderList.length}</Counter> : ''}
          </Cart>
        </Link>
      </div>
    </HeaderContainer>
  )
}
