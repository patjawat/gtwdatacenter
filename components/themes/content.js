import React from "react";

export default function Content({ children }) {
  return (
    <div className="content-wrapper" style={{ minHeight: 2091 }}>
      <section className="content">
        <div className="container-fluid mt-3">{children}</div>
      </section>
      {/* /.content */}
    </div>
  );
}
