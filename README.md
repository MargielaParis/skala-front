# SKALA-FRONT — 박기연

SKALA 교육과정 **Full-stack Engineering (HTML · CSS · JavaScript, 강병호)** 실습 결과물입니다.
개인 포털 "박기연의 유니버스"를 만들며 HTML 마크업 → CSS 스타일 → JavaScript 동작을 단계별로 구현했습니다.

- 제출 저장소: https://github.com/MargielaParis/skala-front
- 순수 HTML · CSS · JavaScript만 사용 (프레임워크·빌드 도구 없음)

## 실행 방법

VS Code **Live Server**로 `index.html`을 엽니다. (또는 브라우저로 직접 열기)

- 실시간 날씨는 [Open-Meteo](https://open-meteo.com) 무료 API를 호출하므로 인터넷 연결이 필요합니다.
- 미니 게임(업다운·성적 계산기·내 가방)은 사이드바 버튼으로 실행됩니다.

## 폴더 구조

```
html_kiyeon/                  ← 제출 루트
├── index.html                메인 허브 (과제 1·5·9)
├── myProfile.html            소개 (과제 3)
├── myClass.html              강의 시간표 (과제 4)
├── myHoliday.html            휴일 일과 (과제 2)
├── myHoliday2.html           휴일 일과 7월 버전 (추가 실습)
├── myTrip.html               여행 앨범 (과제 8)
├── signUp.html               회원가입 (과제 6)
├── signUpResult.html         가입 완료 (과제 7)
├── css/
│   ├── trendy.css            메인 스타일 (CSS 미션 1~6)
│   └── style.css             기본 테마
├── script/
│   ├── upDown.js  grade.js  bag.js         JS 기초 과제
│   ├── weather.js                          실시간 날씨 (2단계)
│   └── weatherAPI.js  realtimeInfo.js       실시간 날씨 (3단계 · 모듈)
└── plain/                    CSS 없는 순수 마크업 버전 (아래 참고)
```

## 과제 매핑

### HTML — 필수 Element

| 과제 | 파일 | 필수 Element |
|---|---|---|
| 1 · 5 · 9 | `index.html` | a / nav · main · aside (환영 인사 → 바로가기 → Hub) |
| 2 | `myHoliday.html` | h1, h2, br, p, mark |
| 3 | `myProfile.html` | ul, ol, dl |
| 4 | `myClass.html` | table, thead, tbody, td 병합(rowspan·colspan) |
| 6 | `signUp.html` | form, fieldset, legend, label, input, select, option, textarea, submit, reset |
| 7 | `signUpResult.html` | signUp의 `action` 목적지 |
| 8 | `myTrip.html` | audio+source, img, video+source |

### CSS — 미션 1~6 (`css/trendy.css`)

| 미션 | 내용 |
|---|---|
| 1 | 전체 테마 · 글꼴 · 제목/링크 스타일 |
| 2 | 박스 모델 · `.container` 가운데 정렬 · 카드 · 표 |
| 3 | 가독성 높은 회원가입 폼 |
| 4 | Flexbox(바로가기·main/aside) + Grid(카드 레이아웃) |
| 5 | 반응형 — 화면이 좁아지면 세로 1열로 전환 (`@media`) |
| 6 | 애니메이션 — 헤더 페이드인 등장, 카드 hover 시 떠오름, 부드러운 색 전환 |

### JavaScript — 과제

| 과제 | 파일 | 동작 |
|---|---|---|
| Up-Down 게임 | `script/upDown.js` | 1~50 무작위 숫자를 `prompt`/반복문으로 맞추기 |
| 성적 계산기 | `script/grade.js` | 3과목 점수 입력 → 평균·합격 판정 |
| 내 가방 보기 | `script/bag.js` | 소지품 객체 배열을 반복문으로 출력 |
| 실시간 날씨 | `script/weatherAPI.js` + `realtimeInfo.js` | 도시 선택 시 `fetch`+`async/await`로 Open-Meteo에서 온도·습도 조회, `import`/`export` 모듈 분리 |

## 두 가지 버전

이 저장소는 같은 페이지를 두 형태로 담고 있습니다.

- **루트 (스타일 버전)** — `trendy.css`를 적용한 완성본.
- **`plain/` (순수 마크업 버전)** — 스타일시트·`class`·인라인 `style` 없이 **시맨틱 HTML만**으로 작성.
  과제 2·3·4는 CSS 사용이 금지되어 있어(스타일은 CSS 단계에서 별도 적용), 이 요구를 지킨 버전입니다.
  자세한 내용은 [`plain/README.md`](plain/README.md) 참고.

## 지시 외 추가 실습

기본 요구사항 위에 다음을 더 구현했습니다.

- **시맨틱 · 접근성**: `header`/`nav`/`main`/`aside`/`footer`, `aria-labelledby`, breadcrumb, `본문 바로가기` 스킵 링크, 표의 `caption`·`scope`, 폼의 `label`·`autocomplete`·`pattern`
- **JS 없이 동작하는 컴포넌트**: `<details>` 아코디언, 네이티브 `popover`(안내·약관)
- **커스텀 진행률 바**: `role="progressbar"` + `aria-value*` 유지, 값은 `data-value`로 관리
- **반응형 · 라이트/다크**: `@media` 브레이크포인트 + `prefers-color-scheme`, `prefers-reduced-motion` 존중
- **실시간 날씨**: DOM 이벤트 → 비동기 fetch → 모듈 분리까지 3단계 확장

## 참고

- `popover` 속성은 Chrome/Edge 114+, Safari 17+, Firefox 125+ 에서 동작합니다. 미지원 브라우저에서는 내용이 페이지에 그대로 보입니다.
- 여행 사진·영상은 아직 준비 중이라 `myTrip.html`의 미디어는 자리표시(빈 `src`) 상태입니다.
