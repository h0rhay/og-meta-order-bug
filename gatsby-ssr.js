import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()

  headComponents.sort((x, y) => {
    if (x.props && x.props["data-react-helmet"]) {
      return -1
    } else if (y.props && y.props["data-react-helmet"]) {
      return 1
    }
    return 0
  })

  replaceHeadComponents(headComponents)
}
