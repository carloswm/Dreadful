import styled from 'styled-components'
import Logo from '../Logo'
import Links from './Links'
import Stores from './Stores'

const Index = () => {

  const MainFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
  `

  const Copyright = styled.small`
    font-size: 12px;
    color: #fff;
    padding-top: 10px;
  `

  return (
    <MainFooter>
      <Logo
        width="150px"
      />
      <Links />
      <Stores />
      <Copyright>Copyright 2022 Dreadful Tomato Streaming. All Rights Reserved</Copyright>
    </MainFooter>
  )
}

export default Index