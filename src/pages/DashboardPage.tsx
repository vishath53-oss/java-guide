import { useState } from 'react'
import {
  Flame,
  CheckCircle2,
  Target,
  Trophy,
  Sparkles,
  BookOpen,
  Calendar,
  Layers,
  ArrowRight,
} from 'lucide-react'
import {
  Card,
  Badge,
  Button,
  ProgressBar,
  Tabs,
  Modal,
  Tooltip,
  ErrorMessage,
  EmptyState,
  SectionHeading,
} from '@/components/common'

const statCards = [
  {
    label: 'Problems Solved',
    value: '34',
    sub: 'of 150 problems',
    icon: <CheckCircle2 size={18} className="text-emerald-400" />,
    badge: '+3 this week',
  },
  {
    label: 'Active Study Streak',
    value: '7',
    sub: 'consecutive days',
    icon: <Flame size={18} className="text-amber-400" />,
    badge: 'Personal Best',
  },
  {
    label: 'Current Course Month',
    value: 'Month 2',
    sub: 'OOP & Collections',
    icon: <Target size={18} className="text-blue-400" />,
    badge: 'On Track',
  },
  {
    label: 'Platform Ranking',
    value: '#142',
    sub: 'top 5% of learners',
    icon: <Trophy size={18} className="text-purple-400" />,
    badge: 'Silver Tier',
  },
]

