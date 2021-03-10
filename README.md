# forum-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 依赖构建
npm install --save axios
npm i element-ui -S

Markdown编辑器插件
cnpm install mavon-editor --save
在main.js中引用
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
Vue.use(mavonEditor)

Markdown文档解析渲染插件
cnpm install markdown-it --save
cnpm install github-markdown-css --save
在页面引入css样式
import "github-markdown-css"

安装fontAwesome图标依赖
cnpm install font-awesome --save
在main.js中引入fontAwesome图标依赖
import 'font-awesome/css/font-awesome.css';
使用图标
<i class="fa fa-address-book-o" aria-hidden="true"></i>


