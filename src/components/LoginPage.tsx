import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Music, Headphones, PlayCircle } from 'lucide-react';
import { User, Artist } from '../App';
import exampleImage from 'figma:asset/33aecd292d5d7c63e9b30058f5f3a96d89807265.png';

// Mock data for demonstration
const mockArtists: Artist[] = [
  { id: '1', name: 'KENSHI YONEZU', genre: 'J-Pop', playCount: 1500, imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400', connections: ['2', '3'] },
  { id: '2', name: 'CHANGMO', genre: 'K-Hip Hop', playCount: 1200, imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400', connections: ['1', '4'] },
  { id: '3', name: 'IU', genre: 'K-Pop', playCount: 1800, imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400', connections: ['1', '5'] },
  { id: '4', name: 'Zico', genre: 'K-Hip Hop', playCount: 900, imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400', connections: ['2', '6'] },
  { id: '5', name: 'TWICE', genre: 'K-Pop', playCount: 1100, imageUrl: 'https://images.unsplash.com/photo-1540331547168-8b63109225b7?w=400', connections: ['3', '7'] },
  { id: '6', name: 'Dean', genre: 'K-R&B', playCount: 800, imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', connections: ['4', '8'] },
  { id: '7', name: 'BLACKPINK', genre: 'K-Pop', playCount: 1300, imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400', connections: ['5', '9'] },
  { id: '8', name: 'Crush', genre: 'K-R&B', playCount: 700, imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', connections: ['6'] },
  { id: '9', name: 'BTS', genre: 'K-Pop', playCount: 2100, imageUrl: 'https://images.unsplash.com/photo-1665615839740-f9cfcc9568f9?w=400', connections: ['7', '3'] },
  { id: '10', name: 'NewJeans', genre: 'K-Pop', playCount: 950, imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400', connections: ['3', '5'] }
];

interface LoginPageProps {
  onLogin: (user: User) => void;
  onJoinShare: (user: User, matchPercentage: number) => void;
}

export function LoginPage({ onLogin, onJoinShare }: LoginPageProps) {
  const [shareLink, setShareLink] = useState('');
  const [isJoining, setIsJoining] = useState(false);

  const handlePlatformLogin = (platform: 'spotify' | 'apple' | 'youtube') => {
    // Mock login - in real app this would use OAuth
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: 'Music Lover',
      platform,
      profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      topArtists: mockArtists
    };
    
    onLogin(mockUser);
  };

  const handleJoinShareLink = () => {
    if (!shareLink.trim()) return;
    
    setIsJoining(true);
    
    // Mock share link joining
    setTimeout(() => {
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: 'Friend',
        platform: 'spotify',
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        topArtists: mockArtists.slice(0, 5) // Different subset for variety
      };
      
      const matchPercentage = 86; // Mock match percentage
      onJoinShare(mockUser, matchPercentage);
      setIsJoining(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Image with fade-out animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${exampleImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'fadeToOpaque 5s ease-in-out forwards',
        }}
      />
      
      {/* Radial gradient overlay for better focus on center */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      
      <div className="max-w-md w-full mx-4 relative z-10">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
              <Headphones className="w-10 h-10 text-black" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-3 text-white">
            Music Taste Visualizer
          </h1>
          <p className="text-gray-400 text-lg">
            Discover your music taste graph and blend playlists with friends
          </p>
        </div>

        <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 border border-gray-800/50 shadow-2xl">
          <h2 className="text-xl font-bold mb-6 text-white">Connect your music platform</h2>
          
          <div className="space-y-4 mb-8">
            <Button 
              onClick={() => handlePlatformLogin('spotify')}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-full flex items-center justify-center gap-3 transition-colors"
            >
              <Music className="w-5 h-5" />
              Continue with Spotify
            </Button>
            
            <Button 
              onClick={() => handlePlatformLogin('apple')}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-full flex items-center justify-center gap-3 transition-colors"
            >
              <PlayCircle className="w-5 h-5" />
              Continue with Apple Music
            </Button>
            
            <Button 
              onClick={() => handlePlatformLogin('youtube')}
              className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-full flex items-center justify-center gap-3 transition-colors"
            >
              <PlayCircle className="w-5 h-5" />
              Continue with YouTube Music
            </Button>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-sm font-medium text-gray-300 mb-4">
              Join a friend's taste sharing
            </h3>
            <div className="flex gap-3">
              <Input
                placeholder="Paste share link here..."
                value={shareLink}
                onChange={(e) => setShareLink(e.target.value)}
                className="flex-1 bg-gray-800/80 backdrop-blur-sm border-gray-700 text-white rounded-md px-4 py-2"
              />
              <Button 
                onClick={handleJoinShareLink}
                disabled={!shareLink.trim() || isJoining}
                className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 rounded-md disabled:opacity-50"
              >
                {isJoining ? 'Joining...' : 'Join'}
              </Button>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          This is a demo app with mock data. No real authentication is performed.
        </p>
      </div>
    </div>
  );
}