import styled from "@emotion/styled";

export const NavContainer = styled.section`
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
