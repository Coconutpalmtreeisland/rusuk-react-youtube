# 해루석 영상을 모아보기 위한 유튜브 사이트 만들기
유튜브 API를 이용해서 해루석의 노래, 시참, 나레이션, 상황극, 생방송 등 해루석 활동 관련 사이트를 만들었습니다.
해루석 영상이 유튜브에 이곳저곳 흩어져있어서 편하게 보기 위해 만들었습니다.

<img src="https://raw.githubusercontent.com/Coconutpalmtreeisland/rusuk-react-youtube/main/src/assets/img/youtube.png">

## 플러그인 설치
> react-router-dom, axios, react-icons, react-player, sass, react-helmet-async, swiper 한번에 설치하기:   

`npm install react-router-dom axios react-icons react-player sass react-helmet-async swiper`

- react-router-dom
    설명쓰기

    - BrowserRouter, Routes, Route

- axios
    설명쓰기

- react-icons   
사이트 타이틀 옆 svg 로고를 사용하기 위해 설치

- react-player
    설명쓰기

- react-helmet-async   
    `React Helmet Async`는 React 앱의 `문서 헤드(Document Head)를 관리`하는 데 사용되는 라이브러리입니다. React Helmet Async는 서버 사이드 렌더링(SSR)과 호환되며, 이는 기존의 React Helmet 라이브러리에서 비동기적인 렌더링 환경에서 발생할 수 있는 문제를 해결한 버전입니다. HTML 문서의 헤드에는 타이틀, 메타 태그, 스크립트 등의 정보를 포함하여, 검색 엔진 최적화(SEO)나 소셜 미디어 공유 등에 중요한 역할을 합니다. 각각의 라우트나 컴포넌트에서 독립적으로 문서 헤드를 관리하거나, 서버 사이드 렌더링을 사용하면서 문서 헤드를 동적으로 변경하기에 적합합니다. 이를 통해 사용자에게 보여지는 페이지 타이틀이나 메타 태그를 쉽게 변경할 수 있으며, 검색 엔진이나 소셜 미디어 봇이 페이지를 크롤링할 때 동적인 정보를 제공할 수 있습니다.

- swiper
    설명쓰기

## App.js
<details>
    <summary>App.js 설정</summary>

```javascript
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/section/Header';
import Main from './components/section/Main';
import Footer from './components/section/Footer';

const App = () => {
    return (
        <BrowserRouter>
        <Header />
        <Main>
            <Routes>
            <Route path="/" element={<Home />} />
            </Routes>
        </Main>
        <Footer />
        </BrowserRouter>
    )
}

export default App
```
</details>

## API
<details>
    <summary>API(Application Programming Interface)</summary>

    서로 다른 소프트웨어 간에 정보를 교환하거나 상호 작용을 가능하게 하는 규약(인터페이스)

    - 웹 API: 웹 API는 HTTP를 통해 통신하며, 주로 웹 어플리케이션에서 다른 서버에 저장된 데이터에 접근하거나, 서버에 데이터를 저장하거나 수정할 때 사용합니다.
    - 시스템 API: 시스템 API는 운영 체제에서 제공하는 API로, 운영 체제의 기능을 사용하거나 시스템 리소스에 접근할 때 사용됩니다.
    예를 들어, 파일 시스템에 접근하거나 윈도우를 그리는 등의 작업을 할 때 시스템 API를 사용합니다.

</details>

- 해당 프로젝트에서는 Youtube API를 활용해 나만의 유튜브 페이지를 클론 코딩했습니다.

### API 이용시 주의 사항
- .env 파일 생성 후 본인 API 키 입력
- 깃에 올라가는 것을 방지하기 위해 .gitignore에 .env 입력

## Postman
Postman은 API 개발 및 테스트를 위한 협업 도구로 사용되는 프로그램입니다.
Postman을 사용하면 간단한 HTTP 요청부터 복잡한 API 테스트 및 디버깅 작업까지 다양한 작업을 수행할 수 있습니다. 

*****

<details>

<summary>용어 설명</summary>

