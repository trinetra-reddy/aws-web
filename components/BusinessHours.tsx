'use client'
import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const hours = [
  { day: 'Mon', open: '09:00 am', close: '06:00 pm' },
  { day: 'Tue', open: '09:00 am', close: '05:00 pm' },
  { day: 'Wed', open: '09:00 am', close: '05:00 pm' },
  { day: 'Thu', open: '09:00 am', close: '05:00 pm' },
  { day: 'Fri', open: '09:00 am', close: '05:00 pm' },
  { day: 'Sat', open: null, close: null },
  { day: 'Sun', open: null, close: null },
]

export default function BusinessHours() {
  const [expanded, setExpanded] = useState(false)
  const [todayIdx, setTodayIdx] = useState<number>(0)

  useEffect(() => {
    const idx = new Date().getDay() // Sunday = 0
    setTodayIdx(idx === 0 ? 6 : idx - 1)
  }, [])

  const today = hours[todayIdx]
  const isClosed = !today.open

  return (
    <div className="space-y-4">
      <h4 className="text-2xl font-bold text-blue-900 pt-5 pb-5">Hours</h4>

      {/* Today summary with toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-left text-base font-medium text-blue-800 hover:underline"
      >
        Today{' '}
        <span className={isClosed ? 'text-purple-600' : 'text-blue-900'}>
          {isClosed ? 'Closed' : `${today.open} – ${today.close}`}
        </span>
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {/* Full schedule */}
      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="text-sm space-y-1 pl-1"
          >
            {hours.map((h, i) => (
              <li
                key={i}
                className={`flex justify-between ${i === todayIdx || ['Sat', 'Sun'].includes(h.day)
                    ? 'font-bold'
                    : 'text-gray-700'
                  }`}
              >
                <span>{h.day}</span>
                <span>{h.open ? `${h.open} – ${h.close}` : 'Closed'}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}