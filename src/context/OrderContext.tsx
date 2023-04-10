import { createContext, ReactNode, useEffect, useState } from 'react'

import coffees from '../../db.json'

type CEP = number | undefined
type Street = string | undefined
type AddressNumber = number | undefined
type Complement = string | undefined
type District = string | undefined
type City = string | undefined
type UF = string | undefined
type PaymentInfo = 'CreditCard' | 'DebitCard' | 'Money'

interface Coffee {
  id: number
  name: string
  tags: string[]
  description: string
  price: string
  image: string
  quantity?: number
}

interface Order {
  id: number
  name: string
  price: string
  image: string
  quantity?: number
}

interface DeliveryInfo {
  cep: number
  street: string
  addressNumber: number
  complement?: string
  district: string
  city: string
  uf: string
}

interface OrderContextType {
  coffeesList: Coffee[]
  orderList: Order[]
  paymentInfo: PaymentInfo | undefined
  cep: number | undefined
  street: string | undefined
  addressNumber: number | undefined
  complement: string | undefined
  district: string | undefined
  city: string | undefined
  uf: string | undefined
  deliveryInfo: DeliveryInfo | undefined
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
  updateDeliveryInfo: (
    cep: number,
    street: string,
    addressNumber: number,
    district: string,
    city: string,
    uf: string,
  ) => void
  saveOrderList: () => void
  clearOrderList: () => void
  deleteOrder: (id: number) => void
  updateCep: (cep: number) => void
  updateStreet: (street: string) => void
  updateAddressNumber: (addressNumber: number) => void
  updateComplement: (complement: string) => void
  updateDistrict: (district: string) => void
  updateCity: (city: string) => void
  updateUf: (uf: string) => void
  updatePaymentInfo: (method: PaymentInfo) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [coffeesList, setCoffeesList] = useState<Coffee[]>([])
  const [orderList, setOrderList] = useState<Order[]>([])
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>()
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>()
  const [cep, setCep] = useState<CEP>()
  const [street, setStreet] = useState<Street>()
  const [addressNumber, setAddressNumber] = useState<AddressNumber>()
  const [complement, setComplement] = useState<Complement>()
  const [district, setDistrict] = useState<District>()
  const [city, setCity] = useState<City>()
  const [uf, setUf] = useState<UF>()

  useEffect(() => {
    function getCoffees() {
      setCoffeesList(coffees.coffees)
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

  function clearOrderList() {
    setOrderList([])
    localStorage.removeItem('CoffeeDelivery Order')
  }

  function updateCep(cep: number) {
    setCep(cep)
  }

  function updateStreet(street: string) {
    setStreet(street)
  }

  function updateAddressNumber(addressNumber: number) {
    setAddressNumber(addressNumber)
  }

  function updateComplement(complement: string) {
    setComplement(complement)
  }

  function updateDistrict(district: string) {
    setDistrict(district)
  }

  function updateCity(city: string) {
    setCity(city)
  }

  function updateUf(uf: string) {
    setUf(uf)
  }

  function updatePaymentInfo(method: 'DebitCard' | 'CreditCard' | 'Money') {
    setPaymentInfo(method)
  }

  function updateDeliveryInfo(
    cep: number,
    street: string,
    addressNumber: number,
    district: string,
    city: string,
    uf: string,
  ) {
    if (cep && street && addressNumber && district && city && uf) {
      const newDeliveryInfo = {
        cep,
        street,
        addressNumber,
        district,
        city,
        uf,
      }

      setDeliveryInfo(newDeliveryInfo)
    }
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
        updateCep,
        updateStreet,
        updateAddressNumber,
        updateComplement,
        updateDistrict,
        updateCity,
        updateUf,
        cep,
        street,
        addressNumber,
        complement,
        district,
        city,
        uf,
        updatePaymentInfo,
        paymentInfo,
        updateDeliveryInfo,
        deliveryInfo,
        clearOrderList,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
