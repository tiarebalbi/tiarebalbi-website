import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

const ContentErrorStateView = styled(Row)`
  text-align: center;
  justify-content: center;
  margin-bottom: 200px;

  & > div {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;

    h1,
    svg {
      margin-bottom: 20px;
    }
  }
`;

export default ContentErrorStateView;
