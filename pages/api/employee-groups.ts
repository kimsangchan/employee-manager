import type { NextApiRequest, NextApiResponse } from 'next';
import { EmployeeGroup } from '../../types';

// 더미 직원 그룹 데이터
const employeeGroups: EmployeeGroup[] = [
  { id: 1, name: '개발팀', count: 24 },
  { id: 2, name: '디자인팀', count: 12 },
  { id: 3, name: '마케팅팀', count: 8 },
  { id: 4, name: '영업팀', count: 15 },
  { id: 5, name: '인사팀', count: 6 },
  { id: 6, name: '경영지원팀', count: 10 }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmployeeGroup[]>
) {
  // 요청 방식이 GET인지 확인
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  // 응답 지연 시뮬레이션 (실제 API 호출처럼 보이게)
  setTimeout(() => {
    res.status(200).json(employeeGroups);
  }, 500);
}