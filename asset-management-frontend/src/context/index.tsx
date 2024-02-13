import { createContext, useState } from 'react';
import { contextProviderValue, contextType } from '../types/sidebar';

export const PageContext = createContext<contextProviderValue>(
  {} as contextProviderValue
);

export const Context = ({ children }: contextType) => {
  const [page, setPage] = useState<string>('Home');
  const [subPage, setSubPage] = useState<string>('');
  const value: contextProviderValue = {
    page: page,
    setPage: setPage,
    subPage: subPage,
    setSubPage: setSubPage,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
