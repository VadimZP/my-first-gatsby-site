import { graphql, HeadFC } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

interface Blog {
  data: {
    allFile: {
      nodes: [{ name: string }];
    };
  };
}

const BlogPage = ({ data }: Blog) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="My Blog Posts" />;

export default BlogPage;
