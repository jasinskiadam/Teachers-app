import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate';
import StudentsProvider from 'providers/StudentsProvider';
import AddStudent from './AddStudent';
import Dashboard from './Dashboard';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <StudentsProvider>
            <Wrapper>
              <Routes>
                <Route path="/add-student" element={<AddStudent />} />
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </Wrapper>
          </StudentsProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};
export default Root;
