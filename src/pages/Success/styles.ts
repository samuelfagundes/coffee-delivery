import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  margin-top: 7rem;
  justify-content: space-between;
  align-items: flex-end;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-900']};
    line-height: 41.6px;
  }

  span {
    font-size: 1.25rem;
    line-height: 26px;
    color: ${(props) => props.theme['brown-300']};
  }
`
