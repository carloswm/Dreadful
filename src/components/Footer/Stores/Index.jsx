import styled from 'styled-components'
import ImageStore from './ImageStore'
import AppStore from '../../../assets/app-store.png'
import GoogleStore from '../../../assets/google-play.png'

const Index = () => {

  const MainStore = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 10px;
  `

  return (
    <MainStore>
      <ImageStore
        img={ AppStore }
        alt="App Store"
      />
      <ImageStore
        img={ GoogleStore }
        alt="Google Play"
      />
    </MainStore>
  )
}

export default Index