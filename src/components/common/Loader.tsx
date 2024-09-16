import { PropsWithChildren } from 'react';

type LoaderProps = {
  loading: boolean;
};

const Loader = ({ loading, children }: PropsWithChildren<LoaderProps>) => (
  <div aria-busy={loading} data-testid="loader" className="loader">
    {!loading && children}
  </div>
);

export default Loader;
