import React, { TextareaHTMLAttributes } from 'react';

import * as S from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
  labelcolor?: string
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, labelcolor, ...rest }) => (
  <S.TextAreaWrapper>
    <S.TextAreaTitle labelcolor={labelcolor} htmlFor={name}>
      {label}
    </S.TextAreaTitle>
    <S.TextAreaContent id={name} {...rest} />
  </S.TextAreaWrapper>
)

export default TextArea;