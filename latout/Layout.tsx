import { FunctionComponent } from 'react';

import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { AppContextProvider, IAppContext } from './../context/app.context';

const Layout = ({ children }: LayoutProps) => {
  return(
    <div className={styles.wrapper}>
      <Header className={styles.header}/>
        <Sidebar className={styles.sidebar}/>
        <div className={styles.body}>
          {children}
        </div>
      <Footer className={styles.footer}/>
    </div>
  );
};

export const WithLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent (props: T) {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  }
};
