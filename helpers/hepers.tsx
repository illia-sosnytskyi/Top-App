import CoursesIcon from '../public/courses.svg';
import ServisesIcon from '../public/services.svg';
import BooksIcon from '../public/books.svg';
import GoodsIcon from '../public/goods.svg';
import { TopLevelCategory } from '../interfaces/page.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Courses', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'servises', name: 'Servises', icon: <ServisesIcon />, id: TopLevelCategory.Courses },
  { route: 'books', name: 'Books', icon: <BooksIcon />, id: TopLevelCategory.Courses },
  { route: 'goods', name: 'Goods', icon: <GoodsIcon />, id: TopLevelCategory.Courses },
];
