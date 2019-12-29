import * as React from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import { Col, Grid } from 'react-flexbox-grid';
import { MenuBar } from './__styles__';
import Header from '../components/Header';
import Contact from '../components/Contact';
import NotFoundIcon from '../resources/components/NotFoundIcon';
import Button from '../components/Common/Button';
import ContentErrorStateView from '../components/Common/ContentErrorStateView';

const NotFound = ({ theme }) => {
  return (
    <Grid>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Header theme={theme}>
        <MenuBar theme={theme} />
      </Header>

      <ContentErrorStateView>
        <Col md={12}>
          <h1>Page Not Found</h1>
          <NotFoundIcon size="40em" />
          <Button href="/">Go Home</Button>
        </Col>
      </ContentErrorStateView>

      <Contact theme={theme} />
    </Grid>
  );
};

export default NotFound;
