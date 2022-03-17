import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Category from './Category/Index'
import movie from '../../assets/movies.png'
import serie from '../../assets/series.png'

const Index = () => {

  const Caterogies = styled.div`
    display: flex;
    justify-content: center;
  `

  return (
    <Caterogies>
      <Link to="/movies">
        <Category
          img={movie}
          title="Movies"
        />
      </Link>
      <Link to="/series">
        <Category
          img={serie}
          title="Series"
        />
      </Link>
    </Caterogies>
  )
}

export default Index