import styled from "styled-components"

const Index = () => {

  const List = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-column-gap: 15px;
    margin: 5px 0;
    padding: 0;
    list-style-type: none;
  `

  const Links = styled.a`
    font-size: 14px;
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `

  return (
    <div>
      <List>
        <li>
          <Links href="#">Home</Links>
        </li>
        <li>
          <Links href="#">Terms of Use</Links>
        </li>
        <li>
          <Links href="#">Legal Notice</Links>
        </li>
        <li>
          <Links href="#">Help</Links>
        </li>
        <li>
          <Links href="#">Manage Account</Links>
        </li>
      </List>
    </div>
  )
}

export default Index