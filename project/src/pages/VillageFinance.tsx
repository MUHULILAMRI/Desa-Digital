import { useState } from 'react';
import { DollarSign, BarChart2, PieChart, ArrowDown, ArrowUp, Download, Filter, Calendar } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

interface FinanceCategory {
  name: string;
  budget: number;
  spent: number;
  percentage: number;
}

interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
}

const VillageFinance = () => {
  const [activeView, setActiveView] = useState('overview');
  const [year, setYear] = useState(2025);
  
  // Mock budget data
  const villageFinance = {
    totalBudget: 750000000, // 750 million
    totalSpent: 498750000, // About 66.5% spent
    income: {
      villageFund: 500000000,
      localRevenue: 75000000,
      provincialGrant: 150000000,
      otherSources: 25000000,
    },
    expenditure: {
      infrastructure: 275000000,
      administration: 125000000,
      socialPrograms: 180000000,
      emergencyFund: 95000000,
      other: 75000000,
    }
  };
  
  // Calculate spent percentage
  const spentPercentage = (villageFinance.totalSpent / villageFinance.totalBudget) * 100;
  
  // Categories for budget breakdown
  const categories: FinanceCategory[] = [
    {
      name: 'Infrastructure',
      budget: villageFinance.expenditure.infrastructure,
      spent: 187500000, // About 68% spent
      percentage: 68.2,
    },
    {
      name: 'Administration',
      budget: villageFinance.expenditure.administration,
      spent: 98750000, // About 79% spent
      percentage: 79.0,
    },
    {
      name: 'Social Programs',
      budget: villageFinance.expenditure.socialPrograms,
      spent: 142500000, // About 79% spent
      percentage: 79.2,
    },
    {
      name: 'Emergency Fund',
      budget: villageFinance.expenditure.emergencyFund,
      spent: 12000000, // Only 12.6% spent
      percentage: 12.6,
    },
    {
      name: 'Other Expenses',
      budget: villageFinance.expenditure.other,
      spent: 58000000, // About 77.3% spent
      percentage: 77.3,
    },
  ];
  
  // Recent transactions
  const recentTransactions: Transaction[] = [
    {
      id: 'TRX001',
      date: '2025-04-10',
      description: 'Road repair project - Phase 2',
      category: 'Infrastructure',
      amount: 15000000,
      type: 'expense',
    },
    {
      id: 'TRX002',
      date: '2025-04-08',
      description: 'Quarterly provincial grant',
      category: 'Income',
      amount: 37500000,
      type: 'income',
    },
    {
      id: 'TRX003',
      date: '2025-04-05',
      description: 'COVID-19 vaccination program',
      category: 'Social Programs',
      amount: 8500000,
      type: 'expense',
    },
    {
      id: 'TRX004',
      date: '2025-04-01',
      description: 'Office supplies and maintenance',
      category: 'Administration',
      amount: 3200000,
      type: 'expense',
    },
    {
      id: 'TRX005',
      date: '2025-03-28',
      description: 'Local market fees collection',
      category: 'Income',
      amount: 4750000,
      type: 'income',
    },
  ];

  // Format numbers as Indonesian currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Village Finance Dashboard</h1>
            <p className="mt-2 text-gray-600">
              Transparent financial management and budget allocation for the village.
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <div className="flex items-center bg-gray-100 rounded-md">
              <button 
                className="px-2 py-1 rounded-l-md text-sm focus:outline-none"
                onClick={() => setYear(year - 1)}
              >
                <ArrowDown size={16} />
              </button>
              <span className="px-3 py-1 text-sm font-medium">{year}</span>
              <button 
                className="px-2 py-1 rounded-r-md text-sm focus:outline-none"
                onClick={() => setYear(year + 1)}
              >
                <ArrowUp size={16} />
              </button>
            </div>
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
              icon={<Filter size={16} />}
            >
              Filter
            </Button>
          </div>
        </div>
      </div>
      
      {/* Quick stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center">
          <h3 className="text-3xl font-bold text-blue-600">
            {formatCurrency(villageFinance.totalBudget)}
          </h3>
          <p className="text-gray-500 mt-2">Total Budget</p>
        </Card>
        <Card className="text-center">
          <h3 className="text-3xl font-bold text-green-600">
            {formatCurrency(villageFinance.totalSpent)}
          </h3>
          <p className="text-gray-500 mt-2">Total Spent</p>
        </Card>
        <Card className="text-center">
          <h3 className="text-3xl font-bold text-orange-600">
            {formatCurrency(villageFinance.totalBudget - villageFinance.totalSpent)}
          </h3>
          <p className="text-gray-500 mt-2">Remaining Balance</p>
        </Card>
        <Card className="text-center">
          <h3 className="text-3xl font-bold text-indigo-600">
            {spentPercentage.toFixed(1)}%
          </h3>
          <p className="text-gray-500 mt-2">Budget Utilization</p>
        </Card>
      </div>
      
      {/* Views toggles */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {['overview', 'income', 'expenditure', 'transactions'].map((view) => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${activeView === view
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </nav>
      </div>
      
      {/* Content based on active view */}
      <div className="mt-6">
        {activeView === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Budget Overview">
              <div className="relative pt-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-semibold inline-block text-gray-800">
                      Budget Utilization
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold inline-block text-gray-800">
                      {spentPercentage.toFixed(1)}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-4 mt-2 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${spentPercentage}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{formatCurrency(0)}</span>
                  <span>{formatCurrency(villageFinance.totalBudget/2)}</span>
                  <span>{formatCurrency(villageFinance.totalBudget)}</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-900 mb-4">Category Breakdown</h4>
                <div className="space-y-4">
                  {categories.map((category, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{category.name}</span>
                        <span className="text-sm text-gray-500">
                          {formatCurrency(category.spent)} / {formatCurrency(category.budget)}
                        </span>
                      </div>
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                        <div
                          style={{ width: `${category.percentage}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            
            <Card title="Recent Transactions">
              <div className="overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {recentTransactions.map((transaction) => (
                    <li key={transaction.id} className="py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {transaction.description}
                          </p>
                          <div className="flex items-center mt-1">
                            <Calendar size={14} className="text-gray-400 mr-1" />
                            <p className="text-xs text-gray-500">
                              {new Date(transaction.date).toLocaleDateString()}
                            </p>
                            <span className="mx-2 text-gray-300">•</span>
                            <p className="text-xs text-gray-500">
                              {transaction.category}
                            </p>
                          </div>
                        </div>
                        <div className={`
                          text-sm font-medium 
                          ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}
                        `}>
                          {transaction.type === 'income' ? '+' : '-'} {formatCurrency(transaction.amount)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 text-right">
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveView('transactions')}
                >
                  View All Transactions
                </Button>
              </div>
            </Card>
            
            <Card title="Income Sources">
              <div className="h-64 flex items-center justify-center">
                <PieChart size={36} className="text-gray-400" />
                <div className="ml-4">
                  <div className="text-sm text-gray-500">Pie chart visualization showing income distribution</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {Object.entries(villageFinance.income).map(([key, value]) => {
                  const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                  return (
                    <div key={key} className="flex items-center p-2 rounded-md">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <div>
                        <div className="text-xs text-gray-500">{label}</div>
                        <div className="text-sm font-medium">{formatCurrency(value)}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
            
            <Card title="Quarterly Expenditure">
              <div className="h-64 flex items-center justify-center">
                <BarChart2 size={36} className="text-gray-400" />
                <div className="ml-4">
                  <div className="text-sm text-gray-500">Bar chart showing quarterly expenditure</div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 mt-4">
                {['Q1', 'Q2', 'Q3', 'Q4'].map((quarter, index) => (
                  <div key={quarter} className="text-center">
                    <div className="text-sm font-medium">{quarter}</div>
                    <div className="text-xs text-gray-500">
                      {index < 2 ? 'Completed' : index === 2 ? 'In Progress' : 'Upcoming'}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
        
        {activeView === 'income' && (
          <Card title="Income Details">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Income Sources</h3>
                <div className="space-y-4">
                  {Object.entries(villageFinance.income).map(([key, value]) => {
                    const percentage = (value / Object.values(villageFinance.income).reduce((a, b) => a + b, 0)) * 100;
                    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                    
                    return (
                      <div key={key} className="relative pt-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block text-blue-600">{label}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-blue-600">
                              {formatCurrency(value)} ({percentage.toFixed(1)}%)
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
                <h3 className="text-lg font-medium text-gray-900 mb-4">Income Trends</h3>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                  <div className="text-center text-gray-500">
                    <PieChart size={40} className="mx-auto mb-2" />
                    <p>Detailed income trends visualization</p>
                    <p className="mt-2 text-sm">Shows income sources over time</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}
        
        {activeView === 'expenditure' && (
          <Card title="Expenditure Details">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Expenditure Categories</h3>
                <div className="space-y-4">
                  {Object.entries(villageFinance.expenditure).map(([key, value]) => {
                    const percentage = (value / Object.values(villageFinance.expenditure).reduce((a, b) => a + b, 0)) * 100;
                    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                    
                    return (
                      <div key={key} className="relative pt-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block text-blue-600">{label}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-blue-600">
                              {formatCurrency(value)} ({percentage.toFixed(1)}%)
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
                <h3 className="text-lg font-medium text-gray-900 mb-4">Top Projects by Expenditure</h3>
                <ul className="divide-y divide-gray-200">
                  <li className="py-3">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Village Road Improvement</p>
                        <p className="text-xs text-gray-500 mt-1">Infrastructure</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{formatCurrency(120000000)}</p>
                    </div>
                  </li>
                  <li className="py-3">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Clean Water Access Project</p>
                        <p className="text-xs text-gray-500 mt-1">Infrastructure</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{formatCurrency(85000000)}</p>
                    </div>
                  </li>
                  <li className="py-3">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">COVID-19 Village Response</p>
                        <p className="text-xs text-gray-500 mt-1">Social Programs</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{formatCurrency(75000000)}</p>
                    </div>
                  </li>
                  <li className="py-3">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Village Office Renovation</p>
                        <p className="text-xs text-gray-500 mt-1">Administration</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{formatCurrency(65000000)}</p>
                    </div>
                  </li>
                  <li className="py-3">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Education Scholarship Program</p>
                        <p className="text-xs text-gray-500 mt-1">Social Programs</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{formatCurrency(45000000)}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        )}
        
        {activeView === 'transactions' && (
          <Card title="Transaction History">
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex space-x-2 mb-2 sm:mb-0">
                <Button 
                  variant={true ? 'primary' : 'outline'} 
                  size="sm"
                >
                  All
                </Button>
                <Button 
                  variant={false ? 'primary' : 'outline'} 
                  size="sm"
                >
                  Income
                </Button>
                <Button 
                  variant={false ? 'primary' : 'outline'} 
                  size="sm"
                >
                  Expense
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="form-select text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                  <option>Date (newest)</option>
                  <option>Date (oldest)</option>
                  <option>Amount (highest)</option>
                  <option>Amount (lowest)</option>
                </select>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(transaction.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {transaction.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <span className={transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                          {transaction.type === 'income' ? '+' : '-'} {formatCurrency(transaction.amount)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`
                          px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                          ${transaction.type === 'income' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'}
                        `}>
                          {transaction.type === 'income' ? 'Income' : 'Expense'}
                        </span>
                      </td>
                    </tr>
                  ))}
                  
                  {/* Add more example transactions for the full history view */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2025-03-25
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Community center electrical repairs
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Infrastructure
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600">
                      - {formatCurrency(2850000)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        Expense
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2025-03-20
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Village festival sponsorship revenue
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Income
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                      + {formatCurrency(8500000)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Income
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing 7 of 48 transactions
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline"
                  size="sm"
                  disabled
                >
                  Previous
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                >
                  Next
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default VillageFinance;