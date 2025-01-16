import { verifyDomain } from '@/scripts/api/landing';
import LandingPage from '../components/LandingPage/LandingPage';
import { headers } from 'next/headers';
import { Toaster } from 'react-hot-toast';
import Custom404Page from '@/components/404/404';
// import logger from '@/lib/logger';

export const generateMetadata = async () => {
  const title = (await headers())?.get('x-title');
  const favicon = (await headers())?.get('x-favicon');
  return {
    title: title || 'Thy Quill',
    icons: {
      icon: favicon || '/app_logo.svg'
    }
  }
};

const LandingHomePage = async () => {
  // logger.info('Landing Page');
  const domain = (await headers())?.get('host') || '';
  console.log(domain, '----domain');
  // const domain = 'www.saasinsider.com'
  const res = await verifyDomain(domain || '');
  if (res) {
    return (
      <>
        <LandingPage domain={res.custom_domain} />
        <Toaster
          position="bottom-left"
          toastOptions={{
            style: {
              background: 'var(--colors-bg-tertiary)',
              color: 'var(--colors-text-black)',
            }
          }} />
      </>
    )
  }
  else {
    return <Custom404Page />
  }
}

export default LandingHomePage;


