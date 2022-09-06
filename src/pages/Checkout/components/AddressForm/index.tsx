import { MapPinLine } from 'phosphor-react'
import { AddressFormContainer, FormInfo, FormInput } from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <div>
        <MapPinLine size={22} />
        <p>
          Endereço de entrega
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </p>
      </div>
      <FormInfo>
        <FormInput type="number" placeholder="CEP" className="cep" required />
        <FormInput type="text" placeholder="Rua" className="rua" required />
        <FormInput
          type="number"
          placeholder="Número"
          className="numero"
          required
        />
        <FormInput
          type="text"
          placeholder="Complemento"
          className="complemento"
        />
        <FormInput
          type="text"
          placeholder="Bairro"
          className="bairro"
          required
        />
        <FormInput
          type="text"
          placeholder="Cidade"
          className="cidade"
          required
        />
        <FormInput type="text" placeholder="UF" className="uf" required />
      </FormInfo>
    </AddressFormContainer>
  )
}
