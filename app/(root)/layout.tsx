import { Children } from '@/types';

import Header from '@/components/Header';

function layout({ children }: Children) {
  return (
    <main className="min-h-screen text-gray-400">
      <Header />
      <div className="container py-10">{children}</div>
    </main>
  );
}

export default layout;