const recentActivity = [
  { problem: 'Two Sum in Java', difficulty: 'Easy', date: '2 hours ago', solved: true, timeTaken: '14 mins' },
  { problem: 'Valid Parentheses', difficulty: 'Easy', date: 'Yesterday', solved: true, timeTaken: '9 mins' },
  { problem: 'Merge Intervals', difficulty: 'Medium', date: '2 days ago', solved: true, timeTaken: '26 mins' },
  { problem: 'Reverse Linked List', difficulty: 'Easy', date: '3 days ago', solved: true, timeTaken: '12 mins' },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAlert, setShowAlert] = useState(true)

  const dashboardTabs = [
    { id: 'overview', label: 'Overview', icon: <Layers size={15} /> },
    { id: 'activity', label: 'Recent Submissions', icon: <CheckCircle2 size={15} />, badge: '4' },
    { id: 'bookmarks', label: 'Saved Problems', icon: <BookOpen size={15} />, badge: '0' },
  ]

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Section Heading with Action */}
      <SectionHeading
        as="h1"
        title="Student Dashboard"
        badge={
          <Badge variant="blue" className="text-xs">
            Course Enrolled
          </Badge>
        }
        description="Monitor your six-month Java learning trajectory, review recent submissions, and stay on track for tech interviews."
        action={
          <div className="flex items-center gap-2">
            <Tooltip content="Set target completion milestones" placement="bottom">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsModalOpen(true)}
                leftIcon={<Sparkles size={14} />}
              >
                Set Study Goal
              </Button>
            </Tooltip>
          </div>
        }
      />

      {/* Reusable Alert / ErrorMessage Notification */}
      {showAlert && (
        <ErrorMessage
          variant="info"
          title="Daily Java Challenge is live"
          onDismiss={() => setShowAlert(false)}
        >
          Today's challenge focuses on <strong className="text-slate-100">Java HashMaps & Frequency Counting</strong>. Complete it to extend your 7-day streak!
        </ErrorMessage>
      )}

      {/* Tabs navigation */}
      <Tabs
        tabs={dashboardTabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {statCards.map((s) => (
              <Card key={s.label} hover className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-slate-400">
                    {s.icon}
                    <span className="text-xs font-medium">{s.label}</span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {s.badge}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-100 font-mono">
                    {s.value}
                  </span>
                  <span className="text-xs text-slate-400">{s.sub}</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Two-Column Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Progress overview */}
            <Card className="p-6 lg:col-span-2 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold text-slate-100">
                    6-Month Curriculum Progress
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Structured progression from Java Fundamentals to Advanced LeetCode Patterns
                  </p>
                </div>
                <Badge variant="violet">Month 2 / 6</Badge>
              </div>

              {/* Progress bars */}
              <div className="space-y-4 pt-2">
                <ProgressBar
                  value={23}
                  max={100}
                  label="Overall Curriculum Completion"
                  variant="blue"
                  size="md"
                  showLabel
                  showValue
                />

                <ProgressBar
                  value={85}
                  max={100}
                  label="Month 1: Java Basics, Syntax & Control Flow"
                  variant="success"
                  size="sm"
                  showLabel
                  showValue
                />

                <ProgressBar
                  value={45}
                  max={100}
                  label="Month 2: OOP, Interfaces & Java Collections"
                  variant="violet"
                  size="sm"
                  showLabel
                  showValue
                />

                <ProgressBar
                  value={0}
                  max={100}
                  label="Month 3: Recursion, Sorting & Searching"
                  variant="warning"
                  size="sm"
                  showLabel
                  showValue
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[var(--border-default)] text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-blue-400" />
                  Estimated course completion: October 2026
                </span>
                <span className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer">
                  View Syllabus &rarr;
                </span>
              </div>
            </Card>

            {/* Quick action card */}
            <Card className="p-6 flex flex-col justify-between space-y-4 bg-gradient-to-br from-blue-950/20 to-slate-900/80">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-base font-semibold text-slate-100 mb-1">
                  Ready to code today?
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Continue where you left off. Problem #4 (Merge Intervals) is scheduled for today's practice session.
                </p>
              </div>

              <div className="space-y-2">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => (window.location.href = '/workspace')}
                  rightIcon={<ArrowRight size={14} />}
                >
                  Resume Workspace
                </Button>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => (window.location.href = '/problems')}
                >
                  Browse Problem Bank
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Tab 2: Recent Activity */}
      {activeTab === 'activity' && (
        <Card className="overflow-hidden">
          <div className="px-5 py-4 border-b border-[var(--border-default)] bg-[var(--bg-elevated)]/30">
            <h3 className="text-sm font-semibold text-slate-200">
              Verified Solution History
            </h3>
          </div>
          <div className="divide-y divide-[var(--border-default)]">
            {recentActivity.map((a, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-5 py-4 gap-3 hover:bg-[var(--bg-elevated)]/40 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-200 truncate">
                      {a.problem}
                    </h4>
                    <span className="text-xs text-slate-500">
                      Execution time: {a.timeTaken} · Java 21
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Badge variant={a.difficulty.toLowerCase() as 'easy' | 'medium' | 'hard'}>
                    {a.difficulty}
                  </Badge>
                  <span className="text-xs text-slate-500 font-mono">{a.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Tab 3: Empty State Demo */}
      {activeTab === 'bookmarks' && (
        <EmptyState
          icon={<BookOpen size={24} />}
          title="No bookmarked problems yet"
          description="While practicing or reviewing problems in the problem library, click the bookmark icon to save challenging problems for later revision."
          action={
            <Button
              variant="secondary"
              size="sm"
              onClick={() => (window.location.href = '/problems')}
            >
              Explore Problems
            </Button>
          }
        />
      )}

      {/* Study Goal Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Set Weekly Practice Goal"
        description="Choose your weekly target to maintain pace with the 6-month curriculum."
        footer={
          <>
            <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" onClick={() => setIsModalOpen(false)}>
              Save Goal
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <p className="text-xs text-slate-400">
            Recommended pace for full-time students or working professionals is 5 to 7 Java problems per week.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { title: 'Casual', target: '3 / week', desc: 'Light pace' },
              { title: 'Standard', target: '5 / week', desc: 'Recommended' },
              { title: 'Intensive', target: '10 / week', desc: 'Fast track' },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] hover:border-blue-500/50 cursor-pointer text-center"
              >
                <div className="text-xs font-bold text-slate-200">{p.title}</div>
                <div className="text-sm font-mono text-blue-400 font-semibold my-1">
                  {p.target}
                </div>
                <div className="text-[10px] text-slate-500">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  )
}
