import * as AWSReactIcons from '@aws-icons/react_2.1.1';
import { Fragment } from 'react';

const ListIcons = ({ componentName }) => {
  const Component =
    AWSReactIcons[componentName || 'ArchitectureServiceAmazonAthena'];

  return (
    <Fragment>
      <Component size={140} />
    </Fragment>
  );
};

export default ListIcons;
