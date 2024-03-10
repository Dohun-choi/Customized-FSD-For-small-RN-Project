# FSD를 참고하여 수정한 EXPO 기반 RN 프로젝트 템플릿

포함된 라이브러리 - 알파벳 순서

- axios
- ESLint
- expo
- jest
- nativewind
- prettier
- react
- react native
- react navigation
- storybook
- tanstack-query
- typescript
- zustand

+ 각 라이브러리에 필요한 의존성들

마음대로 삭제하거나 추가로 설치하여도 상관없습니다.

단, 삭제할 때는 관련된 설정(라이브러리_이름.config./ts|js/ 입니다.) 파일도 함께 삭제하는 것을 권장합니다. - 모두 최상위 디렉토리에 존재합니다.

# 사용법

[제 블로그 글](https://curt-poem.tistory.com/entry/FSD-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%EB%A5%BC-%EC%B0%B8%EA%B3%A0%ED%95%98%EC%97%AC-SSAFY-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8EXPO-RN%EC%97%90-%EB%A7%9E%EA%B2%8C-%EB%B0%94%EA%BF%94%EC%84%9C-%EC%8D%A8%EB%B3%B4%EC%9E%90)을 참조하거나  [(번역) 기능 분할 설계 - 최고의 프런트엔드 아키텍처](https://emewjin.github.io/feature-sliced-design/)를 참조하시면 사용에 도움이 될 것입니다.

#### app

 app에는 navigation이 위치해있습니다. reactNavigation 라이브러를 사용하기 위한 슬라이스입니다. 전체 스크린을 이동할 수 있는 bottom-navigation 하나와 bottom-navigation 버튼으로 이동이 가능한 native-stack-navigation을 위한 파일을 두었습니다. 각 스크린 네비게이션의 크기가 이미 작음에도 불구하고 따로 둔 이유는 네비게이션이나 라우터를 추가할 때 같은 줄을 수정하여 발생하는 git conflict를 없애기 위함입니다. 추가적으로 각 진입점이 되는 페이지만 관리하면 되기 때문에 네비게이션 관리가 편해질 것 같았습니다.



전역상태 관리를 위해서는 zustand를 사용하고 zustand는 provider 없이 동작하기 때문에 관련 설정은 app에 존재하지 않습니다.



tanstackQueray의 프로바이더는 app레이어의 app.tsx에 바로 추가해주었습니다. 이때 queryClientsms tanstackQueary의 전역 설정과 관계된 부분이고 하위 레이어인 components 내부에서 사용이 가능해야되므로 shared에 위치합니다.



app 슬라이스에는 index.ts가 아닌 app.tsx로 이름을 설정하여 기존의 app.tsx와 같다는 것을 분명히 하였습니다. 최상위에 존재하는 app.tsx가 app 슬라이스의 app.tsx를 import하여 사용합니다.

#### screens

screens는 비지니스 로직에 따라 구분하였습니다. bottom-navigation에서 설정한 진입점이 되는 주요 스크린을 기준으로 슬라이스를 만들고 각각의 스크린을 슬라이스 내부에 위치시킬 것입니다.



screens에는 index.ts를 만들어 모든 스크린을 여기서 중계하여 내보내기 때문에 screens 내부의 세그먼트를 사용하는 app의 native-stack-navigation들이 캡슐화된 screen을 가져오도록 하였습니다.

#### components

components는 실제의 기능이 수행되는 로직과 UI를 세그먼트로 구분하여 위치시키도록 하였습니다. 먼저 componetnts 안에 example이라는 슬라이스가 있을 것입니다. 이 슬라이스는 하나의 기능을 담당하게 되며, components 안의 다른 슬라이스를 사용할 수도 있습니다. 만약 해당 슬라이스가 스크린에서 사용되어야 한다면 index.tsx를 통해 중계되어 내보내질 것입니다.



슬라이스는 크게 기능이 수행되는 기능 세그먼트, UI를 담당하는 UI 세그먼트, 그리고 백엔드 서버에 요청을 보내는 API 세그먼트와 타입을 선언하는 type 세그먼트로 구성됩니다. 필요에 따라 필요한 상수인 consts, 여기에서만 사용되는 라이브러리나 설정 등을 담당하는 lib 세그먼트가 추가될 수도 있습니다.



기능 세그먼트는 기능 담당에 더해 해당 슬라이스 밖으로 내보내지는 역할을 가진 세그먼트가 됩니다. 



screens와 마찬가지로 index.ts를 두어 캡슐화를 흉내내었습니다.

#### shared

마지막 레이어입니다. 전역에서 사용할 공통 컴포넌트와 전역 색상 설정 그리고 라이브러리들의 전역 설정이 여기에 정의됩니다. 애플리케이션 전반에서 사용되는 axios의 인스턴스, tanstackQueary의 QueryClient, 그리고 전역 상태 관리를 위한 zustand의 스토어들이 여기서 설정됩니다.



라이브러리는 각각의 슬라이스로 나누어져 들어갑니다. axios, tanstackquery, zustand가 위치하고 그 내부에 세그먼트가 위치합니다. zustand가 여러 개의 store로 나누어질 수 있고 각 store는 다른 파일로 저장될 것입니다.

여기도 마찬가지로 index.ts가 있습니다.

### 그 외 추가사항

test 코드는 테스트하고자하는 각각의 컴포넌트 혹은 페이지와 같은 디렉토리에 위치시키기로 하엿습니다. 그러나 test폴더를 따로 만들어 관리하여도 상관없습니다. 프로젝트 팀원과 합의하시면 됩니다.



스토리북은 RN에서 사용할 때 기존의 ReactNative와 달리 기본적으로 명령어가 분리되어 있지 않아 불편을 해소하기 위해 개발 과정에서 명령어에 따라 스토리북을 실행할지 혹은 애플리케이션을 실행할지 나누었습니다. npm start는 기존 애플리케이션을 실행, npm storybook은 스토리북을 실행합니다. \([How to swap between React Native Storybook and your app](https://dev.to/dannyhw/how-to-swap-between-react-native-storybook-and-your-app-p3o)를 참조하여 설정하엿습니다. \) 이 설정은 package.json과 프로젝트 최상위에 있는 app.tsx를 참고하시면 됩니다. 

example이라는 이름으로 사용 예시를 작성해 두었습니다.

스토리북 사용의 예시는 .storybook 디렉토리의 exmaple에 두었습니다.