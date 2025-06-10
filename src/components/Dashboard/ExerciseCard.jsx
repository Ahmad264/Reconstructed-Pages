export default function ExerciseCard({ title, description, difficulty, progress }) {
  const difficultyColors = {
    beginner: 'bg-green-500',
    intermediate: 'bg-yellow-500',
    advanced: 'bg-red-500'
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all">
      <div className="flex justify-between mb-4">
        <span className={`${difficultyColors[difficulty]} px-3 py-1 rounded-full text-xs`}>
          {difficulty}
        </span>
        <span className="text-gray-400">60%</span>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="h-2 bg-gray-700 rounded-full">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}