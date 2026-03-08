import React from 'react';

export default function StatsGrid({ stats }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat : any, idx: any) => {
        const Icon = stat.icon;
        return (
          <div 
            key={idx} 
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
              <Icon size={28} />
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {stat.title}
              </span>
              <span className="text-3xl font-black text-gray-900 leading-none mt-1">
                {stat.count}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}