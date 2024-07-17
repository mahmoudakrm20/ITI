import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Index from "./comments";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();

  if (Component.getLayout) {
    return <Component {...pageProps} />;
  }
  return (
    <>
      <SessionProvider session={session}>
        <Nav></Nav>
        <Component {...pageProps} />
        {router.pathname === "/" && <Index />}
      </SessionProvider>
    </>
  );
}
