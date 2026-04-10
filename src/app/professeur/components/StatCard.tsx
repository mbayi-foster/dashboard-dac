export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  colorClass,
  bgClass,
  subtitleColor,
}: any) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-6">
      <div className={`${bgClass} ${colorClass} p-4 rounded-2xl`}>
        <Icon size={28} />
      </div>
      <div>
        <h3 className="text-slate-500 text-sm font-medium mb-1">{title}</h3>
        <p className="text-3xl font-bold text-slate-800 mb-1">{value}</p>
        <p className={`text-xs font-medium ${subtitleColor}`}>{subtitle}</p>
      </div>
    </div>
  );
}
