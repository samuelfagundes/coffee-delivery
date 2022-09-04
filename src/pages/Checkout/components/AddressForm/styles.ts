import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-100']};

  > div {
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
      color: ${(props) => props.theme['yellow-900']};
      margin-right: 0.5rem;
    }
  }
`

export const FormInput = styled.input`
  max-width: 35rem;
  height: 2.625rem;
  border-radius: 4px;
  padding: 0.75rem;
  border: none;
  font-size: 0.875rem;
  line-height: 18.2px;
  margin-right: 1rem;
  background-color: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['brown-200']};

  :focus {
    border: 1px solid ${(props) => props.theme['yellow-900']};
  }
`

export const FormInfo = styled.form`
  display: flex;
  max-width: 35rem;
  flex-wrap: wrap;

  .cep {
    margin-bottom: 1rem;
  }

  .rua {
    margin-right: 0;
    width: 35rem;
    margin-bottom: 1rem;
  }

  .numero {
    width: 12.5rem;
    margin-bottom: 1rem;
  }

  .complemento {
    margin-right: 0;
    flex: 1;
  }

  .bairro {
    width: 12.5rem;
    margin-bottom: 1rem;
  }

  .cidade {
    flex: 1;
  }

  .uf {
    width: 3.75rem;
    margin-right: 0;
  }
`
