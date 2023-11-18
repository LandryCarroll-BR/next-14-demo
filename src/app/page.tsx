import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

// eslint-disable-next-line import/no-default-export -- requires default export
export default function Home(): React.JSX.Element {
  return (
    <main className="">
      <Card>
        <CardHeader>
          <CardTitle>Hello World</CardTitle>
        </CardHeader>
      </Card>
    </main>
  );
}
