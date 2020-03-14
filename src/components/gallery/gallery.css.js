import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates.js';

export const Container = styled.div`
  display: grid;
  width: 80% ;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.2rem;
  margin-left: -5%;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
