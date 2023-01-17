import cn from 'classnames';
import { format } from 'date-fns';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem } from '../../interfaces/menu.interface';
import styles from './Menu.module.css';
import CoursesIcon from '../public/courses.svg';
import ServisesIcon from '../public/servises.svg';
import BooksIcon from '../public/books.svg';
import GoodsIcon from '../public/goods.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Courses', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'servises', name: 'Servises', icon: <ServisesIcon />, id: TopLevelCategory.Courses },
  { route: 'books', name: 'Books', icon: <BooksIcon />, id: TopLevelCategory.Courses },
  { route: 'goods', name: 'Goods', icon: <GoodsIcon />, id: TopLevelCategory.Courses },
];

export const Menu = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(menu => (
          <div key={menu.route}>
            <a href={`/${menu.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: menu.id === firstCategory,
              })}>
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
            { menu.id === firstCategory && buildSecondLevel() }
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = () => {
    return (
      <div>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>
              {m._id.secondCategory}
            </div>

            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened
            })}>
              {buildThirdLevel}
            </div>
          </div>
        ))}
      </div>
    )
  };

  const buildThirdLevel = () => {
    
  };

  return(
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};
