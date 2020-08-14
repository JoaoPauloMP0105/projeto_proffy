import styled from 'styled-components'
import media from 'styled-media-query'

export const TeacherListWrapper = styled.div`
  max-width: 700px;
  height: 100vh;
  width: 100vw;
  ${media.greaterThan('medium')`
    max-width: 100%;
  `}
`

export const SearchTeachers = styled.form`
  margin-top: 3.2rem;
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -5.2rem;
  `}
`

export const SearchButton = styled.button`
  width: 100%;
  height: 5rem;
  background: var(--color-secondary);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.6rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;
  margin-top: 2.3rem;
  ${media.greaterThan('medium')`
    width: 20rem;
    margin-top: 2.8rem;
  `}
  &:hover {
    background: var(--color-secondary-dark);
  }
`

export const ListAllTeachers = styled.main`
  margin: 3.2rem auto;
  width: 90%;
  ${media.greaterThan('medium')`
    padding: 3.2rem 0;
    max-width: 740px;
  `}
`