# 자바스크립트 Advanced 프로젝트 - JeeHwan

---

## 목차

1. save_text
2. image_editor
3. word_game
4. down_any_file
5. notes_app
6. select_menu
7. right_click_menu
8. price_range_slider

---

## 1. save_text

### 구현 아이디어

```
1. textArea에 있는 text 와 선택된 select의 value를 이용해 blob 만듬
2. a태그를 만들어서 a 태그에 download (파일명)과 href 를 연결 후 클릭
3. 클릭하면 해당 파일이 다운로드 됨
```

### 주요기능

- blob : Binary Large Objects의 약자
  (단순 텍스트가 아닌 이미지, 사운드, 동영상 등 대용량 바이너리 데이터를 담음)

```
- var Blob = new Blob(array, options);
  array는 ArrayBuffer, ArrayBufferView, Blob, DOMString 전달하고
  options 에는 type이나 endings 사용

  예시)
       new Blob(['<div>Hello</div>'], {type:'text.html', endings:'native'});

- 생성자를 통해 만든 Blob 객체는 size와 type의 속성을 갖게 됨
- method
  1. slice : blob.slice(start, end, type);
  2. URL.createObjectURL() : const BlobURL = window.URL.createObjectURL(Blob);
  3. revokeObjectURL() : widnow.URL.revokeObjectURL(BlobURL);
```

## 2. image_editor

### 구현 아이디어

```
1. file input 을 넣어두고 hidden으로 둠
2. chooseImage 버튼을 클릭하면 file input을 클릭하도록 eventListener 등록
   예시) chooseImageBtn.addEventListener("click", () => fileInput.click());
3. image가 없을때는 panel이 pointer-events : none 으로 클릭이 안됨
3-1. image를 가져오면 disable 을 클래스에서 제외하여 바꿈
4. slider를 조절하여 previewImg 의 css 속성중 filter를 바꿈
4-1. rotate 버튼을 누르면 previewImg 의 css 속성중 rotate 와 scale을 통해 사진 변경
.
```

### 주요기능

- accent-color (css)

```
- 폼 요소에 적용할 수 있는 css 기능
- 라디오박스, 체크박스, 레인지 슬라이더 3가지에 적용 가능

```

- pointer-events

```
- HTML 요소들의 마우스/터치 이벤트의 응답을 조절하는 속성
- 주로 hover, active, click, tap, cursor 등이 있음
```

- canvas

```
- HTML 요소 중 하나로 스크립트를 사용하여 그림을 그리는데 사용
- drawImage(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight) 를 사용해서 이미지를 삽입
- 참고 : https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=javaking75&logNo=140170208333
- toDataURL()을 통해 캔버스에 그린 그림을 문자열 형태로 변환
```

## 3. word_game

### 구현 아이디어

```
1. word.js에 word와 hint 가 있음
2. random 함수를 통해 word.js에서 word와 hint를 가져옴
3. initTimer함수 안의 setInterval()을 통해서 시간을 조절
3-1. 종료될 경우 clearInterval() 필요
```

## 4. down_any_file

### 구현 아이디어

```
1. input에 값이 없을 경우 button의 point-event : none
1-1. 위와 똑같이 input 에 값이 없을 경우 opacity : 0.7
```

### 주요기능

- valid(css)

```
- A ~ B : A태그 옆의 B태그만 선택하는 선택자

- valid : 가상선택자로 유효값을 갖는 요소 선택
  예시) input:valid {
          background : yellow;
        }

        input:invalid {
          background : silver;
        }
```

- fetch(javascript)

```
- 참고 : https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-AJAX-%EC%84%9C%EB%B2%84-%EC%9A%94%EC%B2%AD-%EB%B0%8F-%EC%9D%91%EB%8B%B5-fetch-api-%EB%B0%A9%EC%8B%9D
```

## 5. notes_app

### 구현 아이디어

```
1. popup의 opacity를 0으로 만듬
2. add를 클릭하면 popup의 opacity가 1로 변하고
2-1. x를 클릭하면 다시 opacity 0으로 바꿈
3-1. 종료될 경우 clearInterval() 필요
4. addnote 버튼을 누르면 li 태그 html 추가하여 메모를 추가함
5. delete 버튼을 누르면 해당 index를 가져와서 localStorage에서 삭제
6. edit 버튼을 누르면 update 변수 여부에 따라 update 또는 Add 실행
```

### 주요기능

- insertAdjacentHTML

```
- JS로 DOM 요소를 삽입할때 사용
```

- json.parse() / json.stringify()

```
- parse() : json 객체를 자바스크립트 객체로 반환
- stringify() : 자바스크립트 객체를 인자로 받아 json 객체를 반환

```

## 6. select_menu

### 구현 아이디어

```
1. 아래 화살표를 누르면 메뉴들이 나옴
1-1. 아래 화살표를 누르면 화살표 180도 뒤집어서 위 화살표로 바꿈
2. 검색어와 countries를 모두 toLowerCase() 하여 소문자로 바꾼 후 비교
3. startsWith()함수를 통해 비교하며
3-1. 같은 값이 있을 경우 <li> 태그를 통해 반환하여 그려줌
```

### 주요기능

- overflow-y : 위와 아래의 내용이 넘칠때 어떻게 할 것인지

```
overflow 의 속성은 총 4가지
- visible : 넘치는 내용은 밖으로 흘러 넘침
- hidden 스크롤바가 나타나지 않으며 넘치는 내용은 잘림
- scroll 내용이 잘리며 스크롤바가 나타남
- auto : 내용이 잘리며 필요시 스크롤바가 나타남
```

## 7. right_click_menu

### 구현 아이디어

```
1. 마우스 오른쪽을 클릭하면 메뉴가 나옴
1-1. addEventListener("contextmenu") 사용
2. 만약 브라우저 사이즈 - menu 크기보다 큰 위치를 클릭하면 지정된 곳에 menu를 띄움
3. 만약 브라우저 사이즈 - menu - select menu의 크기보다 큰 위치를 클릭하면 select menu는 좌측에 띄움
```

### 주요기능

- contextmenu : 마우스 오른쪽클릭이 됬을때 발생하는 이벤트

```
예시) document.addEventListener("contextmenu", () => {
       e.preventDefault();
      })  // 마우스 오른쪽 메뉴선택을 막음
```

## 8. price_range_slider

### 구현 아이디어

```
1.

```
