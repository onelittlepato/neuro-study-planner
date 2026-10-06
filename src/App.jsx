import React, { useState } from 'react';
import { Calendar, PlusCircle, CheckCircle2, BookOpen, Clock, AlertCircle } from 'lucide-react';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Read Cognitive Psychology Chapter 3', course: 'Psych 101', dueDate: '2026-10-10', status: 'todo' },
    { id: 2, title: 'Calculus Problem Set 2', course: 'Math 201', dueDate: '2026-10-12', status: 'in-progress' },
  ]);

  const [newTask, setNewTask] = useState({ title: '', course: '', dueDate: '' });
  const [activeTab, setActiveTab] = useState('timeline');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.title) return;
    setTasks([...tasks, { id: Date.now(), ...newTask, status: 'todo' }]);
    setNewTask({ title: '', course: '', dueDate: '' });
  };

  const toggleStatus = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: t.status === 'done' ? 'todo' : 'done' } : t));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header Section */}
        <header className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">University Flow Anchor</h1>
            <p className="text-sm text-slate-500">A low-friction, calm space to map your semester timeline.</p>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button 
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === 'timeline' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Visual Timeline
            </button>
            <button 
              onClick={() => setActiveTab('add')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === 'add' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              + Quick Add
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="space-y-6">
          {activeTab === 'add' ? (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-indigo-500" /> Quick-Add Assignment or Exam
              </h2>
              <form onSubmit={handleAddTask} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">What do you need to do?</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Essay draft, Physics midterm..."
                    value={newTask.title}
                    onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Course Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Chemistry 102"
                      value={newTask.course}
                      onChange={(e) => setNewTask({...newTask, course: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Due Date</label>
                    <input 
                      type="date" 
                      value={newTask.dueDate}
                      onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
                    />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-medium py-3 rounded-xl hover:bg-indigo-700 transition shadow-sm"
                >
                  Save to Timeline
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-indigo-500" /> Upcoming Roadmap
                </h2>
                <span className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-medium">
                  {tasks.filter(t => t.status !== 'done').length} pending tasks
                </span>
              </div>

              <div className="space-y-3">
                {tasks.map((task) => (
                  <div 
                    key={task.id} 
                    className={`p-5 rounded-2xl border transition flex items-center justify-between gap-4 bg-white ${task.status === 'done' ? 'opacity-60 border-slate-100' : 'border-slate-200 shadow-sm'}`}
                  >
                    <div className="flex items-start gap-3">
                      <button 
                        onClick={() => toggleStatus(task.id)}
                        className="mt-1 text-slate-400 hover:text-indigo-600 transition"
                      >
                        <CheckCircle2 className={`w-6 h-6 ${task.status === 'done' ? 'text-emerald-500 fill-emerald-50' : ''}`} />
                      </button>
                      <div>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                          {task.course || 'General'}
                        </span>
                        <h3 className={`font-medium text-slate-800 mt-1 ${task.status === 'done' ? 'line-through text-slate-400' : ''}`}>
                          {task.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{task.dueDate || 'No date set'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
