import { useState } from 'react';
import { Download, Filter, RefreshCw } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const PopulationData = () => {
  const [activeView, setActiveView] = useState('overview');
  const [isLoading, setIsLoading] = useState(false);

  // Mock population data
  const populationStats = {
    total: 3547,
    male: 1723,
    female: 1824,
    households: 945,
    ageGroups: {
      children: 728, // 0-14
      youth: 623, // 15-24
      adults: 1642, // 25-59
      elderly: 554, // 60+
    },
    education: {
      elementary: 897,
      junior: 754,
      senior: 1245,
      college: 546,
      noEducation: 105,
    },
    occupation: {
      farmers: 425,
      entrepreneurs: 312,
      civilServants: 176,
      privateEmployees: 863,
      others: 968,
    },
  };

  // Simulate data refresh
  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Population Dashboard</h1>
            <p className="mt-2 text-gray-600">
              Interactive visualization of village population demographics and statistics.
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
              icon={<RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />}
              onClick={refreshData}
              disabled={isLoading}
            >
              {isLoading ? 'Refreshing...' : 'Refresh Data'}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Quick stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center">
          <h3 className="text-3xl font-bold text-blue-600">{populationStats.total.toLocaleString()}</h3>
          <p className="text-gray-500 mt-2">Total Population</p>
        </Card>
        <Card className="text-center">
          <h3 className="text-3xl font-bold text-blue-600">{populationStats.households.toLocaleString()}</h3>
          <p className="text-gray-500 mt-2">Households</p>
        </Card>
        <Card className="text-center">
          <div className="flex justify-center space-x-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-500">{populationStats.male.toLocaleString()}</h3>
              <p className="text-gray-500 mt-1">Male</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-pink-500">{populationStats.female.toLocaleString()}</h3>
              <p className="text-gray-500 mt-1">Female</p>
            </div>
          </div>
          <p className="text-gray-500 mt-2">Gender Distribution</p>
        </Card>
        <Card className="text-center">
          <h3 className="text-3xl font-bold text-green-600">23</h3>
          <p className="text-gray-500 mt-2">New Residents This Month</p>
        </Card>
      </div>
      
      {/* Tabs for different data views */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {['overview', 'age', 'education', 'occupation'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveView(tab)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${activeView === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>
      
      {/* Charts and visualizations based on active view */}
      <div className="mt-6">
        {activeView === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Population Trend (2020-2025)">
              {/* Population trend chart */}
              <div className="h-80 flex items-center justify-center bg-gray-50 rounded">
                <div className="space-y-4 w-full px-4">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">2020</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">3,120</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                      <div style={{ width: '87%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">2021</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">3,215</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                      <div style={{ width: '90%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">2022</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">3,320</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                      <div style={{ width: '93%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">2023</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">3,425</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                      <div style={{ width: '96%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">2024</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">3,547</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                      <div style={{ width: '100%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card title="Gender Distribution">
              {/* Gender distribution chart */}
              <div className="h-80 flex items-center justify-center">
                <div className="w-64 h-64 relative">
                  {/* Simple pie chart visualization */}
                  <div className="rounded-full overflow-hidden bg-gray-200">
                    <div className="bg-blue-500 h-full" style={{ width: `${(populationStats.male / populationStats.total) * 100}%` }}></div>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                      <div>
                        <div className="text-sm font-medium">Male</div>
                        <div className="text-xs text-gray-500">{((populationStats.male / populationStats.total) * 100).toFixed(1)}%</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-pink-500 rounded-full mr-2"></div>
                      <div>
                        <div className="text-sm font-medium">Female</div>
                        <div className="text-xs text-gray-500">{((populationStats.female / populationStats.total) * 100).toFixed(1)}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card title="Household Composition">
              {/* Household composition */}
              <div className="h-80 flex items-center justify-center bg-gray-50 rounded overflow-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Family Size</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Households</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1 Person</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">87</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9.2%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2 Persons</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">156</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16.5%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3 Persons</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">238</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25.2%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4 Persons</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">312</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">33.0%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5+ Persons</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">152</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16.1%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
            
            <Card title="Residents by Area">
              {/* Area distribution */}
              <div className="h-80 flex items-center justify-center bg-gray-50 rounded">
                <div className="space-y-4 w-full px-4">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">North District</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">1,245</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                      <div style={{ width: '35%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">South District</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">825</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                      <div style={{ width: '23%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">East District</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">756</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                      <div style={{ width: '21%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">West District</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">721</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                      <div style={{ width: '20%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
        
        {activeView === 'age' && (
          <Card title="Age Distribution">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Distribution by Age Group</h3>
                <div className="space-y-4">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">Children (0-14)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">{populationStats.ageGroups.children} ({((populationStats.ageGroups.children / populationStats.total) * 100).toFixed(1)}%)</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                      <div 
                        style={{ width: `${(populationStats.ageGroups.children / populationStats.total) * 100}%` }} 
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">Youth (15-24)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">{populationStats.ageGroups.youth} ({((populationStats.ageGroups.youth / populationStats.total) * 100).toFixed(1)}%)</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                      <div 
                        style={{ width: `${(populationStats.ageGroups.youth / populationStats.total) * 100}%` }} 
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">Adults (25-59)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">{populationStats.ageGroups.adults} ({((populationStats.ageGroups.adults / populationStats.total) * 100).toFixed(1)}%)</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                      <div 
                        style={{ width: `${(populationStats.ageGroups.adults / populationStats.total) * 100}%` }} 
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">Elderly (60+)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">{populationStats.ageGroups.elderly} ({((populationStats.ageGroups.elderly / populationStats.total) * 100).toFixed(1)}%)</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                      <div 
                        style={{ width: `${(populationStats.ageGroups.elderly / populationStats.total) * 100}%` }} 
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-64 flex items-center justify-center">
                {/* Placeholder for age pyramid or other visualization */}
                <div className="text-center text-gray-500">
                  <p>Detailed age pyramid visualization</p>
                  <p className="mt-2 text-sm">Shows population distribution by age and gender</p>
                </div>
              </div>
            </div>
          </Card>
        )}
        
        {activeView === 'education' && (
          <Card title="Education Levels">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Distribution by Education Level</h3>
                <div className="space-y-4">
                  {Object.entries(populationStats.education).map(([key, value]) => {
                    const percentage = ((value as number) / populationStats.total) * 100;
                    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                    
                    return (
                      <div key={key} className="relative pt-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block text-blue-600">{label}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-blue-600">
                              {value as number} ({percentage.toFixed(1)}%)
                            </span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                          <div 
                            style={{ width: `${percentage}%` }} 
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Education Facilities</h3>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Kindergarten</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">145</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Elementary School</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">425</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Junior High School</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">325</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Senior High School</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">310</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        )}
        
        {activeView === 'occupation' && (
          <Card title="Occupation Data">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Distribution by Occupation</h3>
                <div className="space-y-4">
                  {Object.entries(populationStats.occupation).map(([key, value]) => {
                    // Calculate based only on adult population
                    const workingPopulation = populationStats.ageGroups.adults + populationStats.ageGroups.youth * 0.5; // Assuming half of youth work
                    const percentage = ((value as number) / workingPopulation) * 100;
                    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                    
                    return (
                      <div key={key} className="relative pt-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block text-blue-600">{label}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-blue-600">
                              {value as number} ({percentage.toFixed(1)}%)
                            </span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                          <div 
                            style={{ width: `${percentage}%` }} 
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Village Business Units</h3>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Business Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employees</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Small Shops</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">47</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">126</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Restaurants</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Home Industries</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">86</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Service Providers</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">23</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">58</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PopulationData;