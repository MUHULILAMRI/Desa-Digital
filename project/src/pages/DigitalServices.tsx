import { useState } from 'react';
import { 
  FileText, 
  FilePlus, 
  FileCheck, 
  Clock, 
  Search, 
  Edit3,
  ClipboardList,
  FileX
} from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import StatusBadge from '../components/UI/StatusBadge';

type ApplicationStatus = 'pending' | 'processing' | 'completed' | 'rejected';

interface Application {
  id: string;
  type: string;
  date: string;
  status: ApplicationStatus;
  description: string;
}

const DigitalServices = () => {
  const [activeTab, setActiveTab] = useState('available');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for available letter services
  const letterServices = [
    {
      id: 'birth-cert',
      title: 'Birth Certificate',
      description: 'Request an official birth certificate for newborns or replacements.',
      icon: <FileText size={24} />,
      requirements: ['ID Card', 'Family Card', 'Hospital Birth Record'],
    },
    {
      id: 'family-card',
      title: 'Family Card (KK)',
      description: 'Apply for a new family card or update an existing one.',
      icon: <FileText size={24} />,
      requirements: ['ID Card', 'Marriage Certificate', 'Previous Family Card (if updating)'],
    },
    {
      id: 'domicile',
      title: 'Domicile Certificate',
      description: 'Official letter confirming your residence in the village.',
      icon: <FileText size={24} />,
      requirements: ['ID Card', 'Family Card', 'Proof of Residence'],
    },
    {
      id: 'business-permit',
      title: 'Business Permit',
      description: 'Apply for a small business operation permit within the village area.',
      icon: <FileText size={24} />,
      requirements: ['ID Card', 'Business Plan', 'Location Map'],
    },
    {
      id: 'inheritance',
      title: 'Inheritance Letter',
      description: 'Official documentation for inheritance claims and asset distribution.',
      icon: <FileText size={24} />,
      requirements: ['ID Card', 'Death Certificate', 'Family Card', 'Asset Documents'],
    },
    {
      id: 'good-conduct',
      title: 'Good Conduct Certificate',
      description: 'Certificate of good behavior required for job applications or other purposes.',
      icon: <FileText size={24} />,
      requirements: ['ID Card', 'Family Card', 'Police Record (if available)'],
    },
  ];
  
  // Mock data for user applications
  const myApplications: Application[] = [
    {
      id: 'APP001',
      type: 'Birth Certificate',
      date: '2025-03-15',
      status: 'completed',
      description: 'Birth certificate for Anak Pertama',
    },
    {
      id: 'APP002',
      type: 'Domicile Certificate',
      date: '2025-04-10',
      status: 'processing',
      description: 'Required for new job application',
    },
    {
      id: 'APP003',
      type: 'Business Permit',
      date: '2025-04-05',
      status: 'pending',
      description: 'Small grocery store on Jalan Merdeka',
    },
    {
      id: 'APP004',
      type: 'Family Card',
      date: '2025-03-01',
      status: 'rejected',
      description: 'Update after marriage',
    },
  ];

  // Filter applications by search query
  const filteredLetterServices = letterServices.filter(service => 
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredApplications = myApplications.filter(app => 
    app.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h1 className="text-2xl font-bold text-gray-900">Digital Letter Services</h1>
        <p className="mt-2 text-gray-600">
          Request and track official letters and documents from the village administration without visiting the office.
        </p>
      </div>
      
      {/* Search bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Search for services or applications..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('available')}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === 'available'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            <div className="flex items-center">
              <FilePlus className="mr-2 h-5 w-5" />
              Available Services
            </div>
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === 'applications'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            <div className="flex items-center">
              <ClipboardList className="mr-2 h-5 w-5" />
              My Applications
            </div>
          </button>
        </nav>
      </div>
      
      {/* Tab content */}
      <div className="mt-6">
        {activeTab === 'available' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLetterServices.map((service) => (
              <Card key={service.id} className="hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    {service.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                    <p className="text-gray-500 mt-1">{service.description}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700">Requirements:</h4>
                  <ul className="mt-2 space-y-1">
                    {service.requirements.map((req, index) => (
                      <li key={index} className="text-sm text-gray-500 flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <Button 
                    variant="primary"
                    fullWidth
                    icon={<FilePlus size={16} />}
                  >
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredApplications.length > 0 ? (
              filteredApplications.map((application) => (
                <Card key={application.id} className="hover:shadow-sm transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium text-gray-900">{application.type}</h3>
                        <div className="ml-3">
                          <StatusBadge status={application.status} />
                        </div>
                      </div>
                      <p className="text-gray-500 mt-1">{application.description}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          Submitted: {new Date(application.date).toLocaleDateString()}
                        </span>
                        <span className="mx-2">•</span>
                        <span>Application ID: {application.id}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 sm:mt-0 flex space-x-3">
                      {application.status === 'pending' && (
                        <Button 
                          variant="outline"
                          size="sm"
                          icon={<Edit3 size={16} />}
                        >
                          Edit
                        </Button>
                      )}
                      <Button 
                        variant={application.status === 'completed' ? 'primary' : 'secondary'}
                        size="sm"
                        icon={application.status === 'completed' ? <FileCheck size={16} /> : <Search size={16} />}
                      >
                        {application.status === 'completed' ? 'Download' : 'Track Status'}
                      </Button>
                      {application.status === 'rejected' && (
                        <Button 
                          variant="outline"
                          size="sm"
                          icon={<FileX size={16} />}
                        >
                          View Reason
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <ClipboardList className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No applications found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  You haven't submitted any applications yet, or your search didn't match any applications.
                </p>
                <div className="mt-6">
                  <Button 
                    variant="primary"
                    onClick={() => setActiveTab('available')}
                  >
                    Browse Available Services
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalServices;