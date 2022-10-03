import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: ${p => p.theme.zIndices[2]};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 70%;
  width: 100%;
  max-height: 650px;
  transform: translate(-50%, -50%);
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii[4]};
  overflow: hidden;
`;
