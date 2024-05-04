'use client'
import React, { useEffect } from 'react';
import { SelectDemo } from '../components/navbar/select';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/components/firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import Navbar from './dashboard/page';
import Home from '@/components/navbar/page';

const IndexPage: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    // Ensure session storage is available before accessing it
    if (typeof window !== 'undefined') {
      const userSession = sessionStorage.getItem('user');
      if (!user && !userSession) {
        router.push('/sign-in');
      }
    }
  }, [user, router]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
      <Home/>
        <div className="flex-grow p-4 relative">
          <div className="text-gray-800">
            <div className="mb-8">
              <SelectDemo />
              <Button
                onClick={() => {
                  signOut(auth);
                  if (typeof window !== 'undefined') {
                    sessionStorage.removeItem('user');
                  }
                }}
                className="absolute top-0 right-0 mt-2 mr-2"
              >
                Log Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
