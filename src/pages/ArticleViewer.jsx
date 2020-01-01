/*global hljs*/

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Lozenge from '@atlaskit/lozenge';
import { BreadcrumbsItem, BreadcrumbsStateless } from '@atlaskit/breadcrumbs';
import { Redirect, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet/es/Helmet';
import useArticle from '../hooks/useArticle';
import Header from '../components/Header';
import { Grid } from 'react-flexbox-grid';
import Contact from '../components/Contact';
import { Background, ContentTitle, ImageArticle, MarkdownContent, MenuBar } from './__styles__';
import LoadingView from '../components/Common/LoadingView';
import Articles from '../components/Articles';
import Button from '../components/Common/Button';

const ArticleViewer = ({ theme }) => {
  const { slug } = useParams();
  const [article, loading] = useArticle(slug);

  document.querySelectorAll('code').forEach(block => {
    hljs.highlightBlock(block);
  });

  return (
    <Grid>
      <Helmet>
        <title>{article?.definition?.title}</title>
        <meta name="description" content={article?.definition?.slogan} />
      </Helmet>
      {loading && <LoadingView theme={theme} />}

      {(article.content && article?.content?.indexOf('<!DOCTYPE html>')) >= 0 && <Redirect to="/not-found" />}

      <Header theme={theme}>
        <MenuBar theme={theme} />
        <Background theme={theme} />
        <ContentTitle theme={theme}>
          <h1>{article?.definition?.title}</h1>
          <p>
            {article?.definition?.slogan?.length > 191
              ? article?.definition?.slogan.substring(0, 191) + '...'
              : article?.definition?.slogan}
          </p>
          <Button href="/articles" style={{ width: 110, marginTop: 25 }}>
            Go Back
          </Button>
        </ContentTitle>
      </Header>
      <MarkdownContent theme={theme} md={10}>
        <BreadcrumbsStateless>
          <BreadcrumbsItem href="/" text="Home" />
          <BreadcrumbsItem href="/articles" text="Articles" />
          <BreadcrumbsItem href={`/article/${slug}`} text={article?.definition?.title} />
        </BreadcrumbsStateless>
        {article?.definition?.image && <ImageArticle image={article?.definition.image} />}
        {article?.definition?.category && (
          <Lozenge appearance="inprogress" isBold>
            {article?.definition?.category}
          </Lozenge>
        )}
        <ReactMarkdown source={article?.content} />
        <div id="commento" />
      </MarkdownContent>
      {article?.related?.length >= 3 && (
        <Articles
          style={{ marginBottom: 300 }}
          title="Related Articles"
          mini={true}
          theme={theme}
          data={article.related}
          loading={loading}
        />
      )}
      <Contact theme={theme} />
    </Grid>
  );
};

export default ArticleViewer;
