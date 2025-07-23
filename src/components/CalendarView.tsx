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
  type?: 'race' | 'volunteer';
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

  const handleEventClick = () => {
    // Disable click interactions - no popup alerts
    return;
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

  const getEventIcon = (event: CalendarEvent) => {
    if (event.type === 'race') return '🏃‍♂️';
    if (event.type === 'volunteer') return '🙋‍♂️';
    if (event.title.includes('Wedding')) return '💒';
    if (event.title.includes('Home')) return '🏠';
    if (event.title.includes('Marathon Trip')) return '✈️';
    return '📍';
  };

  const getEventGradient = (event: CalendarEvent) => {
    if (event.type === 'race') return 'from-red-500 to-orange-500';
    if (event.type === 'volunteer') return 'from-purple-500 to-pink-500';
    if (event.title.includes('Wedding')) return 'from-yellow-400 to-orange-400';
    if (event.title.includes('Home')) return 'from-green-500 to-emerald-500';
    if (event.title.includes('Marathon Trip')) return 'from-cyan-500 to-blue-500';
    return 'from-gray-500 to-gray-600';
  };

  if (isMobile) {
    return (
      <div className="max-w-2xl mx-auto px-4">
        {/* Current Status - Cool Design */}
        {currentEvent && (
          <div className="mb-12 flex justify-center">
            <div className="relative">
              {/* Gradient background card */}
              <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl p-[2px] shadow-xl">
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl px-8 py-6">
                  {/* Status indicator */}
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Currently</div>
                  </div>
                  
                  {/* Location with emoji */}
                  <div className="text-center">
                    <div className="text-2xl font-light text-gray-900 mb-1">
                      🗽 {currentEvent.location}
                    </div>
                    <div className="text-xs text-gray-600">
                      Home base • Brooklyn/Manhattan
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75"></div>
            </div>
          </div>
        )}

        {/* Upcoming Events */}
        <div>
          <div className="text-sm text-gray-500 mb-8 tracking-wider uppercase">Schedule</div>
          
          <div className="space-y-4">
            {getUpcomingEvents().map((event) => (
              <div key={event.id} className="relative overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getEventGradient(event)}`}></div>
                
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{getEventIcon(event)}</div>
                      <div>
                        <div className="text-lg font-semibold text-gray-900">{event.location}</div>
                        {event.type === 'race' && (
                          <div className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full mt-1">
                            RACE DAY
                          </div>
                        )}
                        {event.type === 'volunteer' && (
                          <div className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full mt-1">
                            VOLUNTEER
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 font-mono">
                        {formatDateRange(event.start, event.end)}
                      </div>
                      {event.type === 'race' && (
                        <div className="text-xs text-red-600 font-medium mt-1">🏆 Competition</div>
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 leading-relaxed">{event.note}</div>
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
      {/* Current Status - Cool Design for Desktop */}
      {currentEvent && (
        <div className="mb-16 flex justify-center">
          <div className="relative">
            {/* Gradient background card */}
            <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl p-[3px] shadow-2xl">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl px-12 py-8">
                {/* Status indicator */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest font-medium">Current Location</div>
                </div>
                
                {/* Location with emoji */}
                <div className="text-center">
                  <div className="text-4xl font-light text-gray-900 mb-2">
                    🗽 {currentEvent.location}
                  </div>
                  <div className="text-sm text-gray-600">
                    Home base • Working from Brooklyn/Manhattan
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-75"></div>
            <div className="absolute top-1/2 -left-3 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      )}

      {/* Calendar */}
      <div className="border border-gray-200">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events.map(event => {
            let eventColor = '#000000';
            if (event.display === 'background') {
              eventColor = '#f8f9fa';
            } else if (event.type === 'race') {
              eventColor = '#EF4444';
            } else if (event.type === 'volunteer') {
              eventColor = '#8B5CF6';
            } else {
              eventColor = event.color;
            }
            
            return {
              ...event,
              color: eventColor,
              textColor: event.display === 'background' ? '#9ca3af' : '#ffffff',
              borderColor: event.display === 'background' ? 'transparent' : eventColor,
            };
          })}
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
          eventMouseEnter={() => {
            // Disable hover effects
          }}
          eventMouseLeave={() => {
            // Disable hover effects
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
            return 'cursor-default';
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
            
            // Remove hover effects on day cells
            arg.el.style.transition = 'none';
            arg.el.addEventListener('mouseenter', (e) => {
              e.preventDefault();
            });
            arg.el.addEventListener('mouseleave', (e) => {
              e.preventDefault();
            });
            
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