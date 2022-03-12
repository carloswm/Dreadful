import styled from 'styled-components'

const Index = ({ icon, title }) => {

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
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