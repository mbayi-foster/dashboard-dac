import { Banknote, GraduationCap, SlidersHorizontal, Users } from 'lucide-react';
import React from 'react';

export default function StatsGrid({ stats }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat : any, idx: any) => {
        let Icon =  SlidersHorizontal
        // if(stats.id==1){
        //   Icon=GraduationCap
        // }else if(stats.id==3){
        //   Icon=Banknote
        // }else if(stats.id==2){
        //   Icon=Users
        // }


        return (
          <div 
            key={idx} 
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-blue-500 bg-blue-100`}>
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