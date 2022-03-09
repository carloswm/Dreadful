import Home from './pages/Home'
import styled from 'styled-components'

function App() {

  const Main = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #000;
  `

  return (
    <Main>
      <Home />
    </Main>
  )
}

export default App
