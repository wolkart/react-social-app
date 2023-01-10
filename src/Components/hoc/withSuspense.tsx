import React, {ComponentType, Suspense} from 'react';
import {Preloader} from "../common/Preloader/Preloader";

export function withSuspense<T>(Component: ComponentType) {
  return (props: T) => {
    return (
      <Suspense fallback={<Preloader/>}>
        <Component {...props}/>
      </Suspense>
    )
  }
}