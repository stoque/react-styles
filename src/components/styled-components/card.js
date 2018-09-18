import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  background: #dfe6e9;
  border-radius: 1rem;
  margin: 20px;
  padding: 2rem;
`

const Title = styled.h1`
  color: #6c5ce7;
  font-size: 2rem;
`

const Text = styled.p`
  color: #636e72;
  font-size: 1rem;
`

const Card = () => (
  <CardWrapper>
    <Title>Título</Title>
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet tortor ac odio feugiat feugiat. Integer consectetur magna ac risus laoreet cursus.</Text>
  </CardWrapper>
)

export default Card