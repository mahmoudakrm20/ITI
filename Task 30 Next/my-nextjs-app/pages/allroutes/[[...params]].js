import { useRouter } from "next/router";
import Head from "next/head";

const Params = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  return (
    <div className="container mx-auto mt-8">
      <Head>
        <title>Params Page</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Params</h1>
      {params.length === 0 ? (
        <p className="text-lg">No params</p>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-2">Params:</h2>
          <ul className="list-disc pl-4">
            {params.map((param, index) => (
              <li key={index} className="text-lg">
                {param}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Params;
