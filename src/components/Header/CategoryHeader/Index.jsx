import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CategoryBtn from './CategoryBtn/Index'
import Filter from './Filter/Index'
import iconMovies from '../../../assets/icon-movies.png'
import iconSeries from '../../../assets/icon-series.png'
import iconFilter from '../../../assets/icon-filter.png'

const Index = () => {

  const StyledLink = styled(Link)`
    text-decoration: none;
  `

  const Container = styled.div`
    display: flex;
    padding-left: 20px;
  `

  return (
    <>
      <Container>
        <StyledLink to="/movies">
          <CategoryBtn
            icon={ iconMovies }
            title="Movies"
          />
        </StyledLink>
        <StyledLink to="/series">
          <CategoryBtn
            icon={ iconSeries }
            title="Series"
          />
        </StyledLink>
      </Container>
      <Filter
        icon={ iconFilter }
        title="Filters"
      />
    </>
  )
}

export default Index