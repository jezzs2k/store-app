import React from 'react';

import {AppText} from '../AppText/index';

const ErrorMessage = ({error, visible}: any) => {
  if (!error || !visible) {
    return null;
  }
  return <AppText style={{color: 'red', fontSize: 15}}>{error}</AppText>;
};

export default ErrorMessage;
