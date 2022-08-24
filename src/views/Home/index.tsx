import React from 'react'
import { useNavigate } from 'react-router-dom'

import Illustration from '@/assets/illustration.svg'

import Button from '@/components/Button'
import Header from '@/components/Header'

import { Container } from './styles'

const Home: React.FC = () => {
  let navigate = useNavigate()

  return (
    <>
      <Header />

      <Container>
        <img src={Illustration} width="475px" height="373px" />
        <Button mt="85px" onClick={() => navigate('/todo')} width="213px">Iniciar</Button>
      </Container>
    </>
  )
}

export default Home