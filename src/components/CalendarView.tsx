'use client';

import { useRef, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ChevronLeft, ChevronRight, MapPin, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Get events for mobile list view
  const getUpcomingEvents = () => {
    const today = new Date();
    return events
      .filter(event => event.display !== 'background')
      .filter(event => new Date(event.start) >= today)
      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
      .slice(0, 6);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    });
  };

  const formatDateRange = (start: string, end?: string) => {
    if (!end) return formatDate(start);
    
    const startDate = new Date(start);
    const endDate = new Date(end);
    
    if (startDate.getMonth() === endDate.getMonth()) {
      return `${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${endDate.getDate()}`;
    } else {
      return `${formatDate(start)} - ${formatDate(end)}`;
    }
  };

  if (isMobile) {
    return (
      <div className="max-w-4xl mx-auto">
        {/* Current Location Header */}
        {currentEvent && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-lg font-semibold">
                    Currently in <strong>{currentEvent.location}</strong>
                  </span>
                </div>
                {currentEvent.note && (
                  <p className="text-muted-foreground italic">
                    {currentEvent.note}
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Mobile Events List */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <CalendarIcon className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Upcoming Travel</h2>
          </div>
          
          <AnimatePresence>
            {getUpcomingEvents().map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-l-4" 
                      style={{ borderLeftColor: event.color }}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{event.title}</h3>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            {formatDateRange(event.start, event.end)}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground text-sm">
                          {event.note}
                        </p>
                      </div>
                      
                      <Badge 
                        className="ml-4 shrink-0"
                        style={{ backgroundColor: event.color + '20', color: event.color, borderColor: event.color }}
                      >
                        {event.end ? `${Math.ceil((new Date(event.end).getTime() - new Date(event.start).getTime()) / (1000 * 60 * 60 * 24)) + 1} days` : '1 day'}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {getUpcomingEvents().length === 0 && (
            <Card className="border-dashed">
              <CardContent className="p-8 text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No upcoming travel</h3>
                <p className="text-muted-foreground">
                  Staying in NYC for the foreseeable future!
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }

  // Desktop Calendar View
  return (
    <div className="max-w-6xl mx-auto">
      {/* Current Location Header */}
      {currentEvent && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xl font-semibold">
                  Currently in <strong>{currentEvent.location}</strong>
                </span>
              </div>
              {currentEvent.note && (
                <p className="text-muted-foreground italic text-lg">
                  {currentEvent.note}
                </p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Legend */}
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <div className="flex items-center gap-2 bg-muted/30 px-3 py-2 rounded-full">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <span className="text-sm font-medium">Home Base (NYC)</span>
        </div>
        <div className="flex items-center gap-2 bg-muted/30 px-3 py-2 rounded-full">
          <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
          <span className="text-sm font-medium">Travel</span>
        </div>
        <div className="flex items-center gap-2 bg-muted/30 px-3 py-2 rounded-full">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-sm font-medium">Family</span>
        </div>
        <div className="flex items-center gap-2 bg-muted/30 px-3 py-2 rounded-full">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium">Events</span>
        </div>
        <div className="flex items-center gap-2 bg-muted/30 px-3 py-2 rounded-full">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-sm font-medium">Holidays</span>
        </div>
      </div>

      {/* Desktop Calendar */}
      <Card className="shadow-2xl border-2 border-border/50">
        <CardContent className="p-8">
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
            aspectRatio={1.8}
            eventDisplay="block"
            dayMaxEvents={3}
            moreLinkClick="popover"
            eventMouseEnter={(info) => {
              info.el.style.cursor = 'pointer';
              info.el.style.transform = 'scale(1.02)';
              info.el.style.zIndex = '10';
            }}
            eventMouseLeave={(info) => {
              info.el.style.transform = 'scale(1)';
              info.el.style.zIndex = 'auto';
            }}
            dayCellClassNames={(arg) => {
              const today = new Date();
              const cellDate = arg.date;
              const isToday = cellDate.toDateString() === today.toDateString();
              const isPast = cellDate < today && !isToday;
              
              let classes = 'hover:bg-primary/5 transition-all duration-200';
              if (isPast) {
                classes += ' opacity-50 bg-muted/20';
              }
              if (isToday) {
                classes += ' bg-primary/10 ring-2 ring-primary/20';
              }
              return classes;
            }}
            eventClassNames="cursor-pointer hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md"
            dayCellDidMount={(arg) => {
              const today = new Date();
              const cellDate = arg.date;
              const isToday = cellDate.toDateString() === today.toDateString();
              const isPast = cellDate < today && !isToday;
              
              if (isPast) {
                arg.el.style.color = '#9CA3AF';
                arg.el.style.backgroundColor = 'rgba(156, 163, 175, 0.1)';
              }
              
              if (isToday) {
                arg.el.style.backgroundColor = 'rgba(var(--primary), 0.1)';
                arg.el.style.fontWeight = '600';
              }
            }}
          />
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="mt-8 text-center">
        <Card className="bg-muted/20 border-dashed">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              Click on events for more details • Dates in gray are in the past
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}