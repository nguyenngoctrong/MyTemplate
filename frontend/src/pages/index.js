import React from 'react';
import PropTypes from 'prop-types';

import Home from 'containers/Home';
import { withTranslation } from 'utils/with-i18next';
import { getShowcases } from 'containers/Home/actions';
import reducer from 'containers/Home/reducer';
import saga from 'containers/Home/saga';

const key = 'showcases';
export class IndexPage extends React.PureComponent {
  render() {
    const { t } = this.props;

    return <Home t={t} />;
  }
}

IndexPage.propTypes = {
  t: PropTypes.func,
};

IndexPage.getInitialProps = async ({ store }) => {
  console.log(store);
  return {
    namespacesRequired: ['common', 'banner', 'features'],
  };
};

export default withTranslation('common')(IndexPage);
