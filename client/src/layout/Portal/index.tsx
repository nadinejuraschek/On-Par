import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IPortal } from './types';
import { createWrapperAndAppendToBody } from './utils';

export const Portal = ({ children, wrapperId = "portal" }: IPortal): JSX.Element => {
  const [wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      // delete the programatically created element
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }
  }, [wrapperId]);

  // wrapperElement will be null on the first render
  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};
