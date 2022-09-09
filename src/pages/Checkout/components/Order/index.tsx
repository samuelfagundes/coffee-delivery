import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../../../context/OrderContext'
import {
  ChangeQuantityButton,
  ConfirmOrderButton,
  OrderContainer,
  PriceInfo,
  Products,
  RemoveButton,
} from './styles'

export function Order() {
  const { orderList, addProduct, removeProduct } = useContext(OrderContext)

  return (
    <OrderContainer>
      <Products>
        {orderList.map((coffee) => {
          return (
            <>
              <div>
                <img src={coffee.image} alt={coffee.name} />
                <div>
                  <p>{coffee.name}</p>
                  <div>
                    <ChangeQuantityButton>
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
                      <p>1</p>
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
                    </ChangeQuantityButton>
                    <RemoveButton>
                      <Trash size={16} /> Remover
                    </RemoveButton>
                  </div>
                </div>
              </div>
              <span>R$ {coffee.price}</span>
            </>
          )
        })}
      </Products>
      <PriceInfo>
        <p>
          Total de itens <span>R$ 19,80</span>
        </p>
        <p>
          Entrega <span>R$ 3,50</span>
        </p>
        <p>
          Total
          <span>R$ 23,30</span>
        </p>
      </PriceInfo>
      <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
    </OrderContainer>
  )
}
