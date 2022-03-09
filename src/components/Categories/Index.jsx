import styled from 'styled-components'
import Category from './Category'
import movie from '../../assets/movies.png'
import serie from '../../assets/series.png'

const Index = () => {

  const Caterogies = styled.div`
    display: flex;
    justify-content: center;
  `

  return (
    <Caterogies>
      <Category
        img={movie}
        title="Movies"
      />
      <Category
        img={serie}
        title="Series"
      />
    </Caterogies>
  )
}

export default Index