import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ScanOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const AllNews = ({ allNews }) => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0",
        }}
      ></h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allNews.map((news) => (
          <Col key={news.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={news.image_url}
                  alt={news.title}
                  width="500"
                  height="200"
                  responsive
                />
              }
            >
              <Card.Meta title={news.title} />
              <div
                className="line"
                style={{
                  height: "5px",
                  width: "100%",
                  background: "#000000",
                  margin: "20px 0",
                }}
              />
              <p
                style={{
                  width: "100%",
                  fontSize: "12px",
                  margin: "10px 0",
                  color: "gray",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <CalendarOutlined /> {news.release_date}
                </span>
                <span>
                  <CommentOutlined /> {news.comment_count} Comments
                </span>
                <span>
                  <ScanOutlined /> {news.category}
                </span>
              </p>
              <p
                style={{
                  width: "100%",
                  fontSize: "12px",
                  margin: "10px 0",
                  color: "gray",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {news.description.slice(0, 70)
                  ? `${news.description.slice(0, 70)}...`
                  : news.description.slice(0, 70)}
              </p>
              <Link href={`/news/${news.id}`}>
                <Button
                  type="primary"
                  style={{
                    display: "block",
                    width: "100%",
                    background: "black",
                    color: "white",
                  }}
                >
                  Keep Reading
                  <ArrowRightOutlined />
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllNews;
