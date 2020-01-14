import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import { styled } from '../theme';
import { css } from '@emotion/core';
import Button from '../components/Button';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <Container>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Button intent="primary">OK</Button>
        <Button intent="danger">Cancel</Button>
      </Container>
    </Layout>
  )
}

const size = 40;

const bigFont = css`
  font-weight: bold;
  font-size: 80px;
`;
const Container = styled.p`
  font-size: ${size}px;
  ${bigFont}
`;

//const DivContainer = Container.withComponent('div');

export default IndexPage;