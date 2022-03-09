import styled from 'styled-components'
import loginicon from '../../../assets/icon-login.png'

const LoginBtn = () => {

  const LoginBtn = styled.button`
    display: flex;
    align-items: center;
    color: #fff;
    background-color: transparent;
    border: 0;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    padding: 5px 10px;
    cursor: pointer;
  `

  const Span = styled.span`
    font-size: 14px;
    font-family: 'Prompt', sans-serif;
    padding-right: 10px;
    `

  return (
    <LoginBtn>
      <Span>Login</Span>
      <img src={loginicon} alt="login icon" />
    </LoginBtn>
  )
}

export default LoginBtn