import React, { useEffect, useState } from "react";
import ProgressLoader from "./Common/loaders/progressLoader/ProgressLoader";

function Blog() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);
  // }, []);

  if (loading) {
    return <ProgressLoader />;
  }

  return <></>;
}

export default Blog;
