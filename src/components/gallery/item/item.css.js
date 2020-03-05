import styled from 'styled-components';
import MEDIA from '../../../helpers/mediaTemplates.js';

export const Title = styled.span`
  display: block;
  font-family: "georgia", sans-serif;
  font-size: 2rem;
  line-height: 1.0;
  font-weight: 500;
  margin: 2rem 2rem 1rem 0rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0rem 1rem 2rem 0rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
