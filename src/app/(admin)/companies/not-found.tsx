import React from 'react';
import Link from 'next/link';

export interface NotFoundProps {}

const NotFound = ({}: NotFoundProps) => {
  return (
    <div>
      <p>Could not found company</p>
      <Link href="/companies" className="text-blue-500">
        Back to companies
      </Link>
    </div>
  );
};

export default NotFound;
