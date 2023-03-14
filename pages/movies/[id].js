import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const {
    query: { title },
  } = router;

  return <h4>{title || "Loading..."}</h4>;
}
