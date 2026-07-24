# plain — CSS 없는 순수 마크업 버전

과제 2·3·4·5는 **CSS 사용이 금지**되어 있어(스타일은 이후 CSS 과제에서 별도 적용),
이 폴더에 스타일시트·`class`·인라인 `style` 없이 **시맨틱 마크업만으로** 다시 작성한 버전을 둡니다.
스타일이 입혀진 버전은 상위 폴더(`../`)에 있으며, 그쪽은 채점 규정상 *추가 실습(지시 외 확장)* 에 해당합니다.

## 과제 ↔ 파일 ↔ 필수 Element

| 과제 | 파일 | 필수 Element | CSS |
|---|---|---|---|
| 1 · 5 · 9 | `index.html` | a / nav, main, aside (환영 인사 포함) | 금지 |
| 2 | `myHoliday.html` | h1, h2, br, p, mark | 금지 |
| 3 | `myProfile.html` | ul, ol, dl | 금지 |
| 4 | `myClass.html` | table, thead, tbody, td 병합(rowspan·colspan) | 금지 |
| 6 | `signUp.html` | form, fieldset, legend, label, input, select, option, textarea, submit, reset | (별도 명시 없음) |
| 7 | `signUpResult.html` | — (signUp의 action 목적지) | (별도 명시 없음) |
| 8 | `myTrip.html` | audio+source, img, video+source | (별도 명시 없음) |

`index.html`은 과제 1(환영 인사) → 5(바로가기 `a`) → 9(nav/main/aside Hub)를 한 파일에 통합했습니다.
`signUp.html`의 `form action="signUpResult.html" method="get"`으로 과제 6→7이 연결됩니다.
과제 8은 개인 여행 미디어가 없어 필수 element만 유지한 준비 중(빈 `src`) 상태입니다.

## 지시 외 추가 실습 (채점 규정 91~100 Excellent 대비)

필수 Element 외에, CSS 없이도 동작·의미가 살아있는 요소를 추가로 사용했습니다.

- **시맨틱 랜드마크**: `header` `nav` `main` `section` `article` `aside` `footer` (요구는 과제 9의 nav/main/aside뿐)
- **네이티브 진행률**: `myProfile` 목표에 `<progress>` — CSS 없이 브라우저 기본 게이지로 상태 표현
- **접기/펼치기**: `<details>`·`<summary>` (index 지난 소식, myProfile 더보기)
- **표 접근성**: `<caption>`, `<colgroup>`·`<col span>`, `th scope="col|row"`
- **셀 병합 심화**: 점심시간 `colspan="5"` 외에, 화·수 / 목·금 연속 과목을 `colspan="2"`로 추가 병합
- **인용·의미 태그**: `<blockquote>`, `<abbr title>`, `<time datetime>`, `<address>`, `<mark>`
- **메타·언어**: `lang="ko"`, `<meta name="viewport">`, `<meta name="description">`
- **이동 경로(breadcrumb)** 내비게이션

## 검증

- CSS 미사용(stylesheet / style= / class= 0건), 필수 Element 충족, 표 그리드 전 행 6칸 정합 — 확인 완료.
- 브라우저에서 열거나 VS Code Live Server로 확인하면, 스타일 없이도 목록·표·타임라인·진행률이 그대로 읽힙니다.
