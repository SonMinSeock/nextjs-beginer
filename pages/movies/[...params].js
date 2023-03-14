import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const [title, id] = params || [];

  return (
    <>
      <Seo title="Detail" />
      <h4>{title || "Loading..."}</h4>
    </>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
