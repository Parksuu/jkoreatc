import React from 'react';

const Head = () => {
  return (
      <>
      <head>
      {/* Basic */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/* Mobile Metas */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      {/* Site Metas */}
      <link rel="icon" href="../images/fevicon.png" type="image/gif" />
      <meta name="keywords" content="" />
      <meta name="description" content="" />
      <meta name="author" content="" />

      <title>Jkorea</title>

      {/* bootstrap core css */}
      <link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />

      {/* fonts style */}
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap"
        rel="stylesheet" />

      {/* font awesome style */}
      <link href="../css/font-awesome.min.css" rel="stylesheet" />
      {/* Custom styles for this template */}
      <link href="../css/style.css" rel="stylesheet" />
      {/* responsive style */}
      <link href="../css/responsive.css" rel="stylesheet" />
    </head>
      </>
    
  );
};


export default Head;