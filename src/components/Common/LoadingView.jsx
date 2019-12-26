import * as React from 'react';
import Spinner from '@atlaskit/spinner';
import Logo from '../Header/Logo';
import { LoadingWrapper } from '../../pages/__styles__';

const LoadingView = ({ theme }) => (
  <LoadingWrapper theme={theme}>
    <Logo theme={theme} width={100} height={90} />
    <Spinner invertColor={theme !== 'light'} size="xlarge" />
  </LoadingWrapper>
);

export default LoadingView;
