import styled from 'styled-components';

export const LoadMore = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10px 25px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  border-style: none;
  border-radius: ${p => p.theme.radii[4]};
  transition: background-color 250ms ease-in-out, transform 100ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.blueHover};
  }

  &:active {
    transform: scaleX(0.98);
  }
`;
