import React,{ useState, useEffect } from 'react'
import styled from 'styled-components'
import useFullPageLoader from '../../hooks/useFullPageLoader'

const Card = () => {

  const Card = styled.div`
    position: relative;
    &:hover {
      .description  {
        height: 170px;
        overflow: hidden;
      }
      .sinopsys {
        display: block;
      }
    }
  `

  const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `

  const DespContainer = styled.div`
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    padding: 15px 10px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  `

  const Title = styled.span`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  `

  const Description = styled.span`
    display: none;
    color: #fff;
    font-size: 14px;
  `

  const [ list, setList ] = useState([])
  const [ loader, showLoader, hideLoader ] = useFullPageLoader()

  const fetchList = async() => {
    try {
      showLoader()
      const res = await fetch( 'https://kitsu.io/api/edge/anime/' )
      const { data } = await res.json()
      hideLoader()
      setList(data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      {list.map( item =>
        <Card>
          <Img src={item.attributes.posterImage?.small} alt={item.attributes?.canonicalTitle} />
          <DespContainer className="description">
            <Title>{ item.attributes?.canonicalTitle}</Title>
            <Description className="sinopsys">{ item.attributes?.synopsis}</Description>
          </DespContainer>
        </Card>
        )
      }
      { loader }
    </>
  )
}

export default Card