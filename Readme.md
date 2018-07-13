# Webpack develop config

* npm init -y 로 package.json 만들고 시작
* npm i -D babel babel-cli babel-loader babel-preset-env webpack webpack-cli style-loader css-loader sass-loader mini-css-extract-plugin 로 설치한다.
* root에 .babelrc 파일 생성(babel사용) 아래와 같이 파일 내용을 작성 해준다.

~~~
{
    "presets": [
        ["env"]
    ]
}
~~~

* root에 .webpack.config.js 파일 생성(webpack사용) 아래와 같이 파일 내용을 작성 해준다.

~~~
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // sass를 css로 뱉어주는 plugin

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // webpack4에서는 extract-text-webpack-plugin이 아직 적용되지 않았다.
                    // mini-css-extract-plugin로 대체하여 sass를 내부 style로 번들시키지 않고 css 파일로 별도 분리시켜준다.
                    MiniCssExtractPlugin.loader, 
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
};
~~~

* src 폴더에 있는 index.js를 index.bundle.js로 번들시킬 거니까 src 폴더도 만들어주고 index.js도 만들어줍니다.
* package.json에 script를 추가해줍니다. npm run start를 입력하면, 이제 webpack을 watch 시킬 수 있습니다.

~~~
"start": "webpack --mode=development --watch",
~~~

# D2Coding ligatures
D2Coding 공식 홈페이지: <a href="https://github.com/naver/d2codingfont" target="_blank">https://github.com/naver/d2codingfont</a>

## 설정방법
intelliJ에 개발 font 사용하기(D2Coding)
1. Settings > Editor > Colors & Fonts > Font로 이동합니다.
2. font를 'D2Coding-Ligatures'로 변경합니다.
3. 하단의 'Enable font ligatures' 체크박스를 선택합니다.