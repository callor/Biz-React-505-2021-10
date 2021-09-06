# React 프로젝트

## React 프로젝트 build 및 테스트

- yarn build
- 테스트용 서버 : npm install -g serve
- 실행 : 프로젝트> serve -s build

## React 프로젝트 build 및 배포

- 개발이 완료되면 : yarn build 를 실행하여 transpiler를 수행한다
- 작성된 컴포넌트들이 _.chunk._ 라는 이름으로 컴파일되어 build 폴더에 저장된다

- 배포를 할때는 프로젝트/build 폴더를 배포하면 된다
