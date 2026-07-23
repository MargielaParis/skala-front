# html-trendy

`html/` 폴더의 페이지들을 **CSS 없이 마크업만으로** 다시 작성한 버전입니다.
스타일은 아직 추가하지 않았고, 기존 `../css/style.css`를 그대로 연결해 둔 상태입니다.

## 톤 & 매너

- **이모지 없음.** 제목·메뉴·표·타임라인에서 이모지를 모두 제거했습니다.
  대신 `01 02 03` 번호, `kicker` 라벨(`ABOUT ME`, `TIMETABLE` …), `&rarr;` `&larr;` 같은
  타이포그래피 요소로 위계를 잡았습니다.
- **네이티브 게이지 없음.** 브라우저 기본 `<progress>` / `<meter>` 위젯은 전부 걷어냈습니다.

## 단계 표시 / 진행률

### 스텝퍼 — `signUp.html`, `signUpResult.html`
게이지 바 대신 번호형 스텝퍼입니다. 각 항목에 `data-state`가 있어 CSS에서 상태별로 분기할 수 있습니다.

```html
<nav class="stepper" aria-label="가입 진행 단계" data-component="stepper">
  <ol>
    <li data-state="done">   <span class="stepper__index">01</span> … <span class="stepper__state">완료</span>
    <li data-state="current" aria-current="step"> …
    <li data-state="todo">   …
```

```css
.stepper li[data-state="done"]    { /* 체크 표시, 흐린 색 */ }
.stepper li[data-state="current"] { /* 강조 색, 굵게 */ }
.stepper li[data-state="todo"]    { /* 회색 */ }
.stepper li + li::before          { content: ""; /* 연결선 */ }
```

### 프로그레스 바 — `index.html`(통계), `myProfile.html`(목표)
직접 그릴 수 있는 커스텀 바입니다. 접근성은 `role="progressbar"` + `aria-value*`로 유지됩니다.

```html
<span class="bar" role="progressbar" aria-labelledby="goal-book"
      aria-valuemin="0" aria-valuemax="52" aria-valuenow="29" data-value="56">
  <span class="bar__fill"></span>
</span>
```

`data-value`가 채움 비율(%)입니다. CSS에서 `.bar__fill`의 너비만 잡아 주면 됩니다.
숫자는 `.stat__value` / `.goal__count`로 따로 크게 보여 주고 있어서, CSS 없이도 값은 읽힙니다.

### 숙련도 입력 — `signUp.html`
`<input type="range">`(밋밋한 슬라이더)를 **세그먼티드 컨트롤**로 교체했습니다.
라디오 5개라 CSS만으로 버튼형 토글로 만들 수 있습니다.

```html
<ul class="segmented" data-component="segmented-control">
  <li><label><input type="radio" name="skillLevel" value="3" checked> <span>보통</span></label></li>
```

## 그 밖의 컴포넌트 (JS 없이 동작)

| 컴포넌트 | 사용한 태그/속성 | 적용 위치 |
|---|---|---|
| 아코디언 / FAQ | `<details name="...">` `<summary>` | index, myClass, myTrip, myProfile, signUpResult |
| 팝오버(모달·툴팁) | `popover` + `popovertarget` | index(안내), myClass(표 보는 법), signUp(약관) |
| 자동완성 입력 | `<datalist>` | signUp(이메일) |

> `details`에 같은 `name`을 주면 하나만 열리는 **배타적 아코디언**이 됩니다.

## 구조 정리

- `<hgroup>`으로 제목 + 부제 묶기, `<header>` / `<main>` / `<footer>` / `<address>` 명시
- 모든 섹션에 `aria-labelledby`, 내비게이션에 `aria-label`
- 빵부스러기(breadcrumb) 내비게이션과 `본문 바로가기` 스킵 링크 추가
- 의미 없는 `<hr>` / `<br>` 대신 `<section>`으로 구획 분리

### 표(myClass) 웹 표준화
- 삭제된 속성 제거: `border` `cellpadding` `cellspacing` `bgcolor` `align`
- `<caption>` `<colgroup>` 추가, 시간 열은 `<th scope="row">`, 요일은 `<th scope="col">`
- `<time datetime="09:00">`으로 시간 데이터 표기
- `.table-scroll` 래퍼 + `tabindex="0"`로 좁은 화면 스크롤 대비

### 폼(signUp) 현대화
- `type="email"` `type="tel"` 도입, `autocomplete` / `inputmode` / `pattern` 추가
- `<optgroup>`으로 가입 경로 그룹화, 도움말은 `aria-describedby`로 연결
- `<input type="submit">` → `<button type="submit">`
- 필수 약관 동의 체크박스 추가

### 미디어 최적화
- `loading="lazy"` `decoding="async"`, 의미 있는 `alt` 텍스트
- `<figure>` + `<figcaption>` 카드 구조, 비디오 `poster` / `playsinline` / `preload="metadata"`
- 재생 실패 시 다운로드 링크 폴백

## CSS를 붙일 준비

```
.kicker                                         → 섹션 위 작은 라벨
.nav-grid / .card-grid / .trip-grid-container   → grid 레이아웃
.timeline / .timeline__item                     → 세로 타임라인
.stepper li[data-state]                         → 단계 표시
.bar / .bar__fill[data-value]                   → 커스텀 진행률 바
.stat__value / .stat__unit / .goal__count       → 숫자 강조 타이포
.card / .media-card / .definition-card          → 카드
.badge[data-tone] / .chip                       → 뱃지·칩
.segmented                                      → 세그먼티드 컨트롤
.accordion / .popover-card                      → 아코디언·팝오버
.breadcrumb / .skip-link                        → 경로·스킵 링크
```

`*__index` 클래스(`nav-grid__index`, `goal__index`, `stepper__index`, `trip-card__index`)는
전부 `01 02 03` 번호라, 한 번에 모노스페이스 + 흐린 색으로 잡으면 통일감이 생깁니다.

## 파일 목록
`index.html` `myProfile.html` `myClass.html` `myHoliday.html` `myHoliday2.html` `myTrip.html` `signUp.html` `signUpResult.html`

원본 `html/` 폴더는 그대로 두었습니다. (`indexOld.html`은 예전 버전이라 옮기지 않았습니다.)

## 참고
- `index.html`은 기존 스크립트(`upDown.js`, `grade.js`, `bag.js`, `realtimeInfo.js`)를 그대로 사용합니다.
  `#city-select`, `#weather-box`, `startGame()`, `checkGrade()`, `showMyBag()` 훅을 유지했습니다.
- `popover` 속성은 Chrome/Edge 114+, Safari 17+, Firefox 125+ 에서 동작합니다.
  미지원 브라우저에서는 팝오버 내용이 그냥 페이지에 보이게 됩니다.
