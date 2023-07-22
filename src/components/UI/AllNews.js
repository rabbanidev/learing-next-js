import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ScanOutlined,
} from "@ant-design/icons";

const AllNews = () => {
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
        <Col className="gutter-row" span={6}>
          <Card
            hoverable
            cover={
              <Image
                src={
                  "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                }
                alt=""
                width="500"
                height="200"
                responsive
              />
            }
          >
            <Card.Meta title="Europe Street beat" />
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
                <CalendarOutlined /> June 02, 2023
              </span>
              <span>
                <CommentOutlined /> 10 Comments
              </span>
              <span>
                <ScanOutlined /> Techonology
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel
            </p>
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
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AllNews;
