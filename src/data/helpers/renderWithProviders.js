import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import StudentsProvider from 'providers/StudentsProvider';

export const renderWithProviders = (childern) => {
  return render(
    <ThemeProvider theme={theme}>
      <StudentsProvider>{childern}</StudentsProvider>
    </ThemeProvider>
  );
};
