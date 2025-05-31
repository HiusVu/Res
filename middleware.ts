import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Middleware should only handle routing/auth logic
  // Database initialization is moved to a server component or API route
  
  return NextResponse.next();
}
