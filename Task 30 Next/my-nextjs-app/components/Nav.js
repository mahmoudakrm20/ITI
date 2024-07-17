import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
export default function nav() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <div className="navbar bg-gray-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/users">SSG</Link>
            </li>
            <li>
              <details>
                <summary>SSR</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/usersSSR/1">ID 1</Link>
                  </li>
                  <li>
                    <Link href="/usersSSR/2">ID 2</Link>
                  </li>
                  <li>
                    <Link href="/usersSSR/3">ID 3</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/dashboard">SWR</Link>
            </li>
          </ul>
        </div>
        {!session && (
          <div className="navbar-end">
            <Link
              className="p-3 px-6 rounded-md bg-gray-300"
              href="api/auth/signin"
            >
              Login
            </Link>
          </div>
        )}

        {session && (
          <div className="navbar-end">
            <button
              className="p-3 px-6 rounded-md bg-gray-300"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
