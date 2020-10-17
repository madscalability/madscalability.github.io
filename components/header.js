import React from "react";

import Link from "next/link";

const Header = () => (
  <div className="w-full h-12 bg-secondary-500 flex items-center">
    <div className="text-white font-medium pl-8">
      <Link href="/">
        <a>#madScalability</a>
      </Link>
    </div>
  </div>
);

export default Header;
