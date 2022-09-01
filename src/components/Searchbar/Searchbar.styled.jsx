import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  position: relative;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  width: 300px;
  border-style: none;
  border-radius: ${p => p.theme.radii[4]};

  &:focus {
    outline: 2px solid ${p => p.theme.colors.focus};
  }
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 30px;
  height: 30px;
  color: ${p => p.theme.colors.mediumGrey};
  border-style: none;
  background-color: transparent;
  cursor: pointer;

  & > svg {
    fill: currentColor;
  }
`;
