# CDRI (프로젝트 이름)

## 프로젝트 개요

CDRI는 과제 테스트

## 기술 스택

- React 19
- TypeScript
- Vite
- React Query (TanStack Query)
- React Router DOM
- Styled Components
- Axios

## 실행 방법 및 환경 설정

### 필요 조건

- Node.js (최신 LTS 버전 권장)
- npm 또는 yarn

### 설치 방법

1. 저장소 클론

```bash
git clone https://github.com/HiJackCoke/CDRI.git
```

2. 의존성 설치

```bash
npm install
```

3. 개발 서버 실행

```bash
npm run dev
```

4. 프로덕션 빌드

```bash
npm run build
```

5. .env 설정

```bash
.env.example 파일을 .env 파일로 변경 후 KEY 입력
```

## 폴더 구조

```
src/
├── components/    # 재사용 가능한 컴포넌트
├── models/        # 타입 정의 및 인터페이스
├── services/      # API 통신 및 비즈니스 로직
├── libs/          # 라이브러리 커스텀 및 Provider 로직
├── layout/        # 레이아웃 관련 컴포넌트
├── styles/        # 전역 스타일 및 테마
├── pages/         # 페이지 컴포넌트
├── routes.tsx     # 라우팅 설정
└── main.tsx       # 애플리케이션 진입점
```

## 특이사항

### 추가 라이브러리

#### vite-react-routes

- [React + Vite에서 page를 자동으로 라우팅 하기 위해 직접 만든 라이브러리 입니다](https://www.npmjs.com/package/vite-react-routes).

### 미구현 내용

#### 구매하기 버튼 클릭시 새 탭이 추가되면서 해당 책의 상세페이지 (다음 책)으로 이동

- 해당 내용 이해하기 여러움이 있어 구현하지 못했습니다.
- 상세페이지 디자인 가이드 없어서 페이지를 구현을 해야하는지에 대한 의문이 있었습니다.
- "다음 책" 이라는 페이지를 띄우면 되는 것인가 의문을 가졌지만 해당 페이지를 찾을 수 없었습니다.
