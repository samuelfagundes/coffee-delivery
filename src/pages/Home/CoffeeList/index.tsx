import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeListContaier,
  CoffeeListSection,
} from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

interface Coffee {
  id: number
  name: string
  tags: string[]
  description: string
  price: string
  image: string
}

export function CoffeeList() {
  const [coffeesList, setCoffeesList] = useState<Coffee[]>([])

  useEffect(() => {
    async function getCoffees() {
      const response = await axios.get('http://localhost:3000/coffees')
      setCoffeesList(response.data)
    }
    getCoffees()
  }, [])

  console.log(coffeesList)

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
                      <button>
                        <Minus />
                      </button>
                      <p>1</p>
                      <button>
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
