import React from 'react';
// import clsx from 'clsx';
import Layout from '@theme/Layout';
// import Link from './../../@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import styles from './../index.module.css';
import TeamMember from './member';
// import config from './config.json';
const config = require("./config.json");

export default function Team() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <div className='hero hero--primary'>
        <div className='container'>
          <div className='text--center margin-bottom--lg'>
            <h1 className='hero__title margin--none'>Epist Team</h1>
          </div>
          <div className='row'>
            {config &&
              config.map((props, idx) => <TeamMember key={idx} {...props} />)}
          </div>
        </div>
      </div>
    </Layout>
  );
}