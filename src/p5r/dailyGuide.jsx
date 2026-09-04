import { useState, useEffect } from 'react';
import { aprilGuide } from '../../data/p5r/dailyApril';
import { useP5R } from './p5rcontext';
import './dailyGuide.css';

const STORAGE_KEYS = {
  COMPLETED_TASKS: 'p5r_completed_tasks',
  LAST_DAY_INDEX: 'p5r_last_day_index',
};

export default function DailyGuide() {
  // 1. Initialize selectedDayIndex from localStorage (defaults to 0)
  const [selectedDayIndex, setSelectedDayIndex] = useState(() => {
    const savedIndex = localStorage.getItem(STORAGE_KEYS.LAST_DAY_INDEX);
    if (savedIndex !== null) {
      const parsed = parseInt(savedIndex, 10);
      if (!isNaN(parsed) && parsed >= 0 && parsed < aprilGuide.length) {
        return parsed;
      }
    }
    return 0;
  });

  // 2. Initialize completedTasks from localStorage (defaults to {})
  const [completedTasks, setCompletedTasks] = useState(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEYS.COMPLETED_TASKS);
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch (e) {
        console.error('Failed to parse completed tasks from localStorage', e);
      }
    }
    return {};
  });

  const { updateStat } = useP5R();

  // 3. Persist completedTasks whenever state updates
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_TASKS, JSON.stringify(completedTasks));
  }, [completedTasks]);

  // 4. Persist selectedDayIndex whenever user switches days
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LAST_DAY_INDEX, selectedDayIndex.toString());
  }, [selectedDayIndex]);

  const currentDay = aprilGuide[selectedDayIndex];

  const toggleTask = (taskId, statReward) => {
    setCompletedTasks((prev) => {
      const isDone = !prev[taskId];

      // Auto-increment global social stats when checked off
      if (isDone && statReward) {
        Object.entries(statReward).forEach(([stat, amount]) => {
          updateStat(stat, amount);
        });
      }

      return { ...prev, [taskId]: isDone };
    });
  };

  return (
    <div className='daily-holder'>
      <div className="daily-planner">
        {/* Date Navigation Bar */}
        <div className="date-selector">
          {aprilGuide.map((day, index) => (
            <button
              key={day.date}
              className={`date-btn ${index === selectedDayIndex ? 'active' : ''}`}
              onClick={() => setSelectedDayIndex(index)}
            >
              <span className="date-num">{day.date}</span>
              <span className="day-name">{day.dayOfWeek}</span>
            </button>
          ))}
        </div>

        {/* Main Agenda Card */}
        <div className="agenda-card">
          {currentDay.summary && (
            <p className="day-summary">{currentDay.summary}</p>
          )}

          <div className="time-slots">
            {/* Daytime Section */}
            <div className="time-block">
              <h3>☀️ Daytime / After School</h3>
              {currentDay.day.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  isDone={!!completedTasks[task.id]}
                  onToggle={() => toggleTask(task.id, task.statReward)}
                />
              ))}
            </div>

            {/* Evening Section */}
            <div className="time-block">
              <h3>🌙 Evening</h3>
              {currentDay.night.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  isDone={!!completedTasks[task.id]}
                  onToggle={() => toggleTask(task.id, task.statReward)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskItem({ task, isDone, onToggle }) {
  return (
    <div className={`task-row ${isDone ? 'completed' : ''}`}>
      <input type="checkbox" checked={isDone} onChange={onToggle} />
      <div className="task-details">
        {task.type === 'confidant' && (
          <span className="tag confidant">
            {task.arcana} ({task.name} Rank {task.targetRank})
          </span>
        )}
        {task.type === 'classroom' && <span className="tag question">Classroom Question</span>}
        {task.type === 'crossword' && <span className="tag puzzle">Crossword</span>}

        <p className="task-label">
          {task.label || task.question || task.book || (task.answer ? `Answer: ${task.answer}` : "")}
        </p>

        {/* Dynamic Warning Badges */}
        {task.matchingPersonaRequired && (
          <span className="warning-badge">
            ⚠️ Carry matching <strong>{task.arcana}</strong> Persona
          </span>
        )}

        {/* Dynamic Stat Gain */}
        {task.statReward && (
          <div className="stat-badges">
            {Object.entries(task.statReward).map(([stat, val]) => (
              <span key={stat} className={`stat-chip ${stat}`}>
                +{val} {stat}
              </span>
            ))}
          </div>
        )}

        {/* Dialogue Help Callout */}
        {task.dialogue && (
          <div className="dialogue-box">
            <strong>Optimal Answers:</strong>
            <ul>
              {task.dialogue.map((d, i) => (
                <li key={i}>
                  {d.choice} <span className="points">(+{d.points})</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}