import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import Link from 'next/link';
import cn from 'classnames';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import styles from './Menu.module.css';
import CoursesIcon from '../../public/courses.svg';
import ServisesIcon from '../../public/services.svg';
import BooksIcon from '../../public/books.svg';
import GoodsIcon from '../../public/goods.svg';
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
            <Link href={`/${menu.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: menu.id === firstCategory,
              })}>
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </Link>
            { menu.id === firstCategory && buildSecondLevel(menu) }
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>
              {m._id.secondCategory}
            </div>

            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened
            })}>
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(p => (
          <Link
          key={p._id}
          href={`/${route}/${p.alias}`}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: false,
          })}
          >
            {p.category}
          </Link>
      ))
    );
  };

  return(
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};
