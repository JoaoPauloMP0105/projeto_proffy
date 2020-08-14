import React, { InputHTMLAttributes } from 'react'

import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  labelcolor?: string
}

const Input: React.FC<InputProps> = ({ label, name, labelcolor, ...rest }) => (
  <S.InputWrapper>
    <S.InputTitle labelcolor={labelcolor} htmlFor={name}>
      {label}
    </S.InputTitle>
    <S.InputContent id={name} {...rest} />
  </S.InputWrapper>
)

export default Input;