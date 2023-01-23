# 투두 리스트 백엔드 서버 (DB)

## 목차
1. [기술 스택](#기술-스택)
2. [About project](#about-project)
3. [실행 방법](#실행-방법)
4. [디렉토리 구조](#디렉토리-구조)
<br/>

## 기술 스택
- MySQL (SQL)
- Express (Node.js)
- Sequelize
<br/>

## About project
#### 1. 투두 리스트 데이터베이스, API 서버 구현하기

#### 2. 기능 구현
- 투두 리스트 관리 : 사용자별 투두 리스트 조회, 개별 투두 조회, 투두 추가, 투두 수정, 투두 완료, 투두 삭제
- 사용자 관리 : 회원 가입, 로그인, 사용자 정보 수정, 탈퇴 기능

#### 3. 프로젝트 구성
- 핵심 비즈니스 로직을 작성하는 컨트롤러와 페이지 경로를 설정하는 라우터를 분리하여, 프로젝트 디렉토리 구성

#### 4. 서비스 화면 미리보기
- POST /todo (사용자별 투두 리스트 조회)
  ```json
    Content-Type: application/json

    {
      "user_id": 1
    }
  ```
  ```json
    [
      {
        "id": 17,
        "title": "제목1",
        "description": "설명1",
        "repetition": "[0]",
        "checked": false,
        "done": false,
        "user_id": 1
      },
      {
        "id": 18,
        "title": "제목2",
        "description": "설명2",
        "repetition": "[0, 5]",
        "checked": false,
        "done": false,
        "user_id": 1
      }
    ]
  ```

- GET todo/17 (개별 투두 조회)
  ```json
    {
      "id": 17,
      "title": "제목1",
      "description": "설명1",
      "repetition": "[0]",
      "checked": false,
      "done": false,
      "user_id": 1
    }
  ```

- POST /todo/add (투두 추가)
  ```json
    Content-Type: application/json

    {
      "title": "제목3",
      "description": "설명3",
      "repetition": "[]",
      "checked": false,
      "done": false,
      "user_id": 2
    }
  ```
  ```json
    {
      "message": "투두가 추가되었습니다"
    }
  ```

- PUT /todo/17 (투두 수정, 투두 완료)
  ```json
    Content-Type: application/json

    {
      "done": true
    }
  ```
  ```json
    {
      "id": 17,
      "title": "제목1",
      "description": "설명1",
      "repetition": "[0]",
      "checked": false,
      "done": true,
      "user_id": 1
    }
  ```

- DELETE /todo/18 (투두 삭제)
  ```json
    {
      "message": "할 일 ID_18 삭제되었습니다"
    }
  ```

- POST /user/signup (회원 가입)
  ```json
    Content-Type: application/json

    {
      "email": "hello5@naver.com",
      "password": "hello5"
    }
  ```
  ```json
    {
      "id": 7
    }
  ```

- POST /user/signin (로그인)
  ```json
    Content-Type: application/json

    {
      "email": "hello1@naver.com",
      "password": "hello1"
    }
  ```
  ```json
    {
      "id": 1
    }
  ```

- PUT /user (사용자 정보 수정)
  ```json
    Content-Type: application/json

    {
      "id": 5,
      "email": "hello33@naver.com",
      "password": "hello33"
    } 
  ```
  ```json
    {
      "message": "사용자 정보가 변경되었습니다"
    }
  ```

- DELETE /user/6 (탈퇴)
  ```json
    {
      "message": "사용자 탈퇴가 완료되었습니다"
    }
  ```
<br/>

## 실행 방법
#### 1. repository clone
```
$ git clone https://github.com/MINYUKYUNG/todo-api-server.git
```

#### 2. dependencies install
```
npm install
```

#### 3. project start
```
npm run start
```
<br/>

## 디렉토리 구조
| 디렉토리 | 구분 |
| -- | -- |
| config | 데이터베이스(DB) 접속에 관한, 각종 설정이 들어있는 디렉토리 |
| controllers | 데이터를 컨트롤하는 함수들이 있는 파일들이 들어있는 디렉토리 |
| migrations | 데이터베이스 내부에서 일어나는 모든 변경사항을 저장하는 파일들이 들어있는 디렉토리 |
| models | 데이터베이스의 각 테이블 정보 및 필드타입을 정의하고, 하나의 객체로 모으는 디렉토리 |
| routers | 기능별로 url 주소를 연결시킨 라우터 파일이 들어있는 디렉토리 |
