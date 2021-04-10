import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, withPrefix, markdownify} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <div className="outer">
              <div className="inner-medium">
                <article className="post post-full">
                  <header className="post-header">
                    <h1 className="post-title">{_.get(this.props, 'page.frontmatter.title', null)}</h1>
                    {_.get(this.props, 'page.frontmatter.subtitle', null) && (
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'page.frontmatter.subtitle', null))}
                    </div>
                    )}
                  </header>
                  {_.get(this.props, 'page.frontmatter.image', null) && (
                  <div className="post-image">
                    <img src={withPrefix(_.get(this.props, 'page.frontmatter.image', null))} alt={_.get(this.props, 'page.frontmatter.image_alt', null)} />
                  </div>
                  )}
                  <div className="post-content" >
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdzflg_ixIMg2J6XsQXDKzy0Lv7kTIhzkgJ_V2tRIPAZ_QoIQ/viewform?embedded=true" width="640" height="983" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                  </div>
                </article>
              </div>
            </div>
            </Layout>
        );
    }
}
