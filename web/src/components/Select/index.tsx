import React, { SelectHTMLAttributes } from 'react'

import * as S from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  labelcolor?: string
  options: Array<{ value: string; label: string }>
}

const Select: React.FC<SelectProps> = ({ label, name, options, labelcolor, ...rest }) => (
  <S.SelectWrapper>
    <S.SelectTitle labelcolor={labelcolor} htmlFor={name}>
      {label}
    </S.SelectTitle>
    <S.SelectContent value="" id={name} {...rest}>
      <option value="" disabled hidden>
        Selecione uma opção
      </option>
      {options.map(option => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        )
      })}
    </S.SelectContent>
  </S.SelectWrapper>
)

export default Select