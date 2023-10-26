import styled from "styled-components";

const AppStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 800px;
  margin: 0 auto;
  padding: 20px;

  .main {
    padding-top: 20px;
  }

  .title {
    text-align: center;
  }
`;

export default AppStyled;
