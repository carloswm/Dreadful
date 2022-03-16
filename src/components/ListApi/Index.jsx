import styled from 'styled-components'
import Card from "./Card"

const Index = ({ title }) => {

  const Main = styled.div`
    margin: 0 140px;
  `

  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  `
  const Title = styled.h3`
    text-align: left;
    color: #fff;
    font-size: 16px;
  `

  return (
    <Main>
      <Title>{ title }</Title>
      <Container>
        <Card />
      </Container>
    </Main>
  )
}

export default Index