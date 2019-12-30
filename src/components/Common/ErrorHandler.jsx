import * as React from 'react';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import Flag, { FlagGroup } from '@atlaskit/flag';
import { Col, Grid } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet/es/Helmet';
import { MenuBar } from '../../pages/__styles__';
import Header from '../Header';
import Button from './Button';
import Contact from '../Contact';
import ContentErrorStateView from './ContentErrorStateView';
import ServerDownIcon from '../../resources/components/ServerDownIcon';

const ErrorDetails = ({ error, theme }) => (
  <Grid>
    <Helmet>
      <title>Ops! Something went wrong...</title>
    </Helmet>
    {error && (
      <FlagGroup>
        <Flag
          appearance="error"
          icon={<ErrorIcon label="Error" secondaryColor="#DE350B" />}
          id="error"
          key="error"
          title="Ops! Something went wrong..."
          description={error.message}
        />
      </FlagGroup>
    )}
    <Header theme={theme}>
      <MenuBar theme={theme} />
    </Header>

    <ContentErrorStateView>
      <Col md={12}>
        <h1>Internal Error</h1>
        <ServerDownIcon size="40em" />
        <Button href="/">Go Home</Button>
      </Col>
    </ContentErrorStateView>

    <Contact theme={theme} />
  </Grid>
);

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    const { error } = this.state;
    const { theme } = this.props;

    return (
      <div>
        {error && <ErrorDetails error={error} theme={theme} />}
        {!error && this.props.children}
      </div>
    );
  }
}
