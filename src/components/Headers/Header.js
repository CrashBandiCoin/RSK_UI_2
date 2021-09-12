import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import tokenReward from "config/token.json";

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
            {tokenReward.map((token, index) => (
                <Col lg="6" xl="4" key={index}>
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                              <img
                                alt={'logo ' + token.name}
                                className="img-fluid logo-crypto-header"
                                src={process.env.PUBLIC_URL + token.pathImg} //TODO assets
                              />
                              {token.name}

                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            1 000 000
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 30 %
                        </span>{" "}
                        <span className="text-nowrap">10 $</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
            ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};


export default Header;
