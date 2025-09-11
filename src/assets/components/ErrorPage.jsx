import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="mt-2">Sorry, an unexpected error has occurred.</p>
      <p className="mt-2 text-red-600 italic">
        {error.statusText || error.message}
      </p>
      <a href="/" className="mt-4 text-blue-500 underline">
        Go back home
      </a>
    </div>
  );
};

export default ErrorPage;
