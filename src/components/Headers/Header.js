import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import tokenReward from "config/tokensReward.json";

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
            {tokenReward.map((token, index) => (
                <Col lg="6" xl="4" data-index={index}>
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            {token.name}
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            $SUPPLY_TOKEN_REWARD
                          </span>
                        </div>
                        <Col className="col-auto">
                        <img
                          alt="super"
                          className="navbar-brand-img"
                          src={token.pathImg} //TODO assets
                        />
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
            ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};


export default Header;
