import styled from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  padding: 2.5rem;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['gray-100']};
`

export const Products = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};

  img {
    margin-right: 0.75rem;
  }

  > span {
    font-weight: 700;
    line-height: 20.8px;
    color: ${(props) => props.theme['brown-200']};
  }

  > div {
    display: flex;
  }

  > div > div > p {
    margin-bottom: 0.5rem;
    line-height: 20.8px;
    color: ${(props) => props.theme['brown-300']};
  }

  > div > div > div {
    display: flex;
    justify-content: space-between;
  }

  &:not(:first-child) {
    padding-top: 1.5rem;
  }
`

export const ChangeQuantityButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props) => props.theme['gray-300']};
  max-width: 4.5rem;
  max-height: 2rem;
  border-radius: 6px;
  margin-right: 0.5rem;
  padding: 0.75rem 0.25rem;
  line-height: 130%;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['purple-500']};
    background-color: inherit;
    border: none;
    margin: 0 0.5rem;
    cursor: pointer;

    transition: color 0.2s;
  }

  > button:hover {
    color: ${(props) => props.theme['purple-900']};
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 2rem;
  border: none;
  border-radius: 6px;
  padding: 0.4rem;
  background-color: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['brown-200']};
  transition: background-color 0.2s;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-400']};
  }
`

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  gap: 0.75rem;

  > p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    color: ${(props) => props.theme['brown-200']};

    > span {
      font-size: 1rem;
    }
  }

  p:last-child {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['brown-300']};
  }
`

export const ConfirmOrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 0;
  margin: 0 auto;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};

  transition: background-color 0.1s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-900']};
  }
`
