import { useRouter } from "next/router";

const Pid = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Post: {pid}</p>;
};

export default Pid;
