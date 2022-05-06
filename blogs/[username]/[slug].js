// same project a 2ta alada file er same name dici cz era different derectory te asey

import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  console.log(router);

  // with destructuring
  /* const { query } = useRouter();
  console.log(query); */

  // V.V.I. ei [slug].js file ta, blogs/[username] er vitore ase, so ei file, ek e sathe dynamic [username] er value & dynamic [slug] er value pabe

  return (
    <>
      <h1>My name is { router.query.username } and this post is { router.query.slug }</h1>
      {/* with destructuring */}
      {/* <h1>Single Product Details Page of { query.slug }</h1> */}
    </>
  );
}
 
export default Slug;