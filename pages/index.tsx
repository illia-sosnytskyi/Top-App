import { Button, Htag, Paragraph } from '../components';
import { Tag } from '../components/Tag/Tag';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">
        Photoshop courses
      </Htag>

      <Button appearance="primary">
        Learn more
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

      <Paragraph type='comment'>
        Students will master not only the hard skills needed to work as a web designer, but also soft skills — skills that will allow them to effectively interact in a team with managers, developers, and marketers. Faculty graduates can successfully compete with middle level web designers.
      </Paragraph>

      <Paragraph type='advantages'>
        Students will master not only the hard skills needed to work as a web designer, but also soft skills — skills that will allow them to effectively interact in a team with managers, developers, and marketers. Faculty graduates can successfully compete with middle level web designers.
      </Paragraph>

      <Tag size='s' color='green' href='google.com'>
        Photoshop
      </Tag>

      <Tag size='m' color='red' href='youtube.com'>
        Youtube
      </Tag>

      <Tag size='s' color='primary'>
        Primary
      </Tag>

      <Tag size='s' color='ghost'>
        Primary
      </Tag>

      <Tag size='m' color='ghost'>
        Primary
      </Tag>
    </div>
  );
}
