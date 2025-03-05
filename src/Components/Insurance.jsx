import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

const Insurance = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h6 className="text-uppercase text-muted">About Us</h6>
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
            We’re Providing Best{" "}
            <span className="text-primary">Insurance Policies</span>
          </h2>
          <p className="text-muted">
            EHR systems centralize patient information, allowing secure access
            and sharing of medical records. They enhance care coordination,
            streamline workflows, and support clinical decisions through
            real-time patient data.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={4} className="text-center">
          <Card className="p-3 shadow border-0">
            <Image
              src="https://s3-alpha-sig.figma.com/img/c904/63b7/86cb9bb18e97099f8438191eed293adf?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bn-hL0r1ZwmHuUJNCbSsW5lsibIQD-U2COkIsHJtK8svZfE2-D06k3IFDWThNU1yZWiPGL7YYLv0QFq7XwPqDcNEVmh1pJP5B9b2J9~9pgnmumxxohCN3LTzN7O9cg2qh-VgJGFBFwlhank74vMhOOgzSEzpt2KKrcFlbUZ6TZjhDoA0glj2oRxdfghU8ZOD8bg3Yhdzj6YOb7osngqR7ilPL9SFfsOEb3f69Zi7FmDou4kC8qtWl94kUVnRl4uo95bXI5Vq~ebT3ZtKyHJd1SPfoDlyW9u1-wMSFaL-BWYHItxUZ6kAqQDD5OyqRwwWJbR6hQ2Ev6QdVwZ2VahNgQ__"
              fluid
            />
            <h3 className="fw-bold mt-3">96%</h3>
            <p className="text-muted">Success Rate</p>
          </Card>
        </Col>
        <Col md={4} className="text-center">
          <Card className="p-3 shadow border-0">
            <h3 className="fw-bold text-primary">20+</h3>
            <p className="text-muted">Years of Experience</p>
          </Card>
        </Col>
        <Row className="justify-content-center align-items-center mt-5">
          {/* Image Section */}
          <Col md={1} className="d-flex align-items-center">
            <Image
              src="https://s3-alpha-sig.figma.com/img/a0f7/22c3/77abded19106368011b55b90bc62ef13?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mwM8Lrc4jxzszaIrBwY0GQekNPiJIlcPi~kqLaaeJQqZacyGOo6K8gwQUL8Bx-Jpwo3idNYw66R1Z85Y19CrjlCnfU6OVTvD7MjgsEyF1dwae6pp~J5aDP5WWyyvVjV0dly3QGUNOsiLZTTVhfJ8MOdMwkPdU~GR8vW74AYHd1niZ-a-ezeNvLxkJY-P8okabYDI0uzxqh7P-6CtF-tcFFeidEu-kNGH3IVmn7k1sV9XqsLKogO3k7PtJNBQAMHts7bHCihgAEs9tdg9g94z7CXjAnFv-9W0gXc8K1bWHqHIT6wdrfx3VGmK6NVMmoY236G9ifjCXa0ui0YRXmZNYw__"
              width={34}
              height={34}
              style={{ borderRadius: "2px", marginRight: "8px" }}
            />
          </Col>

          {/* Text Section */}
          <Col md={2} className="d-flex flex-column">
            <Card
              style={{
                width: "177px",
                height: "51px",
                backgroundColor: "#FFFFFF",
                borderRadius: "5px",
                boxShadow: "0px 4px 4px #F0F0F0",
                position: "relative",
                top: "7px",
                left: "-10px",
              }}
              className="d-flex justify-content-center align-items-center"
            >
              <div style={{ textAlign: "center" }}>
                <h5 className="mb-0">4.5K</h5>
                <p className="text-muted" style={{ fontSize: "12px" }}>
                  Satisfied Clients
                </p>
              </div>
            </Card>
          </Col>

          {/* Background Color Element */}
          <Col
            md={2}
            style={{
              width: "89px",
              height: "43px",
              backgroundColor: "#0E264A",
              opacity: "55%",
              position: "absolute",
              top: "1013px",
              left: "347px",
            }}
          />
        </Row>
      </Row>

      <Row className="mt-5 align-items-center">
        <Col md={6}>
          <h5 className="text-muted text-uppercase">
            Be Happy To Get Insurance
          </h5>
          <h3 className="fw-bold">Start Tracking Your Claims</h3>
          <p className="text-muted">
            EHR systems centralize patient information, allowing secure access
            and sharing of medical records. They enhance care coordination and
            streamline workflows.
          </p>
        </Col>
        <Col md={6} className="text-center position-relative">
          <div
            className="position-absolute w-100 h-100"
            style={{
              backgroundImage:
                "url('https://s3-alpha-sig.figma.com/img/01bf/1aa0/aacb761d51bd04928e87d8c8bb7661c8?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HC~jP4DmG8mb~-y83cVPzaJjZMkNCQ1JIsOWwLoBM8vg6MZkUtpHtWm~eXNf7VBZJ4tKHGcj~ra9yfYjZVG78ahCQty3mH-I6r1SCamAYzxznz63BYQ2nqtre~dodpHn9CP63SRZqQGgW1LUA~KSDwn6lIthrtRgwOcGFEfV7X7bMpKx3tOydmsYB4uFULPrpemkKnnHiL4fxD9gDFwCGEBL0NG-NXxaVDYLD3D72mnCZqsOuMCOWrUAJqlWDDosg4l1KfvGTG-sHzWx-FL~eq6EtSOP8kblQQ7zprMuT1gMXSzIFHfIsZ82Iy0RO8i~D~D~g~EnlnrQU4UqtoSc8g__')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
            }}
          ></div>
          <Row className="justify-content-center mt-5">
            <Col md={4} className="d-flex justify-content-center">
              <Card
                className="p-4 text-center shadow-lg border-0"
                style={{
                  width: "169px",
                  height: "193px",
                  borderRadius: "16px",
                  backgroundColor: "#333145",
                }}
              >
                <Button
                  className="mb-3"
                  style={{
                    backgroundColor: "#7166F5",
                    borderColor: "#7166F5",
                    borderRadius: "16px",
                    width: "127px",
                    height: "32px",
                  }}
                >
                  Claim Coverage
                </Button>
                <p
                  className="text-white-50 mb-1"
                  style={{
                    fontSize: "10px",
                    lineHeight: "24px",
                    letterSpacing: "-0.5px",
                  }}
                >
                  OR
                </p>
                <p
                  className="text-white-50 mb-0"
                  style={{
                    fontSize: "10px",
                    lineHeight: "24px",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Mail us Anything
                </p>
                <p className="text-white-50" style={{ fontSize: "10px" }}>
                  yourmail@gmail.com
                </p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Insurance;
