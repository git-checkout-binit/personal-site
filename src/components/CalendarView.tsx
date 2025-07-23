'use client';

import { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
  location: string;
  note: string;
  color: string;
  display?: string;
}

interface CalendarViewProps {
  events: CalendarEvent[];
}

export function CalendarView({ events }: CalendarViewProps) {
  const calendarRef = useRef<FullCalendar>(null);

  // Find current location based on today's date (excluding background events)
  const getCurrentLocationEvent = () => {
    const today = new Date().toISOString().split('T')[0];
    
    // First check for specific events (non-background)
    const specificEvent = events.find(event => {
      if (event.display === 'background') return false;
      const eventStart = event.start;
      const eventEnd = event.end || event.start;
      return today >= eventStart && today <= eventEnd;
    });
    
    if (specificEvent) return specificEvent;
    
    // If no specific event, check background events (like NYC default)
    return events.find(event => {
      if (event.display !== 'background') return false;
      const eventStart = event.start;
      const eventEnd = event.end || event.start;
      return today >= eventStart && today <= eventEnd;
    });
  };

  const currentEvent = getCurrentLocationEvent();

  const handleEventClick = (clickInfo: { event: { id: string } }) => {
    const event = clickInfo.event;
    const eventData = events.find(e => e.id === event.id);
    
    if (eventData) {
      alert(`📍 ${eventData.location}\n📝 ${eventData.note}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Current Location Header */}
      {currentEvent && (
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-medium">
              Currently in <strong>{currentEvent.location}</strong>
            </span>
          </div>
          {currentEvent.note && (
            <p className="text-muted-foreground mt-2 italic">
              {currentEvent.note}
            </p>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="mb-6 flex flex-wrap gap-3 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-500 rounded"></div>
          <span className="text-sm text-muted-foreground">Home Base (NYC)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-cyan-500 rounded"></div>
          <span className="text-sm text-muted-foreground">Travel</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded"></div>
          <span className="text-sm text-muted-foreground">Family</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span className="text-sm text-muted-foreground">Events</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded"></div>
          <span className="text-sm text-muted-foreground">Holidays</span>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-background border border-border rounded-lg p-6 shadow-lg">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleEventClick}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
          }}
          height="auto"
          eventDisplay="block"
          dayMaxEvents={3}
          moreLinkClick="popover"
          eventMouseEnter={(info) => {
            info.el.style.cursor = 'pointer';
          }}
          dayCellClassNames={(arg) => {
            const today = new Date();
            const cellDate = arg.date;
            const isToday = cellDate.toDateString() === today.toDateString();
            const isPast = cellDate < today && !isToday;
            
            let classes = 'hover:bg-muted/50 transition-colors';
            if (isPast) {
              classes += ' opacity-40 bg-muted/20';
            }
            return classes;
          }}
          eventClassNames="cursor-pointer hover:opacity-80 transition-opacity"
          dayCellDidMount={(arg) => {
            const today = new Date();
            const cellDate = arg.date;
            const isToday = cellDate.toDateString() === today.toDateString();
            const isPast = cellDate < today && !isToday;
            
            if (isPast) {
              arg.el.style.color = '#9CA3AF';
              arg.el.style.backgroundColor = 'rgba(156, 163, 175, 0.1)';
            }
          }}
        />
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>🗓️ Click on events for more details</p>
      </div>
    </div>
  );
}