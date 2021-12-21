# ts 常见配置选项

```javascript
{
    "include": [
        "./src/**/*"
    ],
    "compilerOptions": {
        // 设置js版本 'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'es2021', 'esnext'
        "target": "es2015",
        // 模块化规范：'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'es2022', 'esnext', 'node12', 'nodenext'
        // 默认值就好
        // "module": "es2015",
        // lib: 用来指定库,默认浏览器环境，一般不改它 'es5', 'es6', 'es2015', 'es7', 'es2016', 'es2017', 'es2018' 等等
        // 默认值就可以
        // "lib": ['es5', 'es6']
        // 用来指定编译后，文件所在目录
        "outDir": "./dist",
        // 将代码合并成一个文件
        // 一般配合打包工具使用
        // "outFile": "./dist/app.js"
        // 对js文件进行编译
        "allowJs": true,
        // 检查js
        "checkJs": true,
        // 编译后：删注释
        "removeComments": true,
        // 编译后：不生成编译文件
        // "noEmit": true
        // 当有错误时，不生成文件
        "noEmitOnError": true,
        // 严格模式总开关
        // "strict": true,
        // 编译后的文件，是严格模式
        // 如果ts代码有import export时，打包之后的文件，就是严格模式。
        "alwaysStrict": true,
        // 不许用隐式的any类型
        "noImplicitAny": true,
        // 不许用 不明确类型的this ： 函数里的this，要看谁调用它
        "noImplicitThis": true,
        // 严格检查空值：比如不在load函数里获取dom元素
        "strictNullChecks": true
    }
}
```
