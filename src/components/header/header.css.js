import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  background-color: white;
  z-index:9999;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;
    font-family: montserrat, 'sans-serif';

    &:hover {
      color: inherit;
    }
  }
`;
