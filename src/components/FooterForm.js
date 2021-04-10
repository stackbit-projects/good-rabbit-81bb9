import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';
import FormField from './FormField';

export default class FooterForm extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="cell widget widget-form">
              {_.get(section, 'title', null) && (
              <h2 className="widget-title">{_.get(section, 'title', null)}</h2>
              )}
              {markdownify(_.get(section, 'content', null))}
              <form name={_.get(section, 'form_id', null)} id={_.get(section, 'form_id', null)} {...(_.get(section, 'form_action', null) ? ({action: _.get(section, 'form_action', null)}) : null)} method="POST" data-netlify="true"
                data-netlify-honeypot={_.get(section, 'form_id', null) + '-bot-field'}>
                <div className="screen-reader-text">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.677137159693!2d84.38041601502943!3d26.17464238345103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992fbda74189493%3A0x38df1d153c23a1ab!2sExcellent%20Industrial%20Training%20Institute!5e0!3m2!1sen!2sin!4v1618087069778!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

                </div>
                <input aria-labelledby={_.get(section, 'form_id', null) + '-honeypot-label'} type="hidden" name="form-name"
                  value={_.get(section, 'form_id', null)} />
                {_.map(_.get(section, 'form_fields', null), (field, field_idx) => (
                <div key={field_idx} className="form-row">
                  <FormField {...this.props} field={field} />
                </div>
                ))}
                <div className="form-row">
                  <button type="submit" className="button">{_.get(section, 'submit_label', null)}</button>
                </div>
              </form>
            </section>
        );
    }
}
