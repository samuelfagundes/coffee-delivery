import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-100']};
  margin-top: 0.75rem;

  > :first-child {
    display: flex;
    flex: 1;
    margin-bottom: 2rem;

    p {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      line-height: 130%;

      span {
        color: ${(props) => props.theme['brown-200']};
        font-size: 0.875rem;
      }
    }

    svg {
      color: ${(props) => props.theme['purple-500']};
      margin-right: 0.5rem;
    }
  }
`

export const PaymenyMethod = styled.div`
  display: flex;

  button {
    display: flex;
    flex: 1;
    align-items: center;
    border: none;
    border-radius: 6px;
    padding: 1rem;
    font-size: 0.75rem;
    cursor: pointer;
    color: ${(props) => props.theme['brown-200']};
    background-color: ${(props) => props.theme['gray-300']};

    transition: background-color 0.2s;

    svg {
      color: ${(props) => props.theme['purple-500']};
      margin-right: 0.5rem;
    }

    &#active {
      background-color: ${(props) => props.theme['purple-100']};
      border: 1px solid ${(props) => props.theme['purple-500']};
    }

    :not(:last-child) {
      margin-right: 0.75rem;
    }

    :hover {
      background-color: ${(props) => props.theme['gray-400']};
    }
  }
`
