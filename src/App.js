import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Builder from "./containers/builder/builder";
function App() {
  return (
    <Layout>
      <Builder></Builder>
    </Layout>
  );
}

export default App;
