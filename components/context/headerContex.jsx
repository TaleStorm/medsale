import React, { ReactNode, useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';
import { string } from 'prop-types';

const HeaderContext = React.createContext({
  currentHeading: 'Направления',
  setCurrentHeading: (arg) => {},
});

const HeaderContextProvider = ({ children }) => {
  const [currentHeading, setCurrentHeading] = useState('Направления');

  return (
    <HeaderContext.Provider
      value={{
        currentHeading,
        setCurrentHeading,
      }}
    >
      <ConfigProvider locale={ruRU}>{children}</ConfigProvider>
    </HeaderContext.Provider>
  );
};

export default HeaderContext;

export { HeaderContextProvider };
