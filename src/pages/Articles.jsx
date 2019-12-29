import * as React from 'react';
import styled from 'styled-components';
import useArticles from '../hooks/useArticles';
import { Helmet } from 'react-helmet/es/Helmet';
import LoadingView from '../components/Common/LoadingView';
import { Background, ContentTitle, MenuBar } from './__styles__';
import Header from '../components/Header';
import { Grid, Row } from 'react-flexbox-grid';
import Contact from '../components/Contact';
import { ArticleCard } from '../components/Articles';
import { BreadcrumbsItem, BreadcrumbsStateless } from '@atlaskit/breadcrumbs';
import { media } from '../components/Common/media';
import useWindowSize from '../hooks/useWindowSize';

const WrapperContent = styled.div`
  margin-bottom: 300px;
  width: 80%;

  @media only screen and (max-width: ${media.mobile}) {
    width: 100%;
    padding-top: 30px;
  }

  & > div {
    margin-bottom: 20px;
  }
`;

const Articles = ({ theme }) => {
  const [data, loading] = useArticles();
  const size = useWindowSize();

  return (
    <Grid>
      <Helmet>
        <title>Articles</title>
      </Helmet>
      {loading && <LoadingView theme={theme} />}
      <Header theme={theme}>
        <MenuBar theme={theme} />
        <Background size={300} theme={theme} />
        <ContentTitle theme={theme}>
          <h1>Articles</h1>
          <p>
            In this section, I will include things that I have been studying or problems that I had to fix.
            The main goal is to share what I have learned.
          </p>
        </ContentTitle>
      </Header>

      <WrapperContent>
        <BreadcrumbsStateless>
          <BreadcrumbsItem href="/" text="Home" />
          <BreadcrumbsItem href="/articles" text="Articles" />
        </BreadcrumbsStateless>

        <Row>
          {data.articles.length > 0 &&
            data.articles.map(article => (
              <ArticleCard mini={size.isMobile} key={article.slug} data={article} />
            ))}
        </Row>
      </WrapperContent>

      <Contact theme={theme} />
    </Grid>
  );
};

export default Articles;
