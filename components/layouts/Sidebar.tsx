import { useState } from 'react';
import { EmployeeGroup } from '../../types';

interface SidebarProps {
  groups: EmployeeGroup[];
  activeGroup: number;
  onGroupChange: (groupId: number) => void;
}

const Sidebar = ({ groups, activeGroup, onGroupChange }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`bg-white shadow-lg transition-all duration-300 h-screen ${isCollapsed ? 'w-16' : 'w-64'}`}>
      {/* 헤더 */}
      <div className="flex items-center justify-between p-4 border-b">
        {!isCollapsed && <h1 className="text-xl font-bold text-gray-800">직원 관리</h1>}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-md hover:bg-gray-100"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* 그룹 목록 */}
      <nav className="mt-4">
        <h2 className={`${isCollapsed ? 'sr-only' : 'px-4 text-sm font-semibold text-gray-600 mb-2'}`}>
          직원 그룹
        </h2>
        <ul>
          {groups.map((group) => (
            <li key={group.id}>
              <button
                onClick={() => onGroupChange(group.id)}
                className={`w-full text-left px-4 py-2 flex items-center ${
                  activeGroup === group.id ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' : 'hover:bg-gray-100'
                }`}
                aria-current={activeGroup === group.id ? 'page' : undefined}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                {!isCollapsed && (
                  <span className="flex-1">{group.name}</span>
                )}
                {!isCollapsed && (
                  <span className="bg-gray-200 text-gray-700 text-xs font-medium rounded-full px-2 py-0.5">
                    {group.count}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;