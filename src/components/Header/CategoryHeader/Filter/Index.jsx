import styled from 'styled-components'

const Index = ({ icon, title }) => {

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #201f20;
    height: 100%;
    padding: 0 15px;
  `

  const Span = styled.span`
    padding-left: 10px;
    color: #fff;
  `

  return (
    <Container>
      <img src={ icon } alt={ title } />
      <Span>{ title }</Span>
    </Container>
  )
}

export default Index