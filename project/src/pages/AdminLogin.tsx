import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, Key, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/UI/Button';

interface AdminLoginProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const AdminLogin = ({ isLoggedIn, setIsLoggedIn }: AdminLoginProps) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginAttempt, setLoginAttempt] = useState(false);

  // If already logged in, redirect to home
  if (isLoggedIn) {
    navigate('/');
    return null;
  }

  const validateUsername = (value: string) => {
    if (value.length < 5) {
      return 'Username minimal 5 karakter';
    }
    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      return 'Username hanya boleh menggunakan huruf, angka, dan underscore';
    }
    if (/\s/.test(value)) {
      return 'Username tidak boleh mengandung spasi';
    }
    return '';
  };

  const validatePassword = (value: string, currentUsername: string) => {
    if (value.length < 8) {
      return 'Password minimal 8 karakter';
    }
    if (!/[A-Z]/.test(value)) {
      return 'Password harus mengandung minimal 1 huruf besar';
    }
    if (!/[a-z]/.test(value)) {
      return 'Password harus mengandung minimal 1 huruf kecil';
    }
    if (!/[0-9]/.test(value)) {
      return 'Password harus mengandung minimal 1 angka';
    }
    if (!/[!@#$%^&*]/.test(value)) {
      return 'Password harus mengandung minimal 1 karakter khusus (!@#$%^&*)';
    }
    if (/\s/.test(value)) {
      return 'Password tidak boleh mengandung spasi';
    }
    if (value.toLowerCase().includes(currentUsername.toLowerCase())) {
      return 'Password tidak boleh mengandung username';
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoginAttempt(true);
    
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password, username);
    
    if (usernameError || passwordError) {
      setErrors({
        username: usernameError,
        password: passwordError,
      });
      return;
    }

    setIsLoading(true);

    // Mock login with admin credentials
    setTimeout(() => {
      if (username.toLowerCase() === 'admin_desa' && password === 'Admin@123') {
        setIsLoggedIn(true);
        navigate('/');
      } else {
        setErrors({
          username: 'Username atau password salah',
          password: 'Username atau password salah',
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[calc(100vh-200px)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-md space-y-8">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <Lock className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Masuk ke Sistem Admin
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Akses dashboard administrasi desa
          </p>
        </motion.div>
        
        <motion.form 
          className="mt-8 space-y-6" 
          onSubmit={handleSubmit}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  id="username"
                  name="username"
                  type="text"
                  required
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.username ? 'border-red-300' : 'border-gray-300'
                  } rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="Masukkan username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {errors.username && (
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mt-2 text-sm text-red-600"
                >
                  {errors.username}
                </motion.p>
              )}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Key className="h-5 w-5 text-gray-400" />
                </div>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className={`block w-full pl-10 pr-10 py-2 border ${
                    errors.password ? 'border-red-300' : 'border-gray-300'
                  } rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </motion.button>
                </div>
              </div>
              {errors.password && (
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mt-2 text-sm text-red-600"
                >
                  {errors.password}
                </motion.p>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Ingat saya
              </label>
            </div>
            
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Lupa password?
              </a>
            </div>
          </div>
          
          <div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={isLoading}
              >
                {isLoading ? 'Sedang Masuk...' : 'Masuk'}
              </Button>
            </motion.div>
          </div>

          {loginAttempt && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-center text-gray-600"
            >
              <p>Gunakan kredensial berikut untuk demo:</p>
              <p className="font-medium">Username: admin_desa</p>
              <p className="font-medium">Password: Admin@123</p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default AdminLogin;