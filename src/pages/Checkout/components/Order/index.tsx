import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
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
  const {
    coffeesList,
    orderList,
    addProduct,
    removeProduct,
    deleteOrder,
    paymentInfo,
    updateDeliveryInfo,
    cep,
    street,
    addressNumber,
    district,
    city,
    uf,
    clearOrderList,
  } = useContext(OrderContext)

  const totalItems = orderList.reduce(
    (previousValue, currentValue) =>
      previousValue +
      Number(currentValue.price) *
        (currentValue.quantity ? currentValue.quantity : 0),
    0,
  )

  const deliveryTax = 3.5

  const totalToPay = totalItems + deliveryTax

  return (
    <OrderContainer>
      {coffeesList.map((singleOrder) => {
        const filteredOrdersList = orderList.filter(
          (order) => order.id === singleOrder.id,
        )
        return filteredOrdersList.map((coffee) => {
          return (
            <Products key={coffee.id}>
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
                      <p>{coffee.quantity}</p>
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
                    <RemoveButton onClick={() => deleteOrder(coffee.id)}>
                      <Trash size={16} /> Remover
                    </RemoveButton>
                  </div>
                </div>
              </div>
              <span>R$ {coffee.price}</span>
            </Products>
          )
        })
      })}
      <PriceInfo>
        <p>
          Total de itens <span>R$ {totalItems.toFixed(2)}</span>
        </p>
        <p>
          Entrega <span>R$ {deliveryTax.toFixed(2)}</span>
        </p>
        <p>
          Total
          <span>R$ {totalToPay.toFixed(2)}</span>
        </p>
      </PriceInfo>
      {cep &&
      street &&
      addressNumber &&
      district &&
      city &&
      uf &&
      paymentInfo ? (
        <Link to="/success">
          <ConfirmOrderButton
            onClick={() => {
              updateDeliveryInfo(cep, street, addressNumber, district, city, uf)
              clearOrderList()
            }}
          >
            CONFIRMAR PEDIDO
          </ConfirmOrderButton>
        </Link>
      ) : (
        <strong>Preencha as informações para continuar</strong>
      )}
    </OrderContainer>
  )
}
