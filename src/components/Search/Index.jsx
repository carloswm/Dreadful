import styled from 'styled-components'

const Index = () => {

  const MainSearch = styled.div`
    display: flex;
    justify-content: center;
    background-color: #c5201b;
  `

  const Input = styled.input`
    border-radius: 20px;
    border: 0;
    height: 30px;
    margin: 10px;
    width: 50%;
    &::placeholder {
      padding-left: 20px;
    }
    &::focus {
      padding-left: 20px;
    }
  `

  return (
    <MainSearch>
      <Input
        type="text"
        placeholder="Name"
      />
    </MainSearch>
  )
}

export default Index