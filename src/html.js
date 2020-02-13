/* eslint-disable */
import React from "react";

export default props => (
  <html {...props.htmlAttributes}>
    <head>
      <title>Scott Wagner</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap" rel="stylesheet" />
      {props.headComponents}
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
      ></script>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-75175707-1"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());

              gtag('config', 'UA-75175707-1');
            `
        }}
      />
    </head>
    <body {...props.bodyAttributes}>
      {props.preBodyComponents}
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      {props.postBodyComponents}
    </body>
  </html>
);
