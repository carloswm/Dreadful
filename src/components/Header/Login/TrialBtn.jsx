import styled from 'styled-components'

const TrialBtn = () => {

  const TrialBtn = styled.button`
    background-color: #c42521;
    color: #fff;
    border: 0;
    border-radius: 15px;
    padding: 4px 25px;
    margin-left: 15px;
    cursor: pointer;
  `
  const Span = styled.span`
    font-size: 14px;
    font-family: 'Prompt', sans-serif;
  `

  return (
    <TrialBtn>
      <Span>Star your free trial</Span>
    </TrialBtn>
  )
}

export default TrialBtn