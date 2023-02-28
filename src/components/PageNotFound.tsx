import React from "react";

function PageNotFound({ title = "Page" }: { title?: string }) {
  return <h2>{title} Not Found</h2>;
}

export default PageNotFound;
