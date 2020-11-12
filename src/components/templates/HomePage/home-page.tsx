import Link from 'next/link';

import { ReactElement } from 'react';
import { NextSeo } from 'next-seo';

export const HomePage = (): ReactElement => (
  <>
    <NextSeo title="PB Hack" description="Site description" />
    <h1>This will eventually be a search page</h1>
    <Link href="/properties">Go to properties list</Link>
  </>
);
