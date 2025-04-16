import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { STATIC_PAGES } from '@/constants/static-pages';
import { withAuth } from '@/lib/withAuth';

const Home = async () => {
  const session = await withAuth();

  return (
    <div>
      <div className={'my-7'}>
        <h1 className={'mb-4 text-4xl font-semibold text-gray-800'}>
          Welcome, {session?.user?.name}
        </h1>
        <p className={'text-xl text-gray-600'}>Email: {session?.user?.email}</p>
      </div>
      <div>
        <Link href={STATIC_PAGES.users}>
          <Card className={'hover:bg-primary/10'}>
            <CardHeader>
              <CardTitle className={'mx-auto'}>We currently managing</CardTitle>
            </CardHeader>
            <CardContent className={'mx-auto'}>
              {/*Display the current count of users from api*/}
              <div className={'flex flex-col items-center'}>
                <span className={'text-4xl'}>32</span>
                <span className={'text-sm'}>users</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Home;
