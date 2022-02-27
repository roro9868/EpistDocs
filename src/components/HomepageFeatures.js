import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Democratizing Knowledge Economy',
    Svg: require('../../static/img/lightbulb-2223050.svg').default,
    description: (
      <>
        Your go-to place for knowledge crowdsourcing
      </>
    ),
  },
  {
    title: 'Answer to Earn',
    Svg: require('../../static/img/money-4311572.svg').default,
    description: (
      <>
        Get rewarded for your knowledge contribution
      </>
    ),
  },
  {
    title: 'Community First',
    Svg: require('../../static/img/people-3245739.svg').default,
    description: (
      <>
        100% of fees go towards platform operations and EPI stakers
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row padding-top--lg">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
