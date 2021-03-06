import Card from "components/Card";
import { Flex, Box } from "reflexbox";
import matter from "gray-matter";
import Head from "next/head";

export const getBlogs = async () => {
  return await fetch(
    "https://notion-api.splitbee.io/v1/table/48dfa52cf16c4b698ccc53e29ba2fe32?v=e9a28f1589b44ab992d73846454867ed"
  ).then((res) => res.json());
};

export async function getStaticProps() {
  const blogs = await getBlogs();

  return {
    props: {
      blogs,
    },
  };
}

const Blog = ({ blogs }) => {
  // const posts = props.allBlogs;

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📓</text></svg>"
        ></link>
      </Head>
      <Box variant="container" flexGrow="1">
        <div className="">
          <h1>Blog</h1>
          {blogs.map((blog) => (
            <Card key={blog.slug} blog={blog} />
          ))}
        </div>
        <Flex justifyContent="space-between">
          {/* {page <= 1 ? null : (
          <button
            onClick={() => router.push(`/blog?page=${page - 1}`)}
            disabled={page <= 1}
          >
            Previous
          </button>
        )}
        {page >= lastPage ? null : (
          <button
            className="next"
            onClick={() => router.push(`/blog?page=${page + 1}`)}
            disabled={page >= lastPage}
          >
            Next
          </button>
        )} */}
        </Flex>
      </Box>
    </>
  );
};

// export async function getServerSideProps({ query: { page = 1 } }) {
//   const start = +page === 1 ? 0 : (+page - 1) * 5;

//   const numberOfBlogsResponse = await fetch(`${server}/blogs/count`);

//   const numberOfBlogs = await numberOfBlogsResponse.json();

//   const res = await fetch(`${server}/blogs?_limit=3&_start=${start}`);

//   const data = await res.json();

//   return {
//     props: {
//       blogs: data,
//       page: +page,
//       numberOfBlogs,
//     },
//   };
// }

// Blog.getInitialProps = async function () {
//   // const siteConfig = await import(`../data/config.json`)
//   // get all .md files from the src/posts dir
//   const posts = ((context) => {
//     // grab all the files matching this context
//     const keys = context.keys();
//     // grab the values from these files
//     const values = keys.map(context);
//     // go through each file
//     const data = keys.map((key, index) => {
//       // Create slug from filename
//       const slug = key
//         .replace(/^.*[\\\/]/, "")
//         .split(".")
//         .slice(0, -1)
//         .join(".");
//       // get the current file value
//       const value = values[index];
//       // Parse frontmatter & markdownbody for the current file
//       const document = matter(value.default);
//       // return the .md content & pretty slug
//       return {
//         document,
//         slug,
//       };
//     });
//     // return all the posts
//     return data;
//   })(require.context("../posts/blog", true, /\.md$/));
//   return {
//     allBlogs: posts,
//     // ...siteConfig,
//   };
// };

export default Blog;
