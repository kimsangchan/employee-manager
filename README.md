# 직원 관리 UI (Employee Management UI)

Next.js와 Tailwind CSS로 구현한 반응형 직원 관리 시스템 입니다. 이 프로젝트는 직원 목록을 조회하고, 필터링하여 관리할 수 있는 UI를 제공합니다.

## 기술 스택

- **프론트엔드**: Next.js, TypeScript, Tailwind CSS
- **백엔드**: Next.js API Routes
- **데이터**: 더미 데이터 (실제 구현 시 데이터베이스 연동 필요)

## 주요 기능

- 좌측 사이드바 - 직원 그룹별 목록 표시
- 직원 목록 - 선택한 그룹에 속한 직원 정보 표시
- 검색 및 필터링 - 이름, 직책, 부서 등으로 직원 검색
- 정렬 - 각 칼럼별 오름차순/내림차순 정렬
- 페이지네이션 - 페이지 단위로 직원 목록 탐색
- 반응형 디자인 - 모바일, 태블릿, 데스크탑 화면 지원

## 설치 방법

1. 저장소 클론

```bash
git clone https://github.com/yourusername/employee-management-ui.git
cd employee-management-ui
```

2. 종속성 설치

```bash
npm install
# 또는
yarn install
```

3. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

4. 브라우저에서 다음 주소로 접속

```
http://localhost:3000
```

## 프로젝트 구조

```
employee-management-ui/
├── components/             # 컴포넌트 폴더
│   ├── employees/          # 직원 관련 컴포넌트
│   ├── layouts/            # 레이아웃 컴포넌트
│   └── ui/                 # UI 컴포넌트
├── pages/                  # 페이지 폴더
│   ├── api/                # API 라우트
│   ├── _app.tsx            # App 컴포넌트
│   └── index.tsx           # 메인 페이지
├── public/                 # 정적 파일
├── styles/                 # 스타일 파일
├── types/                  # 타입 정의
├── package.json            # 패키지 설정
└── README.md               # 프로젝트 설명
```

## 확장 및 추가 개발 방향

1. **백엔드 연동**: 실제 데이터베이스 연동 (MongoDB, PostgreSQL 등)
2. **사용자 인증**: 로그인/로그아웃 기능 추가
3. **직원 상세 정보**: 직원 클릭 시 상세 정보 표시
4. **직원 정보 수정**: CRUD 기능 구현
5. **대시보드**: 통계 및 분석 화면 추가
6. **테스트 코드**: 단위 테스트 및 통합 테스트 추가

## 라이선스

MIT

## 연락처

문의사항이 있으시면 [devmail@nate.com](mailto:devmail@nate.com)로 연락주세요.
