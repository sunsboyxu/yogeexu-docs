import React from "react";
import Layout from "@theme/Layout";

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