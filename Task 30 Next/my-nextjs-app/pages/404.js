import Link from "next/link";
export default function Custom404() {
  return (
    <div class="text-center">
      <h1 class="text-9xl font-extrabold text-gray-800">404</h1>
      <p class="text-2xl md:text-3xl font-light leading-normal mb-4">
        Sorry, we couldn't find this page.
      </p>
      <Link
        href="/"
        class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
Custom404.getLayout = function pageLayout(page) {
  return <>{page}</>;
};
