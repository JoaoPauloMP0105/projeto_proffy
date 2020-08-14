import styled from 'styled-components'
import media from 'styled-media-query'

interface LabelProps {
  labelcolor?: string
}

export const SelectWrapper = styled.div`
  position: relative;
  padding-bottom: 2.5rem;
  & + & {
    margin-top: 1.4rem;
    ${media.greaterThan('medium')`
      margin-top: 0;
    `}
  }
`

export const SelectTitle = styled.label<LabelProps>`
  font-size: 1.4rem;
  color: ${props => (props.labelcolor ? props.labelcolor : undefined)};
`

export const SelectContent = styled.select`
  width: 100%;
  height: 5.6rem;
  margin-top: 0.6rem;
  border-radius: 0.6rem;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  padding: 1.2rem 1.6rem;
  font: 1.6rem Archivo;
`