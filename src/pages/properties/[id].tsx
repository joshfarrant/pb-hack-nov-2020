import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { PropertyDetailPage } from '../../components/templates/PropertyDetailPage';
import { PROPERTIES } from '../../constants';

const Property = (): ReactElement => {
  const router = useRouter();
  const { id } = router.query;

  const foundProperty = PROPERTIES.find(x => x.id === id);

  // TODO What if property not found?

  return <PropertyDetailPage {...foundProperty} />;
};

export default Property;
