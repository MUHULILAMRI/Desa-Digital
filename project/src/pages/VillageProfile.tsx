import { MapPin, Phone, Mail, Globe, Camera, Users, Map, Calendar } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const VillageProfile = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden h-80">
        <img 
          src="https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Village Panorama" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-3xl lg:text-4xl font-bold">Desa Sukamaju</h1>
          <div className="flex items-center mt-2">
            <MapPin size={16} className="mr-2" />
            <p>Kabupaten Serang, Banten Province</p>
          </div>
        </div>
      </div>
      
      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <Users className="mx-auto h-8 w-8 text-blue-600 mb-2" />
          <h3 className="text-xl font-bold text-gray-900">3,547</h3>
          <p className="text-gray-500">Villagers</p>
        </Card>
        <Card className="text-center">
          <Map className="mx-auto h-8 w-8 text-blue-600 mb-2" />
          <h3 className="text-xl font-bold text-gray-900">875 ha</h3>
          <p className="text-gray-500">Total Area</p>
        </Card>
        <Card className="text-center">
          <Calendar className="mx-auto h-8 w-8 text-blue-600 mb-2" />
          <h3 className="text-xl font-bold text-gray-900">1975</h3>
          <p className="text-gray-500">Established</p>
        </Card>
      </div>
      
      {/* About Village */}
      <Card title="About Desa Sukamaju">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-gray-600 leading-relaxed">
              Desa Sukamaju is a vibrant rural community located in the heart of Banten Province. 
              The village is known for its lush rice fields, traditional crafts, and close-knit community.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Established in 1975, our village has grown from a small farming settlement into a progressive 
              community that balances modern development with cultural preservation. The primary economic 
              activities include agriculture, small-scale manufacturing, and tourism.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              The village is led by Kepala Desa (Village Head) Budi Santoso, who works closely with the Village 
              Council (BPD) to ensure community development and sustainable growth. Our mission is to improve 
              the quality of life for all residents while preserving our cultural heritage and natural resources.
            </p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-md p-4">
                <h4 className="font-medium text-gray-900 mb-2">Contact Information</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <MapPin size={16} className="mr-2 text-blue-600 flex-shrink-0" />
                    <span>Jl. Raya Sukamaju No. 1, Kecamatan Serang, Kabupaten Serang, Banten, Indonesia</span>
                  </li>
                  <li className="flex items-center">
                    <Phone size={16} className="mr-2 text-blue-600 flex-shrink-0" />
                    <span>+62 254 123456</span>
                  </li>
                  <li className="flex items-center">
                    <Mail size={16} className="mr-2 text-blue-600 flex-shrink-0" />
                    <span>info@desasukamaju.id</span>
                  </li>
                  <li className="flex items-center">
                    <Globe size={16} className="mr-2 text-blue-600 flex-shrink-0" />
                    <span>www.desasukamaju.id</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-md p-4">
                <h4 className="font-medium text-gray-900 mb-2">Village Administration</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Village Head:</span>
                    <span>Budi Santoso (2022-2028)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Village Secretary:</span>
                    <span>Siti Pratiwi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">BPD Chair:</span>
                    <span>Hendra Wijaya</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Office Hours:</span>
                    <span>Monday-Friday, 8:00 - 16:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/13069848/pexels-photo-13069848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Village Office" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-medium text-gray-900">Village Office</h4>
                <p className="text-sm text-gray-600">The central administration building for Desa Sukamaju</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-gray-900 mb-3">Village Facilities</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Elementary School (2)</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Junior High School (1)</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Health Center (1)</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Mosque (3)</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Market (1)</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Community Center (1)</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Sports Field (2)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Village Map */}
      <Card title="Village Map">
        <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <Map size={48} className="mx-auto mb-2" />
            <p>Interactive village map placeholder</p>
            <p className="mt-1 text-sm">Shows boundaries, key landmarks, and facilities</p>
          </div>
        </div>
      </Card>
      
      {/* Photo Gallery */}
      <Card title="Village Gallery">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/8989479/pexels-photo-8989479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Rice Fields" 
              className="w-full h-48 object-cover transition-transform hover:scale-105"
            />
            <div className="p-2">
              <p className="text-sm text-gray-600">Rice Fields</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Traditional Market" 
              className="w-full h-48 object-cover transition-transform hover:scale-105"
            />
            <div className="p-2">
              <p className="text-sm text-gray-600">Traditional Market</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2884975/pexels-photo-2884975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Village Craftwork" 
              className="w-full h-48 object-cover transition-transform hover:scale-105"
            />
            <div className="p-2">
              <p className="text-sm text-gray-600">Traditional Crafts</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3075779/pexels-photo-3075779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Village Celebration" 
              className="w-full h-48 object-cover transition-transform hover:scale-105"
            />
            <div className="p-2">
              <p className="text-sm text-gray-600">Cultural Celebration</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/11754837/pexels-photo-11754837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Community Meeting" 
              className="w-full h-48 object-cover transition-transform hover:scale-105"
            />
            <div className="p-2">
              <p className="text-sm text-gray-600">Community Meeting</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/5428262/pexels-photo-5428262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Local School" 
              className="w-full h-48 object-cover transition-transform hover:scale-105"
            />
            <div className="p-2">
              <p className="text-sm text-gray-600">Village School</p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button 
            variant="outline"
            icon={<Camera size={16} />}
          >
            View All Photos
          </Button>
        </div>
      </Card>
      
      {/* Village History */}
      <Card title="Village History">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="prose max-w-none">
              <p>
                Desa Sukamaju has a rich history dating back to the colonial era. The area was initially 
                a small farming community established by migrants from Central Java in the early 1900s.
              </p>
              <p>
                In 1975, it was officially recognized as a village by the Indonesian government, and since 
                then has developed significantly while maintaining its agricultural roots. The name "Sukamaju" 
                comes from the words "suka" (like/happy) and "maju" (progress), reflecting the community's 
                aspiration for prosperity and development.
              </p>
              <p>
                Throughout its history, the village has survived various challenges including economic 
                hardship during the 1998 financial crisis and natural disasters such as flooding in 2007. 
                Despite these challenges, the village community has shown remarkable resilience and unity.
              </p>
              <p>
                Today, Desa Sukamaju is known for its successful community development initiatives, 
                traditional handicrafts, and agricultural innovations that combine modern techniques 
                with traditional wisdom.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <h4 className="font-medium text-gray-900 mb-3">Key Milestones</h4>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-sm font-bold text-blue-600">1975</div>
                <div className="text-sm text-gray-600">Official village establishment</div>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-sm font-bold text-blue-600">1985</div>
                <div className="text-sm text-gray-600">First elementary school built</div>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-sm font-bold text-blue-600">1998</div>
                <div className="text-sm text-gray-600">Community cooperative established</div>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-sm font-bold text-blue-600">2007</div>
                <div className="text-sm text-gray-600">Major village infrastructure upgrade</div>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-sm font-bold text-blue-600">2015</div>
                <div className="text-sm text-gray-600">Village wins national "Clean Village" award</div>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-sm font-bold text-blue-600">2022</div>
                <div className="text-sm text-gray-600">Digital village initiative launched</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Village Leadership */}
      <Card title="Village Organization Structure">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full overflow-hidden mb-4">
              <img 
                src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Village Head Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-medium text-gray-900">Budi Santoso</h4>
            <p className="text-sm text-blue-600">Village Head (Kepala Desa)</p>
            <p className="mt-2 text-sm text-gray-600">Serving since 2022</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full overflow-hidden mb-4">
              <img 
                src="https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Village Secretary Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-medium text-gray-900">Siti Pratiwi</h4>
            <p className="text-sm text-blue-600">Village Secretary</p>
            <p className="mt-2 text-sm text-gray-600">Serving since 2020</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full overflow-hidden mb-4">
              <img 
                src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="BPD Chair Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-medium text-gray-900">Hendra Wijaya</h4>
            <p className="text-sm text-blue-600">Village Council Chair (BPD)</p>
            <p className="mt-2 text-sm text-gray-600">Serving since 2021</p>
          </div>
        </div>
        
        <div className="mt-8">
          <h4 className="font-medium text-gray-900 mb-4">Village Departments</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-md p-4">
              <h5 className="font-medium text-gray-900">Administration Department</h5>
              <p className="text-sm text-gray-600 mt-1">Manages village records, documents, and administrative processes</p>
            </div>
            <div className="border border-gray-200 rounded-md p-4">
              <h5 className="font-medium text-gray-900">Development Department</h5>
              <p className="text-sm text-gray-600 mt-1">Oversees physical infrastructure and development projects</p>
            </div>
            <div className="border border-gray-200 rounded-md p-4">
              <h5 className="font-medium text-gray-900">Finance Department</h5>
              <p className="text-sm text-gray-600 mt-1">Manages village budget, expenditures, and financial reporting</p>
            </div>
            <div className="border border-gray-200 rounded-md p-4">
              <h5 className="font-medium text-gray-900">Social Welfare Department</h5>
              <p className="text-sm text-gray-600 mt-1">Coordinates social programs, aid, and community services</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VillageProfile;