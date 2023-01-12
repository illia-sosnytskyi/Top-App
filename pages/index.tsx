import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">
        Photoshop courses
      </Htag>

      <Button appearance="primary">
        Learn more
      </Button>

      <Button appearance="ghost">
        Read reviews
      </Button>
    </div>
  );
}
