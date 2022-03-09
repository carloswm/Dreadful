import styled from 'styled-components'
import LoginBtn from './LoginBtn'
import TrialBtn from './TrialBtn'

const Index = () => {

  const Btns = styled.div`
    display: flex;
  `

  return (
    <Btns>
      <LoginBtn />
      <TrialBtn />
    </Btns>
  )
}

export default Index