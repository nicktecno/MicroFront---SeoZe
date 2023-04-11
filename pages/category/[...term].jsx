import dynamic from "next/dynamic";

const SearchMicro = dynamic(() => import("searchPage/searchPage"), {
  ssr: false,
});

export default function CategoryPage(props) {
  return <SearchMicro term={props?.term} routeUrl={props?.resolvedUrl} />;
}

export async function getServerSideProps({ params, resolvedUrl }) {
  const { term } = params;

  return {
    props: {
      term,
      resolvedUrl,
    },
  };
}
