import React, { useState, useEffect } from 'react'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import { api } from '../../services/api'

import * as S from './styles'

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('/connections').then(response => {
      const { total } = response.data

      setTotalConnections(total)
    })
  }, [])

  return (
    <S.LandingWrapper>
      <S.LandingContent>
        <S.LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <S.Description>Sua plataforma de estudos online.</S.Description>
        </S.LogoContainer>

        <S.HeroImage src={landingImg} alt="Plataforma de estudos" />

        <S.ButtonContainer>
          <S.Study to="/study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </S.Study>
          <S.Classes to="/give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </S.Classes>
        </S.ButtonContainer>

        <S.TotalConnections>
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração Roxo" />
        </S.TotalConnections>
      </S.LandingContent>
    </S.LandingWrapper>
  )
}

export default Landing