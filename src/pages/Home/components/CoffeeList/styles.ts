import styled from 'styled-components'

export const CoffeeListContaier = styled.div`
  h1 {
    color: ${(props) => props.theme['brown-300']};
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 3.375rem;
  }
`

export const CoffeeListSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  grid-row-gap: 2.5rem;
`

export const CoffeeCardContainer = styled.div`
  display: flex;
  max-width: 16rem;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 0 1.25rem;

  img {
    display: block;
    margin: -1.25rem auto 0;
  }

  .tags {
    display: flex;
    margin: 0.75rem auto;
    gap: 0.25rem;
    justify-content: center;

    span {
      padding: 0.25rem 0.5rem;
      border-radius: 999px;

      font-size: 0.625rem;
      font-weight: 700;

      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme['yellow-900']};
      background-color: ${(props) => props.theme['yellow-100']};
    }
  }

  h1 {
    display: flex;
    justify-content: center;
    margin: 0 auto 0.5rem;
    font-size: 1.25rem;
  }

  p {
    display: flex;
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme['brown-100']};
  }
`
export const CoffeeCardFooter = styled.div`
  display: flex;
  margin: 2.0625rem 0.5rem 1.25rem;

  p {
    display: flex;
    flex: 1;
    align-items: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['brown-200']};
    line-height: 130%;
    text-align: right;

    span {
      background-color: initial;
      color: ${(props) => props.theme['brown-200']};
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
      margin-left: 0.2rem;
    }
  }

  form {
    display: flex;
    gap: 0.5rem;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      background-color: ${(props) => props.theme['gray-300']};
      max-width: 4.5rem;
      border-radius: 6px;
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
    }

    > a > button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['purple-900']};
      border: none;
      padding: 0.5rem;
      border-radius: 6px;
      cursor: pointer;

      transition: background-color 0.2s;
    }

    > a > button:hover {
      background-color: ${(props) => props.theme['purple-500']};
    }
  }
`
