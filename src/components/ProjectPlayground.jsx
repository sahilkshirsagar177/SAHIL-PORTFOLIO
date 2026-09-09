import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle,
  Plus,
  Trash2,
  Award,
  BarChart3,
  Film,
  Tv,
  Filter,
  TrendingUp,
  Flame,
  CheckCircle2,
  RefreshCw,
  Clock,
  Play,
  Share2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectPlayground({ activeProject = 'purple-invigi-date' }) {
  const [selectedDemo, setSelectedDemo] = useState(activeProject);

  // Demo 1 State: Purple Task & Reward Simulator
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete LeetCode Graph Traversal Problem', completed: true, points: 50 },
    { id: 2, text: 'Review Node.js & Express REST API Architecture', completed: true, points: 40 },
    { id: 3, text: 'Finalize Purple SaaS Shared Tracking Endpoint', completed: false, points: 60 },
    { id: 4, text: 'Perform Python Exploratory Data Analysis EDA', completed: false, points: 45 },
  ]);
  const [newTaskInput, setNewTaskInput] = useState('');
  const [streakDays, setStreakDays] = useState(14);

  const totalPoints = tasks
    .filter((t) => t.completed)
    .reduce((sum, t) => sum + t.points, 0);

  const completionPercentage = Math.round(
    (tasks.filter((t) => t.completed).length / (tasks.length || 1)) * 100
  );

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const newState = !t.completed;
          if (newState) {
            // Trigger joyful mini-confetti
            try {
              confetti({
                particleCount: 25,
                spread: 40,
                origin: { y: 0.8 },
                colors: ['#2dd4bf', '#a855f7', '#38bdf8'],
              });
            } catch (e) {}
          }
          return { ...t, completed: newState };
        }
        return t;
      })
    );
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: newTaskInput.trim(),
        completed: false,
        points: 50,
      },
    ]);
    setNewTaskInput('');
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // Demo 2 State: Netflix Content Analysis Explorer
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const netflixData = [
    { title: 'Stranger Things', type: 'TV Show', releaseYear: 2022, country: 'United States', genre: 'Sci-Fi & Fantasy', rating: '8.7', duration: '4 Seasons' },
    { title: 'The Dark Knight', type: 'Movie', releaseYear: 2008, country: 'United States', genre: 'Action & Thriller', rating: '9.0', duration: '152 min' },
    { title: 'Money Heist', type: 'TV Show', releaseYear: 2021, country: 'Spain', genre: 'Crime & Drama', rating: '8.2', duration: '5 Seasons' },
    { title: 'Interstellar', type: 'Movie', releaseYear: 2014, country: 'United States', genre: 'Sci-Fi & Fantasy', rating: '8.6', duration: '169 min' },
    { title: 'Sacred Games', type: 'TV Show', releaseYear: 2019, country: 'India', genre: 'Crime & Drama', rating: '8.5', duration: '2 Seasons' },
    { title: 'RRR', type: 'Movie', releaseYear: 2022, country: 'India', genre: 'Action & Thriller', rating: '8.8', duration: '182 min' },
    { title: 'Squid Game', type: 'TV Show', releaseYear: 2021, country: 'South Korea', genre: 'Action & Thriller', rating: '8.0', duration: '1 Season' },
    { title: 'Inception', type: 'Movie', releaseYear: 2010, country: 'United States', genre: 'Sci-Fi & Fantasy', rating: '8.8', duration: '148 min' },
  ];

  const filteredNetflix = netflixData.filter((item) => {
    const matchType = selectedCategory === 'All' || item.type === selectedCategory;
    const matchGenre = selectedGenre === 'All' || item.genre === selectedGenre;
    return matchType && matchGenre;
  });

  const movieCount = netflixData.filter((d) => d.type === 'Movie').length;
  const tvCount = netflixData.filter((d) => d.type === 'TV Show').length;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/95 to-[#090e1a]/95 border border-teal-500/30 backdrop-blur-2xl shadow-2xl">
      
      {/* Top Demo Switcher Navigation */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-teal-500/10 text-teal-400 border border-teal-500/30 mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIVE INTERACTIVE LAB & SIMULATOR</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
            Project Architecture in Action
          </h3>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setSelectedDemo('purple-invigi-date')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              selectedDemo === 'purple-invigi-date'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Purple – Invigi-Date Demo</span>
          </button>

          <button
            onClick={() => setSelectedDemo('netflix-analysis')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              selectedDemo === 'netflix-analysis'
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md shadow-teal-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Netflix EDA Explorer Demo</span>
          </button>
        </div>
      </div>

      {/* DEMO 1: Purple Task & Reward SaaS Simulator */}
      {selectedDemo === 'purple-invigi-date' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <span className="text-slate-400 block text-[11px] font-mono">Current Accountability Streak</span>
                <span className="font-bold text-slate-100 text-base">{streakDays} Consecutive Days 🔥</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <span className="text-slate-400 block text-[11px] font-mono">Reward Tokens Earned</span>
                <span className="font-bold text-amber-400 text-base">{totalPoints} PTS 🪙</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px] font-mono">Sprint Completion</span>
                <span className="font-bold text-emerald-400 text-base">{completionPercentage}%</span>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div>
            <div className="flex justify-between text-xs font-mono text-slate-400 mb-1.5">
              <span>Accountability Goal Threshold</span>
              <span>{tasks.filter((t) => t.completed).length} / {tasks.length} Done</span>
            </div>
            <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          {/* Add Task Input Form */}
          <form onSubmit={addTask} className="flex gap-2">
            <input
              type="text"
              value={newTaskInput}
              onChange={(e) => setNewTaskInput(e.target.value)}
              placeholder="Add a new goal or milestone to simulate reward engine..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold flex items-center gap-1.5 transition-colors shadow-lg shadow-purple-600/20"
            >
              <Plus className="w-4 h-4" />
              <span>Add Goal</span>
            </button>
          </form>

          {/* Task List */}
          <div className="space-y-2.5">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all duration-200 ${
                  task.completed
                    ? 'bg-purple-950/15 border-purple-500/40 text-slate-300'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                      task.completed
                        ? 'bg-purple-600 border-purple-500 text-white'
                        : 'border-slate-700 bg-slate-900'
                    }`}
                  >
                    {task.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <span className={`text-sm font-medium ${task.completed ? 'line-through text-slate-400' : ''}`}>
                    {task.text}
                  </span>
                </div>

                <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    +{task.points} pts
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-slate-500 hover:text-red-400 p-1 transition-colors"
                    title="Delete item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2 pt-2 border-t border-slate-800">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>Interactive simulation demonstrating state management & reward logic built for Purple – Invigi-Date SaaS.</span>
          </div>
        </div>
      )}

      {/* DEMO 2: Netflix Exploratory Data Analysis & Filtering Simulator */}
      {selectedDemo === 'netflix-analysis' && (
        <div className="space-y-6">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 block">Total Analyzed</span>
              <span className="text-lg font-bold text-slate-100">{netflixData.length} Titles</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] font-mono text-cyan-400 block">Movies vs TV Ratio</span>
              <span className="text-lg font-bold text-cyan-300">50% / 50%</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] font-mono text-amber-400 block">Top Avg Rating</span>
              <span className="text-lg font-bold text-amber-300">8.6 ⭐</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] font-mono text-teal-400 block">Active Data Pipeline</span>
              <span className="text-lg font-bold text-teal-300">Python / Pandas</span>
            </div>
          </div>

          {/* Interactive Filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-mono text-slate-300 font-semibold">Filter Dataset:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {['All', 'Movie', 'TV Show'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedCategory(type)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    selectedCategory === type
                      ? 'bg-teal-500 text-white'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {type}
                </button>
              ))}

              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="px-3 py-1 rounded-lg text-xs bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-teal-500"
              >
                <option value="All">All Genres</option>
                <option value="Action & Thriller">Action & Thriller</option>
                <option value="Sci-Fi & Fantasy">Sci-Fi & Fantasy</option>
                <option value="Crime & Drama">Crime & Drama</option>
              </select>
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900 text-slate-400 font-mono uppercase text-[10px] border-b border-slate-800">
                <tr>
                  <th className="p-3">Title</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Genre</th>
                  <th className="p-3">Country</th>
                  <th className="p-3">Release Year</th>
                  <th className="p-3">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredNetflix.map((row) => (
                  <tr key={row.title} className="hover:bg-slate-900/50 transition-colors">
                    <td className="p-3 font-semibold text-slate-100 flex items-center gap-2">
                      {row.type === 'Movie' ? <Film className="w-3.5 h-3.5 text-cyan-400" /> : <Tv className="w-3.5 h-3.5 text-purple-400" />}
                      <span>{row.title}</span>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${row.type === 'Movie' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-purple-500/10 text-purple-400'}`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="p-3">{row.genre}</td>
                    <td className="p-3">{row.country}</td>
                    <td className="p-3 font-mono">{row.releaseYear}</td>
                    <td className="p-3 font-mono text-amber-400 font-bold">{row.rating} ⭐</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2 pt-2 border-t border-slate-800">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>Interactive dataset simulation showing Python-based exploratory data analysis techniques & trend distributions.</span>
          </div>
        </div>
      )}

    </div>
  );
}
