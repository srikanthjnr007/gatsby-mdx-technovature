import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates.js';

export const Container = styled.div`
  display: grid;
  max-width: 100vw;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.2rem;
  padding: 0 0.5rem;
  margin: 0.5rem 0;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
