import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import data from "config/token.json";

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          $NAME_TOKEN_REWARD //TODO name from tokensReward.json
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          $SUPPLY_TOKEN_REWARD
                        </span>
                      </div>
                      <Col className="col-auto">
                        //TODO path logo
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" />$PERF_TOKEN_REWARD %
                      </span>{" "}
                      <span className="text-nowrap">$PRICE_TOKEN_REWARD</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                        >
                          $NAME_TOKEN_1 //TODO id 1 from token.json
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          $SUPPLY_TOKEN_1
                        </span>
                      </div>
                      <Col className="col-auto">
                        //TODO path logo
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" />$PERF_TOKEN_1 %
                      </span>{" "}
                      <span className="text-nowrap">$PRICE_TOKEN_1</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                        >
                          $NAME_TOKEN_2 //TODO id 2 from token.json
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          $SUPPLY_TOKEN_2
                        </span>
                      </div>
                      <Col className="col-auto">
                        //TODO path logo
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" />$PERF_TOKEN_2 %
                      </span>{" "}
                      <span className="text-nowrap">$PRICE_TOKEN_2</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};


export default Header;
