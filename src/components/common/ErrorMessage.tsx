import { ApolloError } from '@apollo/client';

const ErrorMessage = ({ error }: { error: ApolloError | undefined }) =>
  error && <article className="error">Error: {error.message}</article>;

export default ErrorMessage;
