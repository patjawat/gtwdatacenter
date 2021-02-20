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
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CQuicksand:300,400,500,700"
          rel="stylesheet"
        ></link>

{/* <link href="static/https://fonts.googleapis.com/css2?family=Kanit:wght@100i,300i,400,400i,600,600i,700,700&family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link> */}

        

    <div>
  {/* BEGIN: Vendor CSS*/}
  <link rel="stylesheet" type="text/css" href="static/vendors/css/vendors.min.css" />

  <link rel="stylesheet" type="text/css" href="static/css/bootstrap.css" />
  <link rel="stylesheet" type="text/css" href="static/css/bootstrap-extended.css" />
  <link rel="stylesheet" type="text/css" href="static/css/colors.css" />
  <link rel="stylesheet" type="text/css" href="static/css/components.css" />
  <link rel="stylesheet" type="text/css" href="static/css/core/menu/menu-types/vertical-menu-modern.css" />
  <link rel="stylesheet" type="text/css" href="static/css/core/colors/palette-gradient.css" />
  <link rel="stylesheet" type="text/css" href="static/fonts/simple-line-icons/style.css" />
  <link rel="stylesheet" type="text/css" href="static/css/core/colors/palette-gradient.css" />

  {/* <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" /> */}

</div>

<body class="vertical-layout vertical-menu-modern vertical-collapsed-menu 2-columns   menu-collapsed fixed-navbar" data-open="click" data-menu="vertical-menu-modern" data-col="2-columns">
          <div className="pace  pace-inactive">
            <div
              className="pace-progress"
              data-progress-text="100%"
              data-progress={99}
              style={{ transform: "translate3d(100%, 0px, 0px)" }}
            >
              <div className="pace-progress-inner" />
            </div>
            <div className="pace-activity" />
          </div>

          <Main />
          <NextScript />


        <script src="static/vendors/js/vendors.min.js"></script>
        <script src="static/data/jvector/visitor-data.js"></script>
        <script src="static/js/core/app-menu.js"></script>
        <script src="static/js/core/app.js"></script>

        </body>
      </Html>
    );
  }
}

export default MyDocument;
