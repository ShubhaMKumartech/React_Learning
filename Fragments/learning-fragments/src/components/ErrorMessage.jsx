const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h2>i am still hungry</h2>}</>;
};

export default ErrorMessage;
