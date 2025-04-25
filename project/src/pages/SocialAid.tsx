import { useState } from 'react';
import { Search, CheckCircle, User, Users, Package, Download, Filter, Clock } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import StatusBadge from '../components/UI/StatusBadge';

interface AidProgram {
  id: string;
  name: string;
  type: string;
  beneficiaries: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'upcoming';
  description: string;
}

interface AidBeneficiary {
  id: string;
  name: string;
  program: string;
  status: 'received' | 'pending' | 'verified';
  lastDistribution: string;
  address: string;
}

const SocialAid = () => {
  const [activeTab, setActiveTab] = useState('programs');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for aid programs
  const aidPrograms: AidProgram[] = [
    {
      id: 'AID001',
      name: 'COVID-19 Relief Package',
      type: 'Food & Essentials',
      beneficiaries: 245,
      startDate: '2025-01-15',
      endDate: '2025-06-15',
      status: 'active',
      description: 'Emergency food and essentials for families affected by the pandemic',
    },
    {
      id: 'AID002',
      name: 'Educational Support Grant',
      type: 'Education',
      beneficiaries: 120,
      startDate: '2025-03-01',
      endDate: '2025-12-31',
      status: 'active',
      description: 'Financial assistance for school supplies and fees for underprivileged children',
    },
    {
      id: 'AID003',
      name: 'Elderly Care Program',
      type: 'Healthcare',
      beneficiaries: 85,
      startDate: '2025-02-10',
      endDate: '2025-12-31',
      status: 'active',
      description: 'Regular health check-ups and essential supplies for elderly villagers',
    },
    {
      id: 'AID004',
      name: 'Flood Relief Assistance',
      type: 'Disaster Relief',
      beneficiaries: 165,
      startDate: '2024-12-01',
      endDate: '2025-03-01',
      status: 'completed',
      description: 'Emergency assistance for families affected by the December floods',
    },
    {
      id: 'AID005',
      name: 'Home Renovation Assistance',
      type: 'Housing',
      beneficiaries: 35,
      startDate: '2025-05-01',
      endDate: '2025-08-31',
      status: 'upcoming',
      description: 'Support for essential home repairs for vulnerable families',
    },
  ];

  // Mock data for beneficiaries
  const beneficiaries: AidBeneficiary[] = [
    {
      id: 'BEN001',
      name: 'Budi Santoso',
      program: 'COVID-19 Relief Package',
      status: 'received',
      lastDistribution: '2025-03-15',
      address: 'Jl. Merdeka No. 12, RT 03/RW 05',
    },
    {
      id: 'BEN002',
      name: 'Siti Pratiwi',
      program: 'Educational Support Grant',
      status: 'verified',
      lastDistribution: '2025-03-05',
      address: 'Jl. Pahlawan No. 45, RT 02/RW 06',
    },
    {
      id: 'BEN003',
      name: 'Ahmad Fauzi',
      program: 'COVID-19 Relief Package',
      status: 'pending',
      lastDistribution: '',
      address: 'Jl. Kenanga No. 8, RT 01/RW 02',
    },
    {
      id: 'BEN004',
      name: 'Dewi Suryani',
      program: 'Elderly Care Program',
      status: 'received',
      lastDistribution: '2025-03-10',
      address: 'Jl. Anggrek No. 23, RT 04/RW 01',
    },
    {
      id: 'BEN005',
      name: 'Eko Widodo',
      program: 'Flood Relief Assistance',
      status: 'received',
      lastDistribution: '2025-02-20',
      address: 'Jl. Melati No. 5, RT 06/RW 03',
    },
  ];

  // Filter data based on search query
  const filteredPrograms = aidPrograms.filter(program => 
    program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    program.type.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredBeneficiaries = beneficiaries.filter(beneficiary => 
    beneficiary.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    beneficiary.program.toLowerCase().includes(searchQuery.toLowerCase()) ||
    beneficiary.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get status color for programs
  const getProgramStatusColor = (status: 'active' | 'completed' | 'upcoming') => {
    switch (status) {
      case 'active':
        return 'success';
      case 'completed':
        return 'info';
      case 'upcoming':
        return 'warning';
    }
  };

  // Get status color for beneficiaries
  const getBeneficiaryStatusColor = (status: 'received' | 'pending' | 'verified') => {
    switch (status) {
      case 'received':
        return 'success';
      case 'pending':
        return 'warning';
      case 'verified':
        return 'info';
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Social Aid Management</h1>
            <p className="mt-2 text-gray-600">
              Monitor and manage social aid programs and beneficiaries in the village.
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <Button 
              variant="outline" 
              size="sm"
              icon={<Download size={16} />}
            >
              Export Data
            </Button>
            <Button 
              variant="secondary" 
              size="sm"
              icon={<Filter size={16} />}
            >
              Filter
            </Button>
            <Button 
              variant="primary" 
              size="sm"
              icon={<CheckCircle size={16} />}
            >
              Verify Recipients
            </Button>
          </div>
        </div>
      </div>
      
      {/* Quick stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center">
          <h3 className="text-3xl font-bold text-blue-600">5</h3>
          <div className="flex items-center justify-center mt-2">
            <Package size={18} className="text-gray-500 mr-1" />
            <p className="text-gray-500">Active Programs</p>
          </div>
        </Card>
        <Card className="text-center">
          <h3 className="text-3xl font-bold text-blue-600">650</h3>
          <div className="flex items-center justify-center mt-2">
            <Users size={18} className="text-gray-500 mr-1" />
            <p className="text-gray-500">Total Beneficiaries</p>
          </div>
        </Card>
        <Card className="text-center">
          <h3 className="text-3xl font-bold text-green-600">85%</h3>
          <div className="flex items-center justify-center mt-2">
            <CheckCircle size={18} className="text-gray-500 mr-1" />
            <p className="text-gray-500">Distribution Rate</p>
          </div>
        </Card>
        <Card className="text-center">
          <h3 className="text-3xl font-bold text-orange-600">28</h3>
          <div className="flex items-center justify-center mt-2">
            <Clock size={18} className="text-gray-500 mr-1" />
            <p className="text-gray-500">Pending Verifications</p>
          </div>
        </Card>
      </div>
      
      {/* Search bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Search programs or beneficiaries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('programs')}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === 'programs'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            <div className="flex items-center">
              <Package className="mr-2 h-5 w-5" />
              Aid Programs
            </div>
          </button>
          <button
            onClick={() => setActiveTab('beneficiaries')}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === 'beneficiaries'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            <div className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Beneficiaries
            </div>
          </button>
        </nav>
      </div>
      
      {/* Tab content */}
      <div className="mt-6">
        {activeTab === 'programs' ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program) => (
                <Card key={program.id} className="hover:shadow-sm transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="flex-grow">
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium text-gray-900">{program.name}</h3>
                        <div className="ml-3">
                          <StatusBadge status={getProgramStatusColor(program.status)}>
                            {program.status.charAt(0).toUpperCase() + program.status.slice(1)}
                          </StatusBadge>
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{program.description}</p>
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs font-medium uppercase text-gray-500">Type</div>
                          <div className="mt-1 text-sm text-gray-900">{program.type}</div>
                        </div>
                        <div>
                          <div className="text-xs font-medium uppercase text-gray-500">Duration</div>
                          <div className="mt-1 text-sm text-gray-900">
                            {new Date(program.startDate).toLocaleDateString()} - {new Date(program.endDate).toLocaleDateString()}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-medium uppercase text-gray-500">Beneficiaries</div>
                          <div className="mt-1 text-sm text-gray-900">{program.beneficiaries}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Button 
                        variant="primary"
                        size="sm"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                  
                  {program.id === 'AID001' && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Distribution Progress</h4>
                      <div className="relative pt-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block text-blue-600">78% Complete</span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-blue-600">192/245 Recipients</span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-2 mt-2 text-xs flex rounded bg-blue-200">
                          <div style={{ width: "78%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <Package className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No programs found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  No aid programs match your search criteria.
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
                    Beneficiary
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Program
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Distribution
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBeneficiaries.length > 0 ? (
                  filteredBeneficiaries.map((beneficiary) => (
                    <tr key={beneficiary.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-gray-400" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{beneficiary.name}</div>
                            <div className="text-sm text-gray-500">ID: {beneficiary.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{beneficiary.program}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">{beneficiary.address}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {beneficiary.lastDistribution ? new Date(beneficiary.lastDistribution).toLocaleDateString() : 'Not yet distributed'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={getBeneficiaryStatusColor(beneficiary.status)}>
                          {beneficiary.status.charAt(0).toUpperCase() + beneficiary.status.slice(1)}
                        </StatusBadge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <Button 
                          variant="outline"
                          size="sm"
                        >
                          View History
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      No beneficiaries found matching your search.
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

export default SocialAid;