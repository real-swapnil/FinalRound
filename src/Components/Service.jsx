import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

const Service = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-start">
        <Col md={8} className="mb-4">
          <h6 className="text-uppercase text-muted">Our Services</h6>
          <h2
            className="fw-medium"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "28px",
              lineHeight: "24px",
              letterSpacing: "0.6px",
              color: "#333145",
            }}
          >
            We’re Covering All the{" "}
            <span className="text-primary">Insurance Services</span>
          </h2>
          <p className="text-muted">
            EHR systems centralize patient information, allowing secure access
            and sharing of medical records. They enhance care coordination,
            streamline workflows, and support clinical decisions through
            real-time patient data.
          </p>
          <Button
            style={{
              backgroundColor: "#7166F5",
              borderColor: "#7166F5",
              borderRadius: "16px",
              width: "140px",
              height: "32px",
            }}
          >
            View All Services
          </Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} lg={4} className="mb-4 d-flex justify-content-center">
          <Card className="shadow border-0 p-3" style={{ width: "18rem" }}>
            <Image
              src="https://s3-alpha-sig.figma.com/img/5fa5/df2a/c9da9f85252ce9064a84193b638f7d92?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fDIGU21zYb9bpc8UXGn0iI~BmKBhSInSbxzNTjQycvifaBnDWDj1halM8-1IDqCNZP5VNgqqqn2~-NU4qynZSksC2I87wCW2y8Blf8IIjEowQC1aZz~gBFxDr-D~6sEgvzRdIy-wmxi4ttAC-4w6aCv69AU-8~VnXXgQAwv2skcMYM2yc06CXOBca5sJmTk39ufyY1yBzo0mQQ~PWCk3fB-uzVi77MYQIv3phZGHYyqC8LaeNqUXgDSHPEYaIf1takUN5b4oc0Pfk0YhfrtzeRk66b3b4bAjTwbRd85GTY6q3LULIcqtz5RNUFE00EgT-Qja~FA9N5v~YxLGL1zRYg__"
              fluid
              className="rounded"
            />
            <h5 className="fw-bold mt-3">Insurance Services 1</h5>
            <p className="text-muted">
              EHR systems centralize patient information, allowing secure access
              and sharing of medical records. They enhance care.
            </p>
            <Button variant="link" className="text-primary">
              →
            </Button>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4 d-flex justify-content-center">
          <Card className="shadow border-0 p-3" style={{ width: "18rem" }}>
            <Image
              src="https://s3-alpha-sig.figma.com/img/5fa5/df2a/c9da9f85252ce9064a84193b638f7d92?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fDIGU21zYb9bpc8UXGn0iI~BmKBhSInSbxzNTjQycvifaBnDWDj1halM8-1IDqCNZP5VNgqqqn2~-NU4qynZSksC2I87wCW2y8Blf8IIjEowQC1aZz~gBFxDr-D~6sEgvzRdIy-wmxi4ttAC-4w6aCv69AU-8~VnXXgQAwv2skcMYM2yc06CXOBca5sJmTk39ufyY1yBzo0mQQ~PWCk3fB-uzVi77MYQIv3phZGHYyqC8LaeNqUXgDSHPEYaIf1takUN5b4oc0Pfk0YhfrtzeRk66b3b4bAjTwbRd85GTY6q3LULIcqtz5RNUFE00EgT-Qja~FA9N5v~YxLGL1zRYg__"
              fluid
              className="rounded"
            />
            <h5 className="fw-bold mt-3">Insurance Services 1</h5>
            <p className="text-muted">
              EHR systems centralize patient information, allowing secure access
              and sharing of medical records. They enhance care.
            </p>
            <Button variant="link" className="text-primary">
              →
            </Button>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4 d-flex justify-content-center">
          <Card className="shadow border-0 p-3" style={{ width: "18rem" }}>
            <Image
              src="https://s3-alpha-sig.figma.com/img/5fa5/df2a/c9da9f85252ce9064a84193b638f7d92?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fDIGU21zYb9bpc8UXGn0iI~BmKBhSInSbxzNTjQycvifaBnDWDj1halM8-1IDqCNZP5VNgqqqn2~-NU4qynZSksC2I87wCW2y8Blf8IIjEowQC1aZz~gBFxDr-D~6sEgvzRdIy-wmxi4ttAC-4w6aCv69AU-8~VnXXgQAwv2skcMYM2yc06CXOBca5sJmTk39ufyY1yBzo0mQQ~PWCk3fB-uzVi77MYQIv3phZGHYyqC8LaeNqUXgDSHPEYaIf1takUN5b4oc0Pfk0YhfrtzeRk66b3b4bAjTwbRd85GTY6q3LULIcqtz5RNUFE00EgT-Qja~FA9N5v~YxLGL1zRYg__"
              fluid
              className="rounded"
            />
            <h5 className="fw-bold mt-3">Insurance Services 1</h5>
            <p className="text-muted">
              EHR systems centralize patient information, allowing secure access
              and sharing of medical records. They enhance care.
            </p>
            <Button variant="link" className="text-primary">
              →
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;
