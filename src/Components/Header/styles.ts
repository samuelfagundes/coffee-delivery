import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  div {
    display: flex;
    gap: 12px;
  }
`

export const LocationButton = styled.button`
  display: flex;
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 18.2px;
  text-align: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-900']};
  font-weight: 400;
`

export const Cart = styled.button`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-900']};
`
