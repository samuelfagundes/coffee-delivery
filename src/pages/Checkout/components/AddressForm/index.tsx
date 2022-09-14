import { MapPinLine } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../../../context/OrderContext'
import { AddressFormContainer, FormInfo, FormInput } from './styles'

export function AddressForm() {
  const {
    updateCep,
    updateStreet,
    updateAddressNumber,
    updateComplement,
    updateDistrict,
    updateCity,
    updateUf,
  } = useContext(OrderContext)

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
        <FormInput
          type="number"
          onChange={(event) => updateCep(Number(event.target.value))}
          placeholder="CEP"
          className="cep"
          required
        />
        <FormInput
          type="text"
          onChange={(event) => updateStreet(event.target.value)}
          placeholder="Rua"
          className="rua"
          required
        />
        <FormInput
          type="number"
          onChange={(event) => updateAddressNumber(Number(event.target.value))}
          placeholder="Número"
          className="numero"
          required
        />
        <FormInput
          type="text"
          onChange={(event) => updateComplement(event.target.value)}
          placeholder="Complemento"
          className="complemento"
        />
        <FormInput
          type="text"
          onChange={(event) => updateDistrict(event.target.value)}
          placeholder="Bairro"
          className="bairro"
          required
        />
        <FormInput
          type="text"
          onChange={(event) => updateCity(event.target.value)}
          placeholder="Cidade"
          className="cidade"
          required
        />
        <FormInput
          type="text"
          onChange={(event) => updateUf(event.target.value)}
          placeholder="UF"
          className="uf"
          required
        />
      </FormInfo>
    </AddressFormContainer>
  )
}
