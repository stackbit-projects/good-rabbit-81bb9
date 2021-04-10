import React from 'react';
import _ from 'lodash';

import Action from './Action';

export default class FooterNav extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="cell widget widget-nav">
              {_.get(section, 'title', null) && (
              <h2 className="widget-title">{_.get(section, 'title', null)}</h2>
              )}
              {_.get(section, 'nav_links', null) && (
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.677137159693!2d84.38041601502943!3d26.17464238345103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992fbda74189493%3A0x38df1d153c23a1ab!2sExcellent%20Industrial%20Training%20Institute!5e0!3m2!1sen!2sin!4v1618087069778!5m2!1sen!2sin" width="400" height="300" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              )}
            </section>
        );
    }
}
