import styled from 'styled-components'

const Index = ({img, title}) => {

  const Content = styled.div`
    display: flex;
    position: relative;
    padding: 0;
    border: 0;
    cursor: pointer;
  `

  const Text = styled.div`
    position: absolute;
    bottom: 0;
    padding: 20px 0 20px 40px;
    width: 100%;
    background-color: rgba(202, 45, 33, 0.8);
    font-size: 36px;
    text-align: left;
    &:hover {
      background-color: #CA2B21;
      transition: 0.3s ease-in-out;
    }
  `

  const Span = styled.span`
    color: #fff;
  `

  return (
    <Content>
      <img src={img} alt="movie"/>
      <Text>
        <Span>{title}</Span>
      </Text>
    </Content>
  )
}

export default Index