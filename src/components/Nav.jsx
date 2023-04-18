import Link from "next/link";

export default function Nav() {
  return (
    <nav class='fixed top-0 left-0 w-full mx-auto'>
      <div class='flex justify-between align-center w-full mx-auto px-4 py-4'>
        <div>
          <Link href='/' class='p-4'>Kiyoshi Onoda</Link>
        </div>
        <div>
          <Link href='/works' class='p-4'>works</Link>
          <Link href='/me' class='p-4'>me</Link>
        </div>
      </div>
    </nav>
  );
}
