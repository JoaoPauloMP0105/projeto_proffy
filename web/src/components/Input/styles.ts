import styled from 'styled-components'
import media from 'styled-media-query'

interface LabelProps {
  labelcolor?: string
}

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  & + & {
    margin-top: 1.4rem;
    ${media.greaterThan('medium')`
      margin-top: 0;
    `}
  }
  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0.8rem;
  }
`

export const InputTitle = styled.label<LabelProps>`
  font-size: 1.4rem;
  color: ${props => (props.labelcolor ? props.labelcolor : undefined)};
`

export const InputContent = styled.input`
  width: 100%;
  height: 5.6rem;
  margin-top: 0.6rem;
  border-radius: 0.6rem;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
`