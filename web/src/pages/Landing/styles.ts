import styles from 'styled-components';
//import * as styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'react-router-dom'

export const LandingWrapper = styles.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-in-primary);
  background: var(--color-primary);
`

export const LandingContent = styles.div`
  max-width: 700px;
  ${media.greaterThan('medium')`
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: "logo hero hero" "buttons buttons total";
  `}
`

export const LogoContainer = styles.div`
  text-align: center;
  margin-bottom: 2rem;
  > img {
    height: 8rem;
  }
  ${media.greaterThan('medium')`
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;
    > img {
      height: 100%;
    }
  `}
`

export const Description = styles.h2`
  font-weight: 500;
  font-size: 2rem;
  line-height: 4rem;
  margin-top: 0.8rem;
  ${media.greaterThan('medium')`
    text-align: initial;
    font-size: 3.6rem;
  `}
`

export const HeroImage = styles.img`
  width: 100%;
  ${media.greaterThan('medium')`
    grid-area: hero;
    justify-self: end;
  `}
`

export const ButtonContainer = styles.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 1.3rem;
  ${media.greaterThan('medium')`
    grid-area: buttons;
    justify-content: flex-start;
    a {
      font-size: 2.4rem;
    }
  `}
  ${media.lessThan('small')`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
  a {
    width: 25rem;
    height: 8rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--color-button-text);
    transition: background-color 0.2s;
    img {
      width: 4rem;
      margin-right: 2.4rem;
    }
  }
`

export const Study = styles(Link)`
  margin-right: 1.6rem;
  background: var(--color-primary-lighter);
  &:hover {
    background: var(--color-primary-light);
  }
  ${media.lessThan('small')`
    margin-right: 0;
    margin-bottom: 1rem;
  `}
`

export const Classes = styles(Link)`
  background: var(--color-secondary);
  &:hover {
    background: var(--color-secondary-dark);
  }
`

export const TotalConnections = styles.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.greaterThan('medium')`
    grid-area: total;
    justify-self: end;
  `}
  > img {
    margin-left: 0.8rem;
  }
`