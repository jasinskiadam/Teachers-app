import styled from 'styled-components';

export const Average = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme, value }) =>
    value >= 4
      ? theme.colors.success
      : value >= 3
      ? theme.colors.warning
      : value >= 1
      ? theme.colors.error
      : 'black'};
`;
