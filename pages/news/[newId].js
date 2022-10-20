import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const id = router.query.newId;

  return <h1>{id}</h1>;
}

export default DetailPage;
