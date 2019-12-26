import * as React from 'react';
import useArticles from '../../hooks/useArticles';
import Spinner from '@atlaskit/spinner';
import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';
import { DARK_COLOR, SECONDARY_COLOR } from '../Theme';
import FullCircle from '../../resources/components/FullCircle';
import Dots from '../../resources/components/Dots';

const Wrapper = styled.div`
  min-height: 200px;
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;

  & > h1 {
    text-align: center;
    font-size: 60px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 80px;
    margin-bottom: 12px;
  }

  & > p {
    text-align: center;
    width: 30%;
    margin: auto auto 50px;
  }
`;

const ColWrapper = styled(Col)`
  & > div {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
    border-radius: 18px;
    color: #6d7783;
    height: 512px;
    background-size: cover;
    width: 100%;
    position: relative;

    & > .details {
      position: absolute;
      bottom: 20px;
      right: 20px;
      width: 80%;
      min-height: 250px;
      padding: 20px;
      background: #fff;
      text-align: right;

      & > span {
        font-size: 10px;
        color: #3873a6;
        text-transform: uppercase;
      }

      & > h1 {
        font-size: 16px;
        font-weight: bold;
        color: ${DARK_COLOR} !important;
        margin-bottom: 20px;
        margin-top: 10px !important;
      }
      & > p {
        font-size: 14px;
        font-weight: bold;
        color: #5b5c5d !important;
        margin-bottom: 20px;
      }
    }
  }
`;

const CircleWrapper = styled(FullCircle)`
  z-index: -2;
  position: absolute;
  bottom: -270px;
  right: -270px;
  animation: slide-in-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
`;
const DotWrapper = styled(Dots)`
  position: absolute;
  bottom: -162px;
  right: -157px;
  width: auto;
  z-index: -1;
  animation: flip-in-ver-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;
`;

const ArticleCard = ({ data }) => {
  return (
    <ColWrapper md={4}>
      <div style={{ background: `url(${data.image}) no-repeat top center`, backgroundSize: 'cover' }}>
        <div className="details">
          <span>{data.category}</span>
          <h1>{data.title}</h1>
          <p>{data.slogan}</p>
          <a href={`/article/${data.slug}`} aria-label={data.title}>
            Read more
          </a>
        </div>
      </div>
    </ColWrapper>
  );
};

const Articles = props => {
  const [data, loading] = useArticles(3);
  return (
    <Wrapper>
      <h1>Articles</h1>
      <p>
        In this section, I will include things that I have been studying or problems that I had to fix. The
        main goal is to share what I have learned.
      </p>
      <Row className="cards">
        {loading && (
          <Col xs={12} style={{ textAlign: 'center' }}>
            <Spinner invertColor={props.theme === 'dark'} size="large" />
          </Col>
        )}
        {!loading &&
          data.articles.length > 0 &&
          data.articles.map(article => <ArticleCard key={article.slug} data={article} />)}
      </Row>
      <CircleWrapper color={props.theme === 'dark' ? SECONDARY_COLOR : DARK_COLOR} />
      <DotWrapper theme={props.theme} />
    </Wrapper>
  );
};

export default Articles;
