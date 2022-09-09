import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../../../context/OrderContext'
import {
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeListContaier,
  CoffeeListSection,
} from './styles'

export function CoffeeList() {
  const { coffeesList, orderList, addProduct, removeProduct } =
    useContext(OrderContext)

  return (
    <CoffeeListContaier>
      <h1>Nossos cafés</h1>
      <CoffeeListSection>
        {coffeesList.map((coffee) => {
          return (
            <CoffeeCardContainer key={coffee.id}>
              <div>
                <img src={coffee.image} alt="" />
                <div className="tags">
                  {coffee.tags.map((tag) => {
                    return <span key={tag}>{tag}</span>
                  })}
                </div>
                <h1>{coffee.name}</h1>
                <p>{coffee.description}</p>
                <CoffeeCardFooter>
                  <p>
                    R$ <span>{coffee.price}</span>
                  </p>

                  <form>
                    <div>
                      <button
                        onClick={() =>
                          removeProduct(
                            event,
                            coffee.id,
                            coffee.name,
                            coffee.price,
                            coffee.image,
                          )
                        }
                      >
                        <Minus />
                      </button>
                      <p>
                        {orderList.map((order) => {
                          if (order.id === coffee.id) {
                            return order.quantity
                          }
                          return null
                        })}
                      </p>
                      <button
                        onClick={() =>
                          addProduct(
                            event,
                            coffee.id,
                            coffee.name,
                            coffee.price,
                            coffee.image,
                          )
                        }
                      >
                        <Plus />
                      </button>
                    </div>
                    <button>
                      <ShoppingCart size={22} weight="fill" />
                    </button>
                  </form>
                </CoffeeCardFooter>
              </div>
            </CoffeeCardContainer>
          )
        })}
      </CoffeeListSection>
    </CoffeeListContaier>
  )
}
