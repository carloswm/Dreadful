import styled from 'styled-components'
import Logo from '../Logo/Index'
import Login from './Login/Index'
import CategoryHeader from './CategoryHeader/Index'
import { useLocation } from 'react-router-dom'

const Index = () => {

  const MainHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12rem;
  `

  const AuxHeader = styled.header`
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    align-items: center;
    gap: 0px 0px;
    padding: 0 12rem;
  `

  const location = useLocation();

  return (
    <>
      { location.pathname != '/' ?
        <AuxHeader>
          <Logo />
          <CategoryHeader />
          <Login />
        </AuxHeader>
        :
        <MainHeader>
          <Logo />
          <Login />
        </MainHeader>
      }
    </>
  )
}

export default Index