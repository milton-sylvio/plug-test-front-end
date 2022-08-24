import React from 'react'

import Plus from '@/assets/plus.svg?component'

import Button from '@/components/Button'
import Card from '@/components/Card'
import Divider from '@/components/Divider'
import Header from '@/components/Header'
import Heading from '@/components/Heading'

import { Box, Container, Flex } from './styles'

const Todo: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <Flex alignItems-="center" flexDirection="row" justifyContent="space-between">
          <Box
            alignItems="center"
            as="section"
            display="flex"
            flexDirection="column"
            mr="30px"
          >
            <Heading
              color="blue"
              fontSize="24px"
              fontWeight={400}
              mb="60px"
            >
              To Do
            </Heading>
            <Card 
              description="Desenvolver o teste para a Plug Pagamentos"
              title="Teste para a Plug"
            />
            <Card title="Estudar Rescript" />
          </Box>

          <Divider />

          <Box
            alignItems="center"
            as="section"
            display="flex"
            flexDirection="column"
            ml="30px"
          >
            <Heading
              color="blue"
              fontSize="24px"
              fontWeight={400}
              mb="60px"
            >
              Done
            </Heading>
            <Card title="Estudar Rescript" type="done" />
          </Box>
        </Flex>
      </Container>
      
      <Button
        borderRadius="25px"
        bottom="25px"
        position="absolute"
        right="25px"
        onClick={() => console.log('/todo')}
        width="110px"
      >
        <Plus /> Novo
      </Button>
    </>
  )
}

export default Todo