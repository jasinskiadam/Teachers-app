import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 25%;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
