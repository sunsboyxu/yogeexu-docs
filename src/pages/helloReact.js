import Layout from "@theme/Layout";
import React from "react";

export default function HelloReact() {
  return (
    <Layout title='hello react' description="react description">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        fontSize: '20px',
      }}>
        <p>
          修改 <code>src/pages/helloReact.js</code>
        </p>
      </div>
    </Layout>
  )
}