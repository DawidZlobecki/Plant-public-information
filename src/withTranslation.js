import React from 'react';
import {withTranslation as withTranslationReactI18next} from 'react-i18next';

export const withTranslation =
  (namespace = 'translation') =>
  WrappedComponent => {
    const TranslatedComponent =
      withTranslationReactI18next(namespace)(WrappedComponent);

    return props => <TranslatedComponent {...props} />;
  };
