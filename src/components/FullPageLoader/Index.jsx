import styled from 'styled-components'
import Spinner from '../../assets/spinner.gif'

const Index = () => {

  const FpContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  `

  const FpLoader = styled.div`
    top: 30%;
    left: 48%;
    z-index: 1000;
    position: absolute;
  `

  return (
    <FpContainer>
      <FpLoader src={ Spinner } alt="loading" />
    </FpContainer>
  )
}

export default Index