import axios from "axios";
import { GetStaticProps } from "next";
import { MenuItem } from "../interfaces/menu.interface";
import { WithLayout } from "../latout/Layout";

function Search() {
  return (
    <>
      Search
    </>
  )
}

export default WithLayout(Search);

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
  };
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
