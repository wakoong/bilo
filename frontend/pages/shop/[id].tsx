import * as React from "react";
import { useRouter } from "next/router";

const Item = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>individual item: {id}</div>;
};

export default Item;
