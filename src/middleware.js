import createMiddleware from 'next-intl/middleware';
import {routing} from './routing';
 
export default createMiddleware(routing);
 
export const config = {
  matcher: ['/', '/(id|en)/:path*']
};