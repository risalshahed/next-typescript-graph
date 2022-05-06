import { useRouter } from "next/router";

const Slug = () => {
  /* const router = useRouter();
  console.log(router.query); */

  // with destructuring
  const { query } = useRouter();
  console.log(query);

  return (
    <>
      {/* <h1>Single Product Details Page of { router.query.slug }</h1> */}
      {/* with destructuring */}
      <h1>Single Product Details Page of { query.slug }</h1>
      <h1>Single Product Details Page of { parseFloat(query.slug) + 10 }</h1>
    </>
  );
}
 
export default Slug;