import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";

import * as actions from "../actions";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showGif: false,
      searchTerm: "",
      searchError: false
    };
  }

  handleClose = () => {
    this.setState({ showGif: false });
  };

  handleShow = gif => {
    this.setState({ showGif: gif });
  };

  handleInput = val => {
    this.setState({ searchTerm: val });
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    if (searchTerm.length > 2) {
      this.props.searchGifs(searchTerm);
      this.setState({ searchError: false });
    } else {
      this.setState({
        searchError: "Search term must be minimum 3 characters."
      });
    }
  };

  render() {
    const trending = this.props.giphy.trending;
    const search = this.props.giphy.search;
    const randomGif = this.props.giphy.randomGif;
    const bg = randomGif ? randomGif.images.original.url : null;

    return (
      <div>
        <Container style={{ background: "black" }}>
          <Background style={{ backgroundImage: `url(${bg})` }} />
          <Hero>
            <JumboHeading>Gif-taculous!</JumboHeading>
            <JumboSubheading>Go ahead... search Giphy.</JumboSubheading>
            <InputGroup
              className="mb-3"
              style={{ maxWidth: 400, margin: "0 auto" }}
            >
              <FormControl
                placeholder="Enter search term..."
                value={this.state.searchTerm}
                onChange={e => this.handleInput(e.target.value)}
              />
              <InputGroup.Append>
                <Button variant="primary" onClick={() => this.handleSearch()}>
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
            {this.state.searchError ? (
              <Alert
                style={{ maxWidth: 400, margin: "0 auto" }}
                variant="danger"
              >
                {this.state.searchError}
              </Alert>
            ) : null}
          </Hero>
        </Container>
        <Container>
          <Section style={{ padding: "50px 0" }}>
            {!search.length ? (
              <div>
                <h3>Trending GIFs</h3>
                <HR style={{ width: "100%" }} />
                <GifsContainer>
                  {trending.length
                    ? trending.map((gif, index) => {
                        return (
                          <Gif key={index} className="card">
                            <GifPreview
                              style={{
                                backgroundImage: `url(${
                                  gif.images.original.url
                                })`
                              }}
                              onClick={() => this.handleShow(gif)}
                            />
                            <div className="card-body">
                              <GifTitle>{gif.title}</GifTitle>
                              <UploadedBy>
                                Uploaded by: {gif.username || "Unknown"}
                              </UploadedBy>
                              <a
                                href="#"
                                className="btn btn-primary"
                                onClick={() => this.handleShow(gif)}
                              >
                                View
                              </a>
                            </div>
                          </Gif>
                        );
                      })
                    : null}
                </GifsContainer>
              </div>
            ) : (
              <div>
                <h3>Search Results: {this.state.searchTerm}</h3>
                <HR style={{ width: "100%" }} />
                <GifsContainer>
                  {search.length
                    ? search.map((gif, index) => {
                        return (
                          <Gif key={index} className="card">
                            <GifPreview
                              style={{
                                backgroundImage: `url(${
                                  gif.images.original.url
                                })`
                              }}
                              onClick={() => this.handleShow(gif)}
                            />
                            <div className="card-body">
                              <GifTitle>{gif.title}</GifTitle>
                              <UploadedBy>
                                Uploaded by: {gif.username || "Unknown"}
                              </UploadedBy>
                              <a
                                href="#"
                                className="btn btn-primary"
                                onClick={() => this.handleShow(gif)}
                              >
                                View
                              </a>
                            </div>
                          </Gif>
                        );
                      })
                    : null}
                </GifsContainer>
              </div>
            )}
          </Section>
        </Container>

        <Modal centered show={this.state.showGif} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.showGif.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={
                this.state.showGif
                  ? this.state.showGif.images.original.url
                  : null
              }
              style={{ width: "100%" }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ giphy }) => {
  return { giphy };
};

export default connect(
  mapStateToProps,
  actions
)(Home);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`;

const Section = styled.div`
  width: 100%;
  max-width: 1024px;
`;

const Background = styled.div`
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const Hero = styled.div`
  width: 100%;
  max-width: 1024px;
  position: relative;
  padding: 200px 0;

  @media screen and (max-width: 991px) {
    padding: 120px 0;
  }

  @media screen and (max-width: 767px) {
    padding: 80px 0;
  }
`;

const JumboHeading = styled.div`
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 100;
  color: #ffffff;
  font-size: 60px;

  @media screen and (max-width: 991px) {
    font-size: 42px;
  }

  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`;

const JumboSubheading = styled.div`
  text-align: center;
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 300;
  color: #ffffff;
`;

const HR = styled.hr`
  margin: 30px auto;
  height: 0;
  border: none;
  border-top: solid 1px rgba(0, 0, 0, 0.2);
  display: block;
  clear: both;
`;

const GifsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Gif = styled.div`
  width: calc(25% - 22.5px);
  margin-bottom: 30px;

  @media screen and (max-width: 991px) {
    width: calc(33.3333% - 20px);
  }

  @media screen and (max-width: 767px) {
    width: calc(50% - 15px);
  }

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

const GifPreview = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
`;

const GifTitle = styled.div`
  font-size: 0.8em;
  font-weight: 600;
  line-height: 1.2em;
  height: 2.4em;
  margin-bottom: 10px;
  overflow: hidden;
`;

const UploadedBy = styled.div`
  font-size: 0.7em;
  font-weight: 300;
  margin-bottom: 10px;
`;
