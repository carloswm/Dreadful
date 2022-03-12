import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Index = ({ width }) => {

  const Img = styled.img`
    width: ${props => props.width || 'auto'};
  `

  return (
    <Link to="/">
      <Img
        src={ logo }
        alt="logo"
        width={ width }
      />
    </Link>
  )
}

export default Index