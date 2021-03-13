import React, { Component } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

// แก้ไข Html แบบกำหนดเอง
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head />
        <link rel="stylesheet" href="css/palette-gradient.css"></link>
        <body className="sidebar-mini sidebar-collapse">
          <div className="wrapper">
            <Main />
            <NextScript />
          </div>
          <script src="/datacenterv2/js/jquery.min.js"></script>
          {/* <script src="js/bootstrap.bundle.min.js"></script> */}
          <script src="/datacenterv2/js/adminlte.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
