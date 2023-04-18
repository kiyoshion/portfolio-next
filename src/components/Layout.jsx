import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main class='min-h-screen mt-16 mx-auto max-w-5xl'>
        {children}
      </main>
    </div>
  );
}
