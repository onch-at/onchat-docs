import clsx from 'clsx';
import React from 'react';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '小巧精美',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        没有五花八门的功能，专注于在线社交聊天。
      </>
    ),
  },
  {
    title: '移动优先',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        用户界面专为移动设备设计，交互体验良好。
      </>
    ),
  },
  {
    title: '渐进式',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        与普通 Web App 相比，PWA 更快、功能更强大、更可靠且可安装。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
