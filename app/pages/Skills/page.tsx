"use client"
import Header from '@/app/components/Header';
import React from 'react';
import SkillItem from '@/app/components/SkillItem';

const page = ({ delay = 0 }) => {

  return (
    <div>
      <Header />
      <div className='text-center mb-16 tracking-widest font-bold'>
        <p className='text-6xl'>SKILLS</p>
        <span>スキル</span>
      </div>
      <div className='flex flex-wrap justify-between px-10 skill-container mb-12'>
        <SkillItem
          delay={0}
          bgColor={"bg-blue-900"}
          title={"HTML/CSS"}
          content={`HTMLとCSSの基礎に加えて、Tailwind CSSを使った効率的なWebページのレイアウト・デザインが可能です。
          レスポンシブデザインも対応可能です。`} />
        <SkillItem
          delay={0.1}
          bgColor={"bg-blue-200"}
          title={"Javascript"}
          content={`Javascriptを使った動的なWebアプリケーションの開発が可能です。
          React、jQueryなどの基本的なコードを書くことも可能です。`} />
        <SkillItem
          delay={0.2}
          bgColor={"bg-blue-900"}
          title={"WordPress"}
          content={`WordPressサイトの制作の経験があります。`} />
        <SkillItem
          delay={0.3}
          bgColor={"bg-blue-200"}
          title={"Adobe Illustrator"}
          content={`Adobe Illustratorを使ったイラストの作成の経験があります。`} />
        <SkillItem
          delay={0.4}
          bgColor={"bg-blue-900"}
          title={"Visual Studio Code"}
          content={`エディターはVS Codeを使用しています。`} />
      </div>
    </div>
  )
}

export default page