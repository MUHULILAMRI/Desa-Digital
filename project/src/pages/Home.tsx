import { FileText, BarChart2, Users, DollarSign, Globe, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  const features = [
    {
      title: 'Digital Letter Services',
      description: 'Apply for official letters and documents online with real-time status tracking.',
      icon: <FileText size={24} />,
      linkTo: '/digital-services',
      color: 'blue',
    },
    {
      title: 'Population Dashboard',
      description: 'Interactive visualization of village population data and demographics.',
      icon: <BarChart2 size={24} />,
      linkTo: '/population-data',
      color: 'green',
    },
    {
      title: 'Social Aid Management',
      description: 'Information on aid programs, beneficiaries, and distribution status.',
      icon: <Users size={24} />,
      linkTo: '/social-aid',
      color: 'orange',
    },
    {
      title: 'Village Finance',
      description: 'Transparent information about village budget, expenses, and financial reports.',
      icon: <DollarSign size={24} />,
      linkTo: '/village-finance',
      color: 'indigo',
    },
    {
      title: 'Village Profile',
      description: 'Comprehensive information about the village, history, and points of interest.',
      icon: <Globe size={24} />,
      linkTo: '/village-profile',
      color: 'purple',
    },
    {
      title: 'Digital Attendance',
      description: 'QR-based attendance system for village events and meetings.',
      icon: <UserCheck size={24} />,
      linkTo: '/attendance',
      color: 'red',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-blue-600 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90"></div>
        <div className="relative z-10 px-6 py-16 sm:px-8 sm:py-20 lg:py-24 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Layanan Informasi dan Layanan Digital
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Modernizing village governance through digital transformation and community engagement.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/digital-services">
              <Button size="lg" variant="primary" className="bg-white text-blue-600 hover:bg-blue-50">
                Explore Services
              </Button>
            </Link>
            <Link to="/village-profile">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                Village Profile
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <h3 className="text-3xl font-bold text-blue-600">3,500+</h3>
            <p className="text-gray-500 mt-2">Villagers Served</p>
          </Card>
          <Card className="text-center">
            <h3 className="text-3xl font-bold text-blue-600">250+</h3>
            <p className="text-gray-500 mt-2">Digital Documents Processed</p>
          </Card>
          <Card className="text-center">
            <h3 className="text-3xl font-bold text-blue-600">98%</h3>
            <p className="text-gray-500 mt-2">User Satisfaction</p>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to improve village governance and community services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 rounded-xl p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900">Ready to experience digital village services?</h2>
          <p className="mt-4 text-lg text-gray-500">
            Access all village services from the comfort of your home. Easy, efficient, and transparent.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="primary">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Villagers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                  BS
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Budi Santoso</h4>
                <p className="text-gray-500 text-sm">Village Resident</p>
                <p className="mt-3 text-gray-600">
                  "Getting my birth certificate used to take days of going back and forth to the village office. With LIL Digital, I completed the entire process in just a few clicks!"
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg">
                  SP
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Siti Pratiwi</h4>
                <p className="text-gray-500 text-sm">Small Business Owner</p>
                <p className="mt-3 text-gray-600">
                  "The transparency of village finances has improved greatly. Now I can see exactly how our tax money is being spent on community development projects."
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;