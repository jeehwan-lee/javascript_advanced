# 자바스크립트 Advanced 프로젝트 - JeeHwan

---

## 목차

1. save_text

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
