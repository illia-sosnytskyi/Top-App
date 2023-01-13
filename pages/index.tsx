import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Htag, Paragraph } from '../components';
import { Tag } from '../components/Tag/Tag';
import { Rating } from '../components/Rating/Rating';
import { WithLayout } from '../latout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState(4);
  return (
    <>
      <Htag tag="h1">
        Photoshop courses
      </Htag>

      <Button appearance="primary">
        Add one
      </Button>

      <Button
        appearance="ghost"
        arrow='right'
      >
        Read reviews
      </Button>

      <Paragraph type='default'>
        Students will master not only the hard skills needed to work as a web designer, but also soft skills — skills that will allow them to effectively interact in a team with managers, developers, and marketers. Faculty graduates can successfully compete with middle level web designers.
      </Paragraph>

      <Tag size='s' color='green' href='google.com'>
        Photoshop
      </Tag>

      <Rating
        isEditable
        rating={rating}
        setRating={setRating}
      />

      {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
    </>
  );
}

export default WithLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory,
    }
  }

}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
