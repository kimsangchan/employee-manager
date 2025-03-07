import type { NextApiRequest, NextApiResponse } from 'next';
import { Employee } from '../../types';

// 더미 직원 데이터
const employees: Employee[] = [
  {
    id: 1,
    name: '김철수',
    email: 'kim.cs@company.com',
    phone: '010-1234-5678',
    position: '선임 개발자',
    department: '개발팀',
    team: '프론트엔드',
    joinDate: '2020-03-15',
    status: 'active'
  },
  {
    id: 2,
    name: '이영희',
    email: 'lee.yh@company.com',
    phone: '010-2345-6789',
    position: 'UX 디자이너',
    department: '디자인팀',
    team: 'UX/UI',
    joinDate: '2019-07-22',
    status: 'active'
  },
  {
    id: 3,
    name: '박지훈',
    email: 'park.jh@company.com',
    phone: '010-3456-7890',
    position: '백엔드 개발자',
    department: '개발팀',
    team: '백엔드',
    joinDate: '2021-01-10',
    status: 'active'
  },
  {
    id: 4,
    name: '최미영',
    email: 'choi.my@company.com',
    phone: '010-4567-8901',
    position: '마케팅 매니저',
    department: '마케팅팀',
    team: '디지털 마케팅',
    joinDate: '2018-11-05',
    status: 'onleave'
  },
  {
    id: 5,
    name: '정민우',
    email: 'jung.mw@company.com',
    phone: '010-5678-9012',
    position: '영업 담당자',
    department: '영업팀',
    team: '국내영업',
    joinDate: '2022-05-20',
    status: 'active'
  },
  {
    id: 6,
    name: '강지영',
    email: 'kang.jy@company.com',
    phone: '010-6789-0123',
    position: 'HR 매니저',
    department: '인사팀',
    team: '채용',
    joinDate: '2017-09-01',
    status: 'active'
  },
  {
    id: 7,
    name: '홍길동',
    email: 'hong.gd@company.com',
    phone: '010-7890-1234',
    position: '시니어 개발자',
    department: '개발팀',
    team: '모바일',
    joinDate: '2016-04-12',
    status: 'inactive'
  },
  {
    id: 8,
    name: '송민지',
    email: 'song.mj@company.com',
    phone: '010-8901-2345',
    position: '그래픽 디자이너',
    department: '디자인팀',
    team: '그래픽',
    joinDate: '2020-08-17',
    status: 'active'
  },
  {
    id: 9,
    name: '임현우',
    email: 'lim.hw@company.com',
    phone: '010-9012-3456',
    position: '데이터 분석가',
    department: '개발팀',
    team: '데이터',
    joinDate: '2019-12-05',
    status: 'active'
  },
  {
    id: 10,
    name: '오수진',
    email: 'oh.sj@company.com',
    phone: '010-0123-4567',
    position: '콘텐츠 마케터',
    department: '마케팅팀',
    team: '콘텐츠',
    joinDate: '2021-06-30',
    status: 'active'
  },
  {
    id: 11,
    name: '윤태호',
    email: 'yoon.th@company.com',
    phone: '010-9876-5432',
    position: '해외 영업 담당자',
    department: '영업팀',
    team: '해외영업',
    joinDate: '2018-03-22',
    status: 'active'
  },
  {
    id: 12,
    name: '서지은',
    email: 'seo.je@company.com',
    phone: '010-8765-4321',
    position: '경영 지원',
    department: '경영지원팀',
    team: '재무',
    joinDate: '2017-11-15',
    status: 'active'
  },
  {
    id: 13,
    name: '신동욱',
    email: 'shin.dw@company.com',
    phone: '010-7654-3210',
    position: '플랫폼 개발자',
    department: '개발팀',
    team: '인프라',
    joinDate: '2022-02-10',
    status: 'active'
  },
  {
    id: 14,
    name: '권혜진',
    email: 'kwon.hj@company.com',
    phone: '010-6543-2109',
    position: '제품 디자이너',
    department: '디자인팀',
    team: '제품',
    joinDate: '2020-05-07',
    status: 'onleave'
  },
  {
    id: 15,
    name: '남기현',
    email: 'nam.kh@company.com',
    phone: '010-5432-1098',
    position: '소셜 미디어 전문가',
    department: '마케팅팀',
    team: '소셜미디어',
    joinDate: '2019-09-20',
    status: 'active'
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Employee[] | { message: string }>
) {
  // 요청 방식이 GET인지 확인
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    return;
  }

  // 쿼리 파라미터에서 groupId 추출
  const { groupId } = req.query;
  
  // 쿼리 필터링
  let filteredEmployees = [...employees];
  
  if (groupId) {
    // 그룹 ID에 따라 직원 필터링 (간단한 매핑 규칙)
    const groupMap: { [key: string]: string } = {
      '1': '개발팀',
      '2': '디자인팀',
      '3': '마케팅팀',
      '4': '영업팀',
      '5': '인사팀',
      '6': '경영지원팀'
    };
    
    const department = groupMap[groupId as string];
    if (department) {
      filteredEmployees = employees.filter(emp => emp.department === department);
    }
  }

  // 응답 지연 시뮬레이션 (실제 API 호출처럼 보이게)
  setTimeout(() => {
    res.status(200).json(filteredEmployees);
  }, 800);
}