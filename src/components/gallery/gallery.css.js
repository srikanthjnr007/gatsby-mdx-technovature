import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates.js';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3.3rem;
  padding: 0 1rem;
  margin: 2rem 0;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