- suspense  
    `suspense`는 데이터가 준비될 때까지 사용자에게 로딩 상태를 보여줄 수 있으며, 여러 비동기 작업을 쉽게 조율하여 사용자는 더 빠르고 부드러운 인터페이스를 경험하도록 합니다. 기존에 Promise나 async/await와 같은 방법으로 처리하던 비동기 작업 대신 컴포넌트 `내부에서 데이터를 불러오는 로직을 분리`해서 비동기 작업의 상태에 따른 UI 처리를 간단하게 할 수 있습니다.
    데이터를 불러오는 동안 보여줄 UI를 쉽게 설정할 수 있고 React가 비동기 작업의 상태를 관리하므로 개발자가 직접 상태를 관리할 필요가 없습니다. 여러 개의 Suspense 컴포넌트를 사용하면, 각각의 `비동기 작업이 완료될 때까지 기다린 후 한꺼번에 렌더링`할 수 있습니다. 다만, 아직 실험적인 기능으로, API가 변경될 가능성이 있고 React의 Concurrent Mode를 활성화해야 하는데, 이 모드는 아직 안정화되지 않았기 때문에 주의해야 합니다.

- 컴포넌트
- hook

</details>

`<Helmet titleTemplate='%s | Rusuk Yotube' defaultTitle='Rusuk Youtube'>`

제목이 있으면 제목이 뜨고 없으면 Rusuk Yotube가 뜸 로딩이 끝나면 defaultTitle='' 에 있는 말이 뜸

- async await   
`비동기 작업`을 처리하기 위한 문법
    <details>
    <summary>작업의 실행 방식</summary>
    <details>
    <summary>동기(Synchronous)</summary>

    동기 방식에서는 한 작업이 완료될 때까지 기다린 후, 다음 작업을 실행합니다. 즉, 작업이 __순차적__ 으로 진행되며, 어떤 작업이 실행 중이면 그 작업이 끝나기 전까지는 다른 작업을 시작하지 않습니다.

    </details>

    <details>
    <summary>비동기(Asynchronous)</summary>

    비동기 방식에서는 한 작업이 완료되는 것을 기다리지 않고, __다음 작업을 즉시 실행__ 합니다. 즉, 여러 작업이 동시에 진행될 수 있습니다. (예) Web API, Ajax, setTimeout 등  
    비동기 요청시 응답 후 순서에 맞게 처리할 '콜백 함수'를 함께 알려준다. 따라서 해당 태스크가 완료되었을 때, '콜백 함수'가 호출된다. 

    </details><br>
    
    > 동기 방식은 간단하고 직관적이지만, 작업이 끝나기를 기다리는 동안 프로그램이 멈추게 되어 효율성이 떨어질 수 있습니다. 반면 `비동기 방식`은 복잡한 경우가 많지만, `여러 작업을 동시에 처리`할 수 있어 효율적인 프로그램을 작성할 수 있습니다.
    
    </details>  

    `async`는 함수 앞에 위치하여 해당 함수가 `비동기적으로 동작`함을 명시하며, `await`는 async 함수 내부에서 '콜백 함수'의 가독성과 에러 문제를 해결한 생성자 함수인 `Promise`가 resolve 또는 reject될 때까지 실행을 `일시 중지`하도록 하는데 사용합니다.  

    > 예시

    ```javascript
    function fetchUser(id) {
    return fetch(`https://api.example.com/users/${id}`)
        .then(response => response.json())
        .then(user => user);
    }
    ```

    위 함수는 fetch를 사용하여 Promise를 반환합니다. 따라서 이 함수를 호출하는 곳에서는 then 메서드나 catch 메서드를 사용해야 합니다. 하지만 async와 await를 사용하면 이 과정을 더 간결하고 가독성 좋게 표현할 수 있습니다.

    ```javascript
    async function fetchUser(id) {
        try {
            const response = await fetch(`https://api.example.com/users/${id}`);
            const user = await response.json();
            return user;
        } catch (error) {
            console.error('Failed to fetch user:', error);
        }
    }
    ```
    이렇게 하면 fetchUser 함수는 여전히 Promise를 반환하지만, 함수 내부에서는 비동기적인 작업이 마치 `동기적인 것처럼 보이게` 됩니다. 이는 코드의 가독성을 크게 향상시킵니다.

    또한, async 함수 내에서는 `try/catch 문`을 사용하여 에러 처리를 할 수 있습니다. 이는 then과 catch 메서드를 사용하는 것보다 더 직관적이고 일관된 에러 처리 방식을 제공합니다.

fetchFromAPI 정리
map 정리 에 대한 설명과 어떻게 쓰이는지
hook - useParams, useState, useEffect
import, export 정리

