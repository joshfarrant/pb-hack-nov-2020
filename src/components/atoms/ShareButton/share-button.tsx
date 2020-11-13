import { ReactElement } from 'react';

import { StyledButton } from './share-button.styled';

export const ShareButton = (): ReactElement => {
  return (
    <StyledButton
      onClick={async () => {
        if (typeof navigator.share === 'function') {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const shareData = {
            title: 'Purplebricks',
            text: 'House for sale with Purplebricks',
            url: window.location.href,
          };
          try {
            await navigator.share(shareData);
          } catch (err) {
            console.debug('err: ', err);
          }
        }
      }}
    >
      S
    </StyledButton>
  );
};
