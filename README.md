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

## Twitch API

[Twitch API](https://dev.twitch.tv/docs/api/reference)를 이용하여 구현하세요.

### Twitch Application Registration

- [Twitch](https://www.twitch.tv/)에 가입하세요.
- [개인 설정 페이지](https://www.twitch.tv/settings/security)의 Security and Privacy에서 Two Factor Authentication을 등록하세요.
- 위에서 가입한 계정을 이용하여 [Twitch Developers](https://dev.twitch.tv/console)에 로그인하세요.
- [Register Your Application](https://dev.twitch.tv/console/apps/create)을 선택하세요.
- Name 칸에 본인만의 고유한 이름(예: `본인아이디 React Sample`)을 이용하여 어플리케이션 이름을 입력하세요. 고유하지 않은 이름을 사용하여 여러번 신청을 하면 잠시 계정이 차단됩니다. 주의하세요.
- OAuth Redirect URL 칸에 `localhost:3000`을 입력하세요.
- Category를 선택하세요.
- Robot이 아님을 체크한 후, Create 버튼을 클릭하세요.
- [Twitch Developers Console](https://dev.twitch.tv/console)에서 방금 만든 어플리케이션을 클릭하세요.
- 가장 아래에 보이는 Client ID를 이용하여 API 호출을 하시면 됩니다.

## React File Structure

- React 문서의 [FAQ](https://reactjs.org/docs/faq-structure.html)를 읽어보거나 검색을 해보시기 바랍니다.

## Reusable Component

- 본인이 작성한 컴포넌트의 재사용성에 대해 깊게 생각해보시기 바랍니다. 다른 상황에 나의 컴포넌트가 사용될 경우 별다른 어려움은 없을지에 대해 생각해보세요.

## TODO

- **AJAX 요청은 [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)를 이용하세요.**
- React Router의 사용은 권장하긴 하지만, 본인 선택에 따라 결정하세요. 단, URL Naming은 반드시 조사 후 결정하시기 바랍니다. (1차적으로 기능구현 작업 후 추가해보는 것도 좋은 방향입니다.)

* [ ] 첫 페이지의 상단 부분에는 Top Games 정보(게임 이름)을 순위에 따라 10개 보여주어야 합니다.
* [ ] 첫 페이지의 Top Games 목록 아래에는 가장 첫번째 Top Game의 비디오가 20개 보여야 합니다. 각 비디오는 아래의 정보를 반드시 보여주어야 합니다.
  - [ ] 만든 날짜
  - [ ] 비디오 길이
  - [ ] 비디오 언어
  - [ ] Thumbnail 이미지
  - [ ] 비디오 제목
  - [ ] 사용자 이름
  - [ ] 시청자 수
  - [ ] 공개 여부
* [ ] 사용자는 Top Games 중 원하는 게임을 선택할 수 있어야 합니다.
* [ ] 사용자가 Top Games 중 하나를 선택했을시, Top Games 목록 아래의 비디오 정보가 해당 게임에 대한 비디오 목록으로 반영되어야 합니다.
* [ ] 비디오 목록 아래에는 "Next"와 "Prev" 버튼이 있어야 하고 상식에 맞게 Pagination이 구현되어야 합니다. (무한 스크롤 방식으로 구현하셔도 좋습니다.)
* [ ] 사용자는 비디오를 선택할 수 있어야 합니다.
* [ ] 사용자가 선택한 비디오의 정보를 Modal에서 보여주어야 합니다. 비디오 정보는 위에 나열된 정보와 함께 아래 정보들을 추가로 보여주어야 합니다.
  - [ ] 비디오 상세 설명
  - [ ] (옵션 사항) 재생 가능한 비디오 영상
* [ ] Modal의 바깥 부분 혹은 닫는 버튼을 클릭한다면 모달은 사라져야 합니다.

### Advanced

과제 프로젝트는 [Create React App](https://create-react-app.dev/)을 이용하여 만들어졌기 때문에, Create React App의 [Test 작성하기](https://facebook.github.io/create-react-app/docs/running-tests) 페이지를 참고하여 Test Code를 작성하시기 바랍니다.

[Redux 저장소의 예제](https://github.com/reduxjs/redux/tree/master/examples/shopping-cart/src)를 보시면 참고할 만한 Test Code를 찾으실 수 있습니다.

- [ ] Utility 함수가 있다면, 그에 대한 Test Code 작성하기
- [ ] Reducer 함수 Test Code 작성하기
- [ ] React Component Test 작성하기
- [ ] End to End Test 작성하기 ([Cypress.io](https://www.cypress.io/))
