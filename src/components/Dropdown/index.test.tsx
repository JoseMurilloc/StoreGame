import '@testing-library/jest-dom/extend-expect';

import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Dropdown } from '.';
import { theme } from '../../styles';

const options = [
  'Mais popular',
  'Preço: baixo a alto',
  'Preço: alto a baixo',
  'Ordenar A-Z',
  'Ordenar Z-A',
];

describe('<Dropdrown />', () => {
  it('should is render on component options open correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Dropdown games={[]} setGames={() => null} />
      </ThemeProvider>,
    );

    options.map((option) => (
      expect(screen.queryByText(option)).not.toBeInTheDocument()
    ));
  });
});
