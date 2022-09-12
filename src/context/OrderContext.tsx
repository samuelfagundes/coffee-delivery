import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface Coffee {
  id: number
  name: string
  tags: string[]
  description: string
  price: string
  image: string
  quantity: number
}

interface Order {
  id: number
  name: string
  price: string
  image: string
  quantity: number
}

interface OrderContextType {
  coffeesList: Coffee[]
  orderList: Order[]
  addProduct: (
    event: any,
    id: number,
    name: string,
    price: string,
    image: string,
  ) => void
  removeProduct: (
    event: any,
    id: number,
    name: string,
    price: string,
    image: string,
  ) => void
  saveOrderList: () => void
  deleteOrder: (id: number) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [coffeesList, setCoffeesList] = useState<Coffee[]>([])
  const [orderList, setOrderList] = useState<Order[]>([])

  useEffect(() => {
    async function getCoffees() {
      const response = await axios.get('http://localhost:3000/coffees')
      setCoffeesList(response.data)
    }
    getCoffees()
  }, [])

  useEffect(() => {
    const localStorageOrderList = localStorage.getItem('CoffeeDelivery Order')

    if (localStorageOrderList) {
      setOrderList(JSON.parse(localStorageOrderList))
    }
  }, [])

  function saveOrderList() {
    localStorage.setItem('CoffeeDelivery Order', JSON.stringify(orderList))
  }

  function addProduct(
    event: any,
    id: number,
    name: string,
    price: string,
    image: string,
  ) {
    event.preventDefault()

    coffeesList.map((coffee) => {
      if (coffee.id === id) {
        const quantity = 1
        const newOrder = { id, quantity, name, price, image }
        setOrderList([...orderList, newOrder])

        orderList.map((order) => {
          if (order.id === coffee.id) {
            if (order.quantity) {
              const quantity = order.quantity + 1
              const filterOrderToUpdate = orderList.filter(
                (order) => order.id !== id,
              )
              const updateOrder = { id, quantity, name, price, image }
              setOrderList([...filterOrderToUpdate, updateOrder])
            }
          }

          return orderList
        })
      }
      return orderList
    })
  }

  function removeProduct(
    event: any,
    id: number,
    name: string,
    price: string,
    image: string,
  ) {
    event.preventDefault()

    coffeesList.map((coffee) => {
      if (coffee.id === id) {
        orderList.map((order) => {
          if (order.id === coffee.id) {
            if (order.quantity === 1) {
              const filterOrderToRemove = orderList.filter(
                (order) => order.id !== coffee.id,
              )
              return setOrderList(filterOrderToRemove)
            }
            if (order.quantity) {
              const quantity = order.quantity - 1
              const filterOrderToUpdate = orderList.filter(
                (order) => order.id !== id,
              )
              const updateOrder = { id, quantity, name, price, image }
              setOrderList([...filterOrderToUpdate, updateOrder])
            }
          }
          return orderList
        })
      }
      return orderList
    })
  }

  function deleteOrder(id: number) {
    orderList.map((order) => {
      if (order.id === id) {
        const filterOrderToRemove = orderList.filter((order) => order.id !== id)
        return setOrderList(filterOrderToRemove)
      }
      return orderList
    })
  }

  return (
    <OrderContext.Provider
      value={{
        addProduct,
        removeProduct,
        coffeesList,
        orderList,
        saveOrderList,
        deleteOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
