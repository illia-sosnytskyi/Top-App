import { useEffect, useState } from 'react';
import { Button, Htag, Paragraph } from '../components';
import { Tag } from '../components/Tag/Tag';
import { Rating } from '../components/Rating/Rating';
import { WithLayout } from '../latout/Layout';

function Home(): JSX.Element {
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
    </>
  );
}

export default WithLayout(Home);