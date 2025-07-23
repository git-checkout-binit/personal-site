'use client';

import { useRef, useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Find current location
  const getCurrentLocationEvent = () => {
    const today = new Date().toISOString().split('T')[0];
    
    const specificEvent = events.find(event => {
      if (event.display === 'background') return false;
      const eventStart = event.start;
      const eventEnd = event.end || event.start;
      return today >= eventStart && today <= eventEnd;
    });
    
    if (specificEvent) return specificEvent;
    
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
    
    if (eventData && eventData.display !== 'background') {
      alert(`${eventData.location}\n${eventData.note}`);
    }
  };

  // Get upcoming events for mobile
  const getUpcomingEvents = () => {
    const today = new Date();
    return events
      .filter(event => event.display !== 'background')
      .filter(event => new Date(event.start) >= today)
      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
      .slice(0, 8);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const isThisYear = date.getFullYear() === today.getFullYear();
    
    return date.toLocaleDateString('en-US', { 
      month: 'numeric', 
      day: 'numeric',
      year: isThisYear ? undefined : '2-digit'
    });
  };

  const formatDateRange = (start: string, end?: string) => {
    if (!end) return formatDate(start);
    
    const startDate = new Date(start);
    const endDate = new Date(end);
    
    if (startDate.getMonth() === endDate.getMonth()) {
      return `${formatDate(start)}–${endDate.getDate()}`;
    } else {
      return `${formatDate(start)}–${formatDate(end)}`;
    }
  };

  if (isMobile) {
    return (
      <div className="max-w-2xl mx-auto px-4">
        {/* Current Status */}
        {currentEvent && (
          <div className="mb-12 text-center">
            <div className="inline-block">
              <div className="text-sm text-gray-500 mb-1">Currently</div>
              <div className="text-2xl font-light tracking-wide">{currentEvent.location}</div>
              <div className="w-8 h-px bg-gray-300 mx-auto mt-3"></div>
            </div>
          </div>
        )}

        {/* Upcoming Events */}
        <div>
          <div className="text-sm text-gray-500 mb-8 tracking-wider uppercase">Schedule</div>
          
          <div className="space-y-6">
            {getUpcomingEvents().map((event) => (
              <div key={event.id} className="group">
                <div className="flex items-baseline justify-between border-b border-gray-100 pb-4">
                  <div className="flex-1">
                    <div className="text-base font-medium mb-1">{event.location}</div>
                    <div className="text-sm text-gray-600">{event.note}</div>
                  </div>
                  <div className="text-sm text-gray-500 font-mono ml-4 shrink-0">
                    {formatDateRange(event.start, event.end)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {getUpcomingEvents().length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-sm">No scheduled travel</div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Desktop view
  return (
    <div className="max-w-5xl mx-auto">
      {/* Current Status */}
      {currentEvent && (
        <div className="mb-16 text-center">
          <div className="inline-block">
            <div className="text-sm text-gray-500 mb-2 tracking-wider uppercase">Current Location</div>
            <div className="text-3xl font-light tracking-wide">{currentEvent.location}</div>
            <div className="w-12 h-px bg-gray-300 mx-auto mt-4"></div>
          </div>
        </div>
      )}

      {/* Calendar */}
      <div className="border border-gray-200">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events.map(event => ({
            ...event,
            color: event.display === 'background' ? '#f8f9fa' : '#000000',
            textColor: event.display === 'background' ? '#9ca3af' : '#ffffff',
            borderColor: event.display === 'background' ? 'transparent' : '#000000',
          }))}
          eventClick={handleEventClick}
          headerToolbar={{
            left: '',
            center: 'title',
            right: 'prev,next'
          }}
          titleFormat={{ year: 'numeric', month: 'long' }}
          height="auto"
          aspectRatio={1.6}
          eventDisplay="block"
          dayMaxEvents={2}
          moreLinkClick="popover"
          eventMouseEnter={(info) => {
            if (info.event.extendedProps.display !== 'background') {
              info.el.style.cursor = 'pointer';
              info.el.style.opacity = '0.8';
            }
          }}
          eventMouseLeave={(info) => {
            info.el.style.opacity = '1';
          }}
          dayCellClassNames={(arg) => {
            const today = new Date();
            const cellDate = arg.date;
            const isToday = cellDate.toDateString() === today.toDateString();
            const isPast = cellDate < today && !isToday;
            
            let classes = '';
            if (isPast) {
              classes += ' opacity-30';
            }
            if (isToday) {
              classes += ' bg-gray-50';
            }
            return classes;
          }}
          eventClassNames={(arg) => {
            if (arg.event.extendedProps.display === 'background') {
              return 'opacity-40 cursor-default';
            }
            return 'cursor-pointer';
          }}
          dayCellDidMount={(arg) => {
            const today = new Date();
            const cellDate = arg.date;
            const isToday = cellDate.toDateString() === today.toDateString();
            const isPast = cellDate < today && !isToday;
            
            // Clean styling
            arg.el.style.borderRight = '1px solid #e5e7eb';
            arg.el.style.borderBottom = '1px solid #e5e7eb';
            arg.el.style.minHeight = '100px';
            
            if (isPast) {
              arg.el.style.color = '#d1d5db';
              arg.el.style.backgroundColor = '#fafafa';
            }
            
            if (isToday) {
              arg.el.style.backgroundColor = '#f9fafb';
              arg.el.style.fontWeight = '500';
            }
            
            // Style day numbers
            const dayNumber = arg.el.querySelector('.fc-daygrid-day-number') as HTMLElement;
            if (dayNumber) {
              dayNumber.style.padding = '8px';
              dayNumber.style.fontSize = '14px';
              dayNumber.style.fontWeight = isToday ? '600' : '400';
            }
          }}
          dayHeaderDidMount={(arg) => {
            arg.el.style.borderBottom = '2px solid #000000';
            arg.el.style.backgroundColor = '#ffffff';
            arg.el.style.color = '#000000';
            arg.el.style.fontWeight = '500';
            arg.el.style.fontSize = '12px';
            arg.el.style.textTransform = 'uppercase';
            arg.el.style.letterSpacing = '0.05em';
            arg.el.style.padding = '12px 8px';
          }}
          viewDidMount={() => {
            // Clean up FullCalendar styling
            const fcTable = document.querySelector('.fc-scrollgrid-sync-table') as HTMLElement;
            if (fcTable) {
              fcTable.style.border = 'none';
            }
            
            const fcRows = document.querySelectorAll('.fc-scrollgrid-sync-table tr');
            fcRows.forEach((row) => {
              (row as HTMLElement).style.border = 'none';
            });

            // Style navigation buttons
            const navButtons = document.querySelectorAll('.fc-button');
            navButtons.forEach((btn) => {
              const button = btn as HTMLElement;
              button.style.border = '1px solid #e5e7eb';
              button.style.backgroundColor = '#ffffff';
              button.style.color = '#374151';
              button.style.fontSize = '14px';
              button.style.fontWeight = '400';
              button.style.padding = '6px 12px';
              button.style.marginLeft = '4px';
            });

            // Style title
            const title = document.querySelector('.fc-toolbar-title') as HTMLElement;
            if (title) {
              title.style.fontSize = '24px';
              title.style.fontWeight = '300';
              title.style.letterSpacing = '0.02em';
              title.style.color = '#000000';
            }
          }}
        />
      </div>
    </div>
  );
}