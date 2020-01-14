import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import { css } from 'styled-components'
import { styled } from "../theme"
import Button from "../components/Button";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
        <GreatButton>OK</GreatButton>
        <Button intent="primary">Do something</Button>
        <HugeButton intent="secondary">Do something else</HugeButton>
      </p>
    </Layout>
  )
}

const bigFont = css`
  font-size: 30px;
`

const GreatButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  ${bigFont}
  &:hover {
    background: lightblue;
  }
`

const HugeButton = styled(Button)`
  font-size: 50px;
`

export default IndexPage
