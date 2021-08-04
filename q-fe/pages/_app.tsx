import '../styles/globals.scss';
import '../styles/tachyons-custom.scss';
import '@library/haloLib/style.css';

import { LayoutInit } from '@layouts/LayoutInit';
import { store } from '@redux/store';
import App, { AppContext, AppInitialProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';

const LayoutDefault: IComponent = ({ children }) => <>{children}</>;

const MyApp = ({ Component, pageProps }: { Component: IPageComponent; pageProps: any }) => {
  const Layout: IComponent = Component.Layout || LayoutDefault;
  return (
    <Provider store={store}>
      <RecoilRoot>
        <LayoutInit>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LayoutInit>
      </RecoilRoot>
    </Provider>
  );
};

/**
 * Initial props => getting and binding runtime ENV
 */
MyApp.getInitialProps = async (appContext: AppContext): Promise<AppInitialProps> => ({
  ...(await App.getInitialProps(appContext)),
});

export default MyApp;
