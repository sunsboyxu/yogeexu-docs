import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Docusaurus 2.0 正式发布',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus 是一款静态站点生成器，提供了开箱即用的文档功能，会帮助你在极短时间内搭建漂亮的文档网站，也可用于搭建各种网站（个人网站、产品、博客、营销主页，等等）。
      </>
    ),
  },
  {
    title: '大前端时代核心技术',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        大前端会成为移动开发与Web前端的发展趋势，大前端将做的而不仅仅只是Web页开发，面终端开发、工程化、Severless、Lowcode
      </>
    ),
  },
  {
    title: '代码+喝茶+吉他',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        淡泊的生活，如水的日子，若能忙里偷闲捧得一杯清茶在手，于纷纷扰扰的尘世里，就会生出些许淡定和从容，抵拒着尘世浮躁，品味着人生苦短，固守着清心寡欲，凝心静气里，自有一番温润而绵长的快乐，在手里在心间
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
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
        <div className={styles.buttons} style={{ display: 'flex', justifyContent: 'center', marginTop: '10rem' }}>
          <Link className="button button--primary button--lg" to="/docs/intro" style={{ color: 'white' }}>
            阅读文档
          </Link>
        </div>
      </div>
    </section>
  )
}
