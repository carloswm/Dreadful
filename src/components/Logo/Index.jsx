import styled from 'styled-components'
import logo from '../../assets/logo.png'

const Index = ({ width }) => {

  const Img = styled.img`
    width: ${props => props.width || 'auto'};
  `

  return (
    <>
      <Img
        src={ logo }
        alt="logo"
        width={ width }
      />
    </>
  )
}

export default Index