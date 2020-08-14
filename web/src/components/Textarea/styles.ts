import styled from 'styled-components'
import media from 'styled-media-query'

interface LabelProps {
  labelcolor?: string
}

export const TextAreaWrapper = styled.div`
  position: relative;
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
    bottom: 1rem;
  }
`

export const TextAreaTitle = styled.label<LabelProps>`
  font-size: 1.4rem;
  color: ${props => (props.labelcolor ? props.labelcolor : undefined)};
`

export const TextAreaContent = styled.textarea`
  width: 100%;
  min-height: 8rem;
  height: 16rem;
  margin-top: 0.6rem;
  border-radius: 0.6rem;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  resize: vertical;
  padding: 1.2rem 1.6rem;
  font: 1.6rem Archivo;
`