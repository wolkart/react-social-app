import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import SocialApp from "./App";

test('renders learn react link', () => {
  render(<SocialApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SocialApp />, div)
  ReactDOM.unmountComponentAtNode(div)
})
