import '@animxyz/core';

import I18nProvider from 'next-translate/I18nProvider'
import { Provider } from 'react-redux';
import { store } from '../states/redux/store';
import common from '../locales/vi/common.json';
import { RecoilRoot } from 'recoil';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
};

function ThemeWrapper(props) {
  return (
    <I18nProvider lang="en" namespaces={{ common }}>
      <Provider store={store}>
        <RecoilRoot>
          {props.children}
        </RecoilRoot>
      </Provider>
    </I18nProvider>
  );
}

export const decorators = [(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
