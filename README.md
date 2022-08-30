# 자바스크립트 Advanced 프로젝트 - JeeHwan

---

## 목차

1. save_text
2. image_editor

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
