// 이 설정 파일은 index.js 파일이 있는 프로젝트 '루트 폴더'에 저장되어야 함

const path = require("path");

module.exports = {
  devtool: 'source-map',  // 소스 맵 추가를 위한 옵션
  entry: "./src/index.js",  // 클라이언트 시작 파일이 ./src/index.js 사실을 지정
  // 웹팩은 그 파일안에 있는 import 문부터 시작해서 모든 의존 관계 그래프를 자동으로 만든다 -> 하나로 만들면 그게 번들
  output: {
    path: path.join(__dirname, "dist", "assets"),
    filename: "bundle.js",
  },
  // 번들을 ./dist/bundle.js 라는 자바스크립트 파일에 출력하라고 지정
  module: {
    // rules 필드는 웹팩에 사용할 여러 유형의 로더를 포함해야 하기 때문에 배열
    // 이 예제에서는 babel-loader 만 포함
    // 각 로더는 자바스크립트 객체
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
    // test 필드는 각 모듈에서 로더가 작용해야 하는 파일의 경로를 찾기 위한 정규식
    // 이 예제에서는 node_modulues 폴더에서 찾은 자바스크립트 파일이 아닌 모든 자바스크립트 파일에 대해 babel-loader 를 실행
    // 이 시점에서 바벨 실행할 때 사용할 프리셋 지정해야 함
    // 프리셋 지정하면 바벨에게 어떤 식으로 파일 변환할지 알려주게 됨
    // 달리 말해, 이를 통해
    /*
      "헤이 바벨, 이 프로젝트에서 ESNext 구문을 보면 코드를 부라우저가 이해할 수 있는 구문으로 변환하고 계속 진행 해줘" 
    */
   // 라고 요구 할 수 있음
   // npm install @babel/preset-env @babel/preset-react --save-dev
   // 위 구문을 통해 프리셋 설치
   // 이후 프로젝트 루트에 .babelrc 라는 파일 만듦
   /*
    .babelrc 내부 내용
    {
      "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
   */
  },
  // 웹팩은 정적으로 실행됨
  // 보통 앱을 서버에 배포하기 전에 번들을 만듦
  // npx 라는 명령을 사용하면 명령줄에서 webpack 을 사용할 수 있음
  // npx webpack --mode development
  // 성공 혹은 에러 메세지 나옴 - 대부분 에러 메세지는 임포트 참조가 잘못된 경우
  // package.json 파일에 npm 스크립트 추가해서 npm을 통해 웹팩 간편하게 실행하는 지름길 만들 수 있음
  /*
    package.json 내에 다음과 같이 적는다.
    "scripts": {
      "build": "webpack --mode production"
    }
  */
 // 지름길 추가 후에는 번들 생성하는 명령어 다음과 같이 쓸 수 있음
 // npm run build

}