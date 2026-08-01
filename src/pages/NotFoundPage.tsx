import { Link } from "react-router";
export function NotFoundPage() { return <main className="container-shell grid min-h-[70vh] place-items-center text-center"><div><p className="eyebrow">404</p><h1 className="mt-4 text-5xl font-black">Page not found.</h1><Link className="focus-ring mt-6 inline-block text-brand-soft" to="/">Return home →</Link></div></main>; }
