import styled from 'styled-components'
import Logo from '../Logo/Index'
import Login from './Login/Index'

const Index = () => {

  const MainHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12rem;
  `

  return (
    <MainHeader>
      <Logo />
      <Login />
    </MainHeader>
  )
}

export default Index