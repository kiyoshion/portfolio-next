/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/Layout";

export default function Me() {
  return (
    <Layout>
      <div class='mt-24 mb-16'>
        <h1 class='text-4xl font-bold'>Kiyoshi Onoda</h1>
        <p class='text-xl mt-2'>Web Developer</p>
      </div>
      <div class='max-w-xl'>
        <p class='mb-4'>Hi there. I'm Kiyoshi Onoda from Japan. I'm a web developer mostly use PHP (Laravel, WordPress), JavaScript (Vue.js, React), HTML and CSS. I'm recently interested in React Native, so I try to develop a native application. I'll try my best.</p>
        <p>こんにちは。小野田清です。PHPやJavaScriptがメインのWebエンジニアです。最近はReact Nativeを勉強中で、ネイティブアプリの個人開発に挑戦しています。</p>
      </div>
    </Layout>
  );
}
