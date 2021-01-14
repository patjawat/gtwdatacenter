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

{/* <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100i,300i,400,400i,600,600i,700,700&family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link> */}

        

    <div>
  {/* BEGIN: Vendor CSS*/}
  <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/vendors.min.css" />
  {/* END: Vendor CSS*/}
  {/* BEGIN: Theme CSS*/}
  <link rel="stylesheet" type="text/css" href="app-assets/css/bootstrap.css" />
  <link rel="stylesheet" type="text/css" href="app-assets/css/bootstrap-extended.css" />
  <link rel="stylesheet" type="text/css" href="app-assets/css/colors.css" />
  <link rel="stylesheet" type="text/css" href="app-assets/css/components.css" />
  <link rel="stylesheet" type="text/css" href="app-assets/css/core/menu/menu-types/vertical-menu-modern.css" />
  <link rel="stylesheet" type="text/css" href="app-assets/css/core/colors/palette-gradient.css" />
  <link rel="stylesheet" type="text/css" href="app-assets/fonts/simple-line-icons/style.css" />
  <link rel="stylesheet" type="text/css" href="app-assets/css/core/colors/palette-gradient.css" />
  {/* END: Page CSS*/}
  {/* BEGIN: Custom CSS*/}
  {/* <link rel="stylesheet" type="text/css" href="assets/css/style.css" /> */}
  {/* END: Custom CSS*/}
</div>



        <body
          class="vertical-layout vertical-menu-modern 2-columns   fixed-navbar"
          data-open="click"
          data-menu="vertical-menu-modern"
          data-col="2-columns"
        >
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


    <script src="app-assets/vendors/js/vendors.min.js"></script>

    <script src="app-assets/data/jvector/visitor-data.js"></script>
    <script src="app-assets/js/core/app-menu.js"></script>
    <script src="app-assets/js/core/app.js"></script>

        </body>
      </Html>
    );
  }
}

export default MyDocument;
