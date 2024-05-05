import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import "./index.css"

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const Svg: React.ComponentType<React.ComponentProps<'svg'>> = require("@site/static/img/logo01-1.svg").default;
  return (
    <header className={clsx('hero hero--primary banner', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Svg className='logo'/>
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg processo-button"
            to="/docs/intro">
            Conheça o sistema!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className='features-container'>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}