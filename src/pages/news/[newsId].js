import Head from "next/head";
import { Col, Row } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import RootLayout from "@/components/Layouts/RootLayout";

const News = ({ news }) => {
  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row style={{ marginTop: "80px", alignItems: "center" }}>
        <Col md={6} lg={12}>
          <Image
            alt="example"
            src={news?.image_url}
            width={500}
            height={300}
            responsive
          />
        </Col>
        <Col md={6} lg={12} style={{ paddingLeft: "20px" }}>
          <h1 style={{ fontSize: "30px" }}>{news?.title}</h1>
          <span
            style={{
              color: "gray",
              display: "block",
              fontSize: "20px",
            }}
          >
            <UserOutlined /> {news?.author}
          </span>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "100%",
            }}
          ></div>

          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              color: "gray",
              margin: "10px 0px",
              fontSize: "20px",
            }}
          >
            <span>
              <CalendarOutlined /> {news?.release_date}
            </span>
            <span>
              <CommentOutlined /> {news?.comment_count} Comments
            </span>
            <span>
              <ProfileOutlined /> {news?.category}
            </span>
          </p>

          <p style={{ fontSize: "25px", fontWeight: "lighter" }}>
            {news?.description}
          </p>
        </Col>
      </Row>
    </>
  );
};

export default News;

News.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const newes = await res.json();

//   const paths = newes.map((news) => ({
//     params: { newsId: news.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `http://localhost:5000/news/${context.params.newsId}`
//   );
//   const news = await res.json();

//   return {
//     props: {
//       news,
//     },
//   };
// };

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:5000/news/${context.params.newsId}`
  );
  const news = await res.json();

  return {
    props: {
      news,
    },
  };
};