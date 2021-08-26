# idaproject-layout

## Запуск проекта

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## TODO
- [x]  создать проект на nuxt.js
- [x]  натянуть sass, использовать [css-modules](https://vue-loader.vuejs.org/guide/css-modules.html) или scoped
- [x]  каждый компонент должен являться [SFC](https://ru.vuejs.org/v2/guide/single-file-components.html)
- [x]  разработка задания в разных ветках по системе [git-flow](https://danielkummer.github.io/git-flow-cheatsheet/index.ru_RU.html)
- [x]  readme.md
- [x]  стилизация состояний взаимодействий (hover, active, focused) с элементами на свое усмотрение
- [x]  верстка ui компонентов
- [ ]  валидация для формы добавления товара
    - [x]  название - обязательное поле
    - [x]  ссылка на изображение товара - обязательное поле
    - [x]  цена - обязательное поле
    - [x]  кнопка добавления товара неактивна пока форма пуста или невалидна
    - [x]  добавление маски разделения тысячных пробелом для поля цены
    - [x]  разработка функционала добавления товара в общий список из формы
    - [ ]  верстка состояния удачного добавления товара в форме на свое усмотрение
    - [x]  анимация перехода состояний
    - [x]  анимация добавления товара в список
- [x]  удаления товара из списка
- [x]  анимация удаления товара
- [x]  сохранения списка товаров при перезагрузке страницы
- [x]  сортировка списка товаров
    - [x]  по цене min (от меньшего к большему)
    - [x]  по цене max (от большего к меньшему)
    - [x]  по наименованию
    - [ ]  по умолчанию
- [x]  анимация сортировки товара
- [ ]  добавление прелодера на странице для плавной инициализации списка
- [ ]  верстка адаптивной версии под мобильные устройства.

## UI
![idaproject-ui](https://i.ibb.co/GH2gzPW/Success-layout.png)

