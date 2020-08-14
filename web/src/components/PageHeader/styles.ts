import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'

export const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  ${media.greaterThan('medium')`
    height: 250px;
  `}
`

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;
  > img {
    height: 1.6rem;
  }
  ${media.greaterThan('medium')`
    max-width: 1100px;
  `}
`

export const Return = styled(Link)`
  height: 3.2rem;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.6;
  }
`

export const HeaderContent = styled.div`
  width: 90%;
  position: relative;
  margin: 3.2rem auto;
  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
    ${media.greaterThan('medium')`
      max-width: 350px;
    `}
  }
  p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-text-in-primary);
  }
  ${media.greaterThan('medium')`
    flex: 1;
    max-width: 740px;
    padding-bottom: 48px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `}
`