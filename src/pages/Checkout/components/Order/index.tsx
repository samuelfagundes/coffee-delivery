import axios from 'axios'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import {
  ChangeQuantityButton,
  ConfirmOrderButton,
  OrderContainer,
  PriceInfo,
  Products,
  RemoveButton,
} from './styles'

interface Coffee {
  id: number
  name: string
  price: string
  image: string
}

export function Order() {
  const [coffeesList, setCoffeesList] = useState<Coffee[]>([])

  useEffect(() => {
    async function getCoffees() {
      const response = await axios.get('http://localhost:3000/coffees')
      setCoffeesList(response.data)
    }
    getCoffees()
  }, [])

  return (
    <OrderContainer>
      <Products>
        <div>
          <img src={coffeesList[0]?.image} alt={coffeesList[0]?.name} />
          <div>
            <p>{coffeesList[0]?.name}</p>
            <div>
              <ChangeQuantityButton>
                <button>
                  <Minus />
                </button>
                <p>1</p>
                <button>
                  <Plus />
                </button>
              </ChangeQuantityButton>
              <RemoveButton>
                <Trash size={16} /> Remover
              </RemoveButton>
            </div>
          </div>
        </div>
        <span>R$ {coffeesList[0]?.price}</span>
      </Products>
      <Products>
        <div>
          <img src={coffeesList[0]?.image} alt={coffeesList[0]?.name} />
          <div>
            <p>{coffeesList[0]?.name}</p>
            <div>
              <ChangeQuantityButton>
                <button>
                  <Minus />
                </button>
                <p>1</p>
                <button>
                  <Plus />
                </button>
              </ChangeQuantityButton>
              <RemoveButton>
                <Trash size={16} /> Remover
              </RemoveButton>
            </div>
          </div>
        </div>
        <span>R$ {coffeesList[0]?.price}</span>
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
