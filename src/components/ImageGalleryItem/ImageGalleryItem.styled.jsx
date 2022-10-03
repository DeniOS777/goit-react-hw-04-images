import styled from 'styled-components';

export const ImageCard = styled.li`
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

  & img {
    transition: transform 400ms ease-in-out;

    &:hover {
      transform: scale(1.15);
    }
  }
`;

export const ImageWrap = styled.div`
  height: 218px;
  width: 100%;
  border-radius: ${p => p.theme.radii[4]};
  overflow: hidden;
`;
