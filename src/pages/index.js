/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div>
        <p>Hello. This is a web developer's protfolio.</p>
      </div>
      <div></div>
    </Layout>
  )
}
