import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  margin-top: 4.5rem;
`

export const DeliveryFormContainer = styled.div`
  display: block;
  max-width: 40rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme['brown-300']};
    margin-bottom: 1rem;
  }
`

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.75rem;
  max-width: 28rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme['brown-300']};
    margin-bottom: 1rem;
  }
`
