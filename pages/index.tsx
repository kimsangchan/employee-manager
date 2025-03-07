import { useState, useEffect } from 'react';
import Sidebar from '../components/layouts/Sidebar';
import EmployeeList from '../components/employees/EmployeeList';
import { EmployeeGroup } from '../types';

export default function Home() {
  const [groups, setGroups] = useState<EmployeeGroup[]>([]);
  const [activeGroup, setActiveGroup] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployeeGroups = async () => {
      try {
        const response = await fetch('/api/employee-groups');
        if (!response.ok) {
          throw new Error('직원 그룹 데이터를 가져오는데 실패했습니다.');
        }
        const data = await response.json();
        setGroups(data);
        
        // 첫 번째 그룹을 기본 선택
        if (data.length > 0) {
          setActiveGroup(data[0].id);
        }
        
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeGroups();
  }, []);

  const handleGroupChange = (groupId: number) => {
    setActiveGroup(groupId);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600">데이터를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded max-w-md" role="alert">
          <p className="font-bold">에러 발생</p>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
          >
            다시 시도
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        groups={groups}
        activeGroup={activeGroup}
        onGroupChange={handleGroupChange}
      />
      <EmployeeList groupId={activeGroup} />
    </div>
  );
}