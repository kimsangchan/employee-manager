import { useState } from 'react';
import { Employee } from '../../types';

interface EmployeeFilterProps {
  employees: Employee[];
  departmentFilter: string[];
  setDepartmentFilter: (departments: string[]) => void;
  statusFilter: string[];
  setStatusFilter: (statuses: string[]) => void;
}

const EmployeeFilter = ({
  employees,
  departmentFilter,
  setDepartmentFilter,
  statusFilter,
  setStatusFilter
}: EmployeeFilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // 모든 부서 목록 추출 (중복 제거)
  const departments = [...new Set(employees.map(emp => emp.department))];
  
  // 모든 상태 목록 (고정)
  const statuses = [
    { value: 'active', label: '재직 중' },
    { value: 'inactive', label: '퇴사' },
    { value: 'onleave', label: '휴직 중' }
  ];

  // 부서 필터 토글
  const toggleDepartmentFilter = (department: string) => {
    if (departmentFilter.includes(department)) {
      setDepartmentFilter(departmentFilter.filter(d => d !== department));
    } else {
      setDepartmentFilter([...departmentFilter, department]);
    }
  };

  // 상태 필터 토글
  const toggleStatusFilter = (status: string) => {
    if (statusFilter.includes(status)) {
      setStatusFilter(statusFilter.filter(s => s !== status));
    } else {
      setStatusFilter([...statusFilter, status]);
    }
  };

  // 모든 필터 초기화
  const resetFilters = () => {
    setDepartmentFilter([]);
    setStatusFilter([]);
  };

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="text-gray-600 flex items-center text-sm focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
          </svg>
          필터
          {(departmentFilter.length > 0 || statusFilter.length > 0) && (
            <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
              {departmentFilter.length + statusFilter.length}
            </span>
          )}
        </button>
        
        {(departmentFilter.length > 0 || statusFilter.length > 0) && (
          <button
            onClick={resetFilters}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            필터 초기화
          </button>
        )}
      </div>

      {/* 필터 패널 */}
      {isFilterOpen && (
        <div className="mt-3 p-4 bg-gray-50 rounded-md border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 부서 필터 */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">부서</h3>
              <div className="space-y-2">
                {departments.map(department => (
                  <label key={department} className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      checked={departmentFilter.includes(department)}
                      onChange={() => toggleDepartmentFilter(department)}
                    />
                    <span className="ml-2 text-sm text-gray-700">{department}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 상태 필터 */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">상태</h3>
              <div className="space-y-2">
                {statuses.map(status => (
                  <label key={status.value} className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      checked={statusFilter.includes(status.value)}
                      onChange={() => toggleStatusFilter(status.value)}
                    />
                    <span className="ml-2 text-sm text-gray-700">{status.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeFilter;