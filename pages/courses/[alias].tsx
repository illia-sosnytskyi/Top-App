import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';

import { WithLayout } from '../../latout/Layout';


function Course({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState(4);

  return (
    <>
      
    </>
  );
}

export default WithLayout(Course);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<CourseItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  const { data: page } = await axios.post<CourseItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory,
    }
  }

}

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
