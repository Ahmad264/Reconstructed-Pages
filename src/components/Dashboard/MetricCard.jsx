export default function MetricCard({ icon, title, value, color }) {
  return (
    <div className={`bg-gradient-to-br ${color} p-1 rounded-2xl shadow-xl`}>
      <div className="bg-gray-900 rounded-xl p-6 h-full">
        <div className="flex items-center gap-4">
          <span className="text-4xl">{icon}</span>
          <div>
            <h3 className="text-gray-400 text-sm">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}