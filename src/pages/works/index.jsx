import Layout from '@/components/Layout';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export const getStaticProps = () => {
  const files = fs.readdirSync('src/pages/works/data');
  const works = files.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');
    const fileContent = fs.readFileSync(`src/pages/works/data/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    console.log(data)

    return {
      id,
      meta: data,
    };
  });

  return {
    props: {
      works,
    },
  };
};

export default function Works({ works }) {
  return (
    <Layout
    >
      <div className='max-w-7xl mx-auto p-4 text-sm flex flex-col'>
        <h1>Works</h1>
      </div>
      <div className='max-w-7xl mx-auto p-4 text-sm flex'>
        {works.map((work) => (
          <Link href={`/works/${work.id}`} key={work.id}>
            <h2>{work.meta.title}</h2>
          </Link>
        ))}
      </div>
    </Layout>
  )
}


