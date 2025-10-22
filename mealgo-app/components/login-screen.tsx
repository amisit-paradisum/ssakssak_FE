"use client"

import { Button } from "@/components/ui/button"

interface LoginScreenProps {
  onNext: () => void
}

export function LoginScreen({ onNext }: LoginScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M40 35L35 40L40 45L35 50L40 55C40 55 45 50 50 50C55 50 60 55 60 55L65 50L60 45L65 40L60 35C60 35 55 40 50 40C45 40 40 35 40 35Z"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M60 55L65 60L60 65L65 70L60 75C60 75 55 70 50 70C45 70 40 75 40 75L35 70L40 65L35 60L40 55C40 55 45 60 50 60C55 60 60 55 60 55Z"
                stroke="url(#gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="gradient" x1="35" y1="55" x2="65" y2="75" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E8D5B7" />
                  <stop offset="1" stopColor="#C9A87C" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">mealgo</h1>
          <p className="text-white/70 text-sm">통합로그인</p>
        </div>
      </div>

      <div className="w-full max-w-md pb-8">
        <Button
          onClick={onNext}
          className="w-full bg-white text-gray-900 hover:bg-gray-100 h-14 rounded-xl font-medium text-base flex items-center justify-center gap-3"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          구글 로그인
        </Button>
        <div className="mt-6 h-1 w-32 mx-auto bg-white/30 rounded-full" />
      </div>
    </div>
  )
}
