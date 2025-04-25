import { useState } from 'react';
import { Calendar, Clock, Check, X, QrCode, UserCheck, Upload, Download, Search } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import StatusBadge from '../components/UI/StatusBadge';

interface Attendance {
  id: string;
  name: string;
  time: string;
  date: string;
  event: string;
  status: 'present' | 'absent' | 'late';
}

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  status: 'upcoming' | 'ongoing' | 'completed';
}

const AttendanceSystem = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for events
  const events: Event[] = [
    {
      id: 'EVT001',
      title: 'Monthly Village Meeting',
      date: '2025-04-15',
      time: '09:00 - 12:00',
      location: 'Village Hall',
      attendees: 45,
      status: 'upcoming',
    },
    {
      id: 'EVT002',
      title: 'COVID-19 Vaccination Drive',
      date: '2025-04-20',
      time: '08:00 - 16:00',
      location: 'Village Health Center',
      attendees: 156,
      status: 'upcoming',
    },
    {
      id: 'EVT003',
      title: 'Village Cleanup Day',
      date: '2025-04-10',
      time: '07:00 - 11:00',
      location: 'Village Square',
      attendees: 78,
      status: 'completed',
    },
    {
      id: 'EVT004',
      title: 'Agricultural Training',
      date: '2025-04-05',
      time: '13:00 - 16:00',
      location: 'Community Center',
      attendees: 32,
      status: 'completed',
    },
  ];

  // Mock data for attendance records
  const attendanceRecords: Attendance[] = [
    {
      id: 'ATT001',
      name: 'Budi Santoso',
      time: '09:05',
      date: '2025-04-10',
      event: 'Village Cleanup Day',
      status: 'present',
    },
    {
      id: 'ATT002',
      name: 'Siti Pratiwi',
      time: '07:15',
      date: '2025-04-10',
      event: 'Village Cleanup Day',
      status: 'present',
    },
    {
      id: 'ATT003',
      name: 'Ahmad Fauzi',
      time: '09:35',
      date: '2025-04-10',
      event: 'Village Cleanup Day',
      status: 'late',
    },
    {
      id: 'ATT004',
      name: 'Dewi Suryani',
      time: '',
      date: '2025-04-10',
      event: 'Village Cleanup Day',
      status: 'absent',
    },
    {
      id: 'ATT005',
      name: 'Eko Widodo',
      time: '13:10',
      date: '2025-04-05',
      event: 'Agricultural Training',
      status: 'present',
    },
  ];

  // Filter data by search query
  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredAttendance = attendanceRecords.filter(record => 
    record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.event.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get status color
  const getStatusColor = (status: 'upcoming' | 'ongoing' | 'completed') => {
    switch (status) {
      case 'upcoming':
        return 'warning';
      case 'ongoing':
        return 'info';
      case 'completed':
        return 'success';
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Digital Attendance System</h1>
            <p className="mt-2 text-gray-600">
              Manage event attendance with QR codes and digital guest book functionality.
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <Button 
              variant="secondary" 
              size="sm"
              icon={<QrCode size={16} />}
            >
              Generate QR
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              icon={<Download size={16} />}
            >
              Export Data
            </Button>
            <Button 
              variant="primary" 
              size="sm"
              icon={<Upload size={16} />}
            >
              Upload List
            </Button>
          </div>
        </div>
      </div>
      
      {/* QR Code Display */}
      <Card className="text-center p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Quick Attendance</h2>
            <p className="text-gray-600">
              Scan this QR code with your mobile device to mark your attendance for today's event.
            </p>
            <div className="mt-4">
              <Button 
                variant="primary"
                icon={<UserCheck size={16} />}
              >
                Mark Attendance
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0 border-4 border-white shadow-lg rounded-lg overflow-hidden w-48 h-48 mx-auto md:mx-0">
            {/* Placeholder for QR code image */}
            <div className="bg-gray-100 w-full h-full flex items-center justify-center">
              <QrCode size={100} className="text-gray-500" />
            </div>
          </div>
        </div>
      </Card>
      
      {/* Search bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Search events or attendees..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('events')}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === 'events'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Events
            </div>
          </button>
          <button
            onClick={() => setActiveTab('attendance')}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === 'attendance'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            <div className="flex items-center">
              <UserCheck className="mr-2 h-5 w-5" />
              Attendance Records
            </div>
          </button>
        </nav>
      </div>
      
      {/* Tab content */}
      <div className="mt-6">
        {activeTab === 'events' ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-sm transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                        <div className="ml-3">
                          <StatusBadge status={getStatusColor(event.status)}>
                            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                          </StatusBadge>
                        </div>
                      </div>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={16} className="mr-2" />
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock size={16} className="mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <UserCheck size={16} className="mr-2" />
                          {event.attendees} attendees
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 flex flex-wrap space-x-3">
                      <Button 
                        variant="primary"
                        size="sm"
                        icon={<QrCode size={16} />}
                      >
                        QR Code
                      </Button>
                      <Button 
                        variant="secondary"
                        size="sm"
                        icon={<UserCheck size={16} />}
                      >
                        Attendance
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No events found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  No events match your search criteria.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAttendance.length > 0 ? (
                  filteredAttendance.map((record) => (
                    <tr key={record.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{record.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{record.event}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{new Date(record.date).toLocaleDateString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{record.time || '-'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {record.status === 'present' ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <Check size={12} className="mr-1" />
                            Present
                          </span>
                        ) : record.status === 'late' ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <Clock size={12} className="mr-1" />
                            Late
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <X size={12} className="mr-1" />
                            Absent
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      No attendance records found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceSystem;