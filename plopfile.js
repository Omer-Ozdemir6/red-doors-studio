module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Modüler React bileşeni ve stil dosyası üretir',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Bileşen (Component) adı nedir? (Örn: VideoModal):',
      },
    ],
    actions: [
      // 1. JSX Dosyasını Oluştur
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.jsx',
        template: `import React from 'react';
import './styles.scss';

export default function {{pascalCase name}}() {
  return (
    <div className="{{dashCase name}}-container">
      <h2>{{pascalCase name}} Aktif</h2>
    </div>
  );
}
`,
      },
      // 2. SCSS Dosyasını Oluştur
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/styles.scss',
        template: `.{{dashCase name}}-container {
  // Mill3 / Outlast tarzı karanlık taban
  background-color: #050505;
  color: #e5e5e5;
}
`,
      },
    ],
  });
};