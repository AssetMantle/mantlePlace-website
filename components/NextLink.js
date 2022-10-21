import React, { forwardRef } from "react";

const NextLink = forwardRef(
  ({ href, as, prefetch, children, className, ...props }, ref) => {
    return (
      <a
        className={className}
        href={href}
        as={as}
        prefetch={prefetch || ""}
        {...props}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

NextLink.displayName = "NextLink";

NextLink.defaultProps = {
  href: "#",
  prefetch: false,
};

export default NextLink;
