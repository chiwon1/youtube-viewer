# Youtube Viewer

![Youtube](/youtube.jpg)

## Installation

```sh
npm install
```

## Development

```sh
npm start
# visit http://localhost:3000
```

- HTML: `/public/index.html` 파일을 이용하여 작업할 수 있습니다.
- CSS: `/src` 디렉토리 내에서 자유롭게 파일/폴더를 생성/수정하여 작업할 수 있습니다.
- JavaScript: `/src` 디렉토리 내에서 자유롭게 파일/폴더를 생성/수정하여 작업할 수 있습니다.

### Reference

- [Create React App](https://github.com/facebook/create-react-app)

## Before you begin

이번 과제를 시작하기 전에 다음에 대해 반드시 조사해보세요.

- [ ] npm이란 무엇이며 우리는 왜 npm을 사용하는 것일까요? (npm과 yarn은 어떤 차이가 있을까요?)
- [ ] `node_modules` 디렉토리는 어떤 역할을 하는 것일까요?
- [ ] `package.json` 파일은 어떤 용도일까요?
- [ ] `package.json` 파일에 보면 여러 가지 종류의 Meta Data가 있습니다. 그 중 다음 Meta Data들에 대해서 조사해보세요.
  - `"dependencies"`
  - `"devDependencies"`
  - `"scripts"`
- [ ] `package-lock.json` 혹은 `yarn.lock` 파일의 용도는 무엇일까요?

## Youtube API

[Youtube API](https://developers.google.com/youtube/v3/docs/search/list)를 이용하여 구현하세요.

### Youtube API 발급받기

- [Youtube API Console](https://console.developers.google.com/)로 접속하세요.
- **CREATE PROJECT**를 선택하세요.
- 프로젝트 이름을 입력하고, 생성하세요.
- **ENABLE APIS AND SERVICES** 를 선택하세요.
- "Youtube" 검색 후, **YouTube Data API v3**를 선택하세요.
- Youtube Data API v3를 **ENABLE** 하세요.
- **좌측 Credentials 메뉴**를 선택하세요.
- **Create Credentials**를 선택하세요.
- 본인의 API KEY를 확인하고, `/src/config/youtube.js`에 붙여넣어 사용하세요.

> 짧은 시간 내에 너무 많은 API 요청을 보내게 되면, 잠시동안 요청이 거부당할 수 있습니다. 그럴 경우에는 Mock Data를 활용하세요. (`/api/youtube.js` 참고)

## React File Structure

- React 문서의 [FAQ](https://reactjs.org/docs/faq-structure.html)를 읽어보거나 검색을 해보시기 바랍니다.

## Reusable Component

- 본인이 작성한 컴포넌트의 재사용성에 대해 깊게 생각해보시기 바랍니다. 다른 상황에 나의 컴포넌트가 사용될 경우 별다른 어려움은 없을지에 대해 생각해보세요.

## TODO

- **AJAX 요청은 [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)를 이용하세요.**
- React Router의 사용은 본인 선택에 따라 결정하세요.

* [ ] 첫 페이지에는 랜덤한 비디오 정보 목록을 10개 보여주어야 합니다.
* [ ] 사용자가 검색을 할 경우, 검색어에 대한 비디오 목록을 10개 보여주어야 합니다.
* [ ] 비디오 목록의 각 비디오는 최소한 아래의 정보를 보여주어야 합니다.
  - [ ] 제목
  - [ ] 썸네일 이미지
  - [ ] 비디오 발행 날짜
  - [ ] 비디오 설명 글 (단, 30글자 이상일 경우 ellipsis로 나머지 부분은 생략 처리해야 합니다.)
* [ ] 비디오 목록은 무한 스크롤 방식으로 추가 비디오 목록을 더해주어야 합니다.
  - `throttle` & `debounce`에 대해 조사해보고 반드시 적용해보세요. (설치되어 있는 `lodash`를 이용하세요.)
  - 디테일한 사항은 자유롭게 결정하셔도 괜찮습니다.
* [ ] 사용자는 비디오 목록에서 비디오를 선택할 수 있어야 합니다.
* [ ] 사용자가 선택한 비디오의 정보를 Modal에서 보여주어야 합니다. 비디오 정보는 위에 나열된 정보와 함께 아래 정보들을 추가로 보여주어야 합니다.
  - [ ] 전체 비디오 설명
  - [ ] 재생 가능한 비디오 영상
  - [ ] 그 외 개인적으로 추가하고 싶은 사항
* [ ] Modal의 바깥 부분 혹은 닫는 버튼을 클릭한다면 모달은 사라져야 합니다.
* [ ] 첫 페이지 로딩 시에 사용자에게 환영메시지를 보여주세요. 환영메시지 내용은 여러분께서 작성하셔도 되지만, 반드시 모달창을 이용해서 보여주어야 합니다. _모달창은 이전 단계에서 구현했던 것처럼 바깥 부분이나 닫는 버튼을 클릭하면 사라져야 합니다._ (재사용성에 대해 고민해보세요.)

### Advanced

- [ ] Utility 함수가 있다면, 그에 대한 Test Code 작성하기
  - 과제 프로젝트는 [Create React App](https://create-react-app.dev/)을 이용하여 만들어졌기 때문에, Create React App의 [Test 작성하기](https://facebook.github.io/create-react-app/docs/running-tests) 페이지를 참고하여 Test Code를 작성하시기 바랍니다.
- [ ] React Component Test 작성하기
  - [Redux 저장소의 예제](https://github.com/reduxjs/redux/tree/master/examples/shopping-cart/src)를 보시면 참고할 만한 Test Code를 찾으실 수 있습니다.
- [ ] End to End Test 작성하기 ([Cypress.io](https://www.cypress.io/))
- [ ] Styled Component의 장점과 단점은 무엇일까요?
