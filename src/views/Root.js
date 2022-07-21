import { GlobalStyle } from 'assets/styles/GlobalStyles';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <StudentsList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
