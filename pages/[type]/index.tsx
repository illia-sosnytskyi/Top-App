import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { firstLevelMenu } from '../../helpers/hepers';
import { MenuItem } from '../../interfaces/menu.interface'
import { WithLayout } from '../../latout/Layout';

function Type() {
  return (
    <>
      Type
    </>
  )
}

export default WithLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(m => '/' + m.route),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory,
    }
  };
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
