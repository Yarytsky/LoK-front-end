import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
      <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
      >
          <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                  Modal heading
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                  consectetur ac, vestibulum at eros.
              </p>
          </Modal.Body>
          <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
      </Modal>
  );
}

function ButtonTest() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
      <>
          <Button variant="primary" onClick={() => setModalShow(true)}>
              text
          </Button>

          <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
          />
      </>
  );
}

class CustomSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultSelectText: "",
      showOptionList: false,
      optionsList: []
    };
    
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    this.setState({
      defaultSelectText: this.props.defaultText
    });
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = e => {
    if (
      !e.target.classList.contains("custom-select-option") &&
      !e.target.classList.contains("selected-text")
    ) {
      this.setState({
        showOptionList: false
      });
    }
  };

  handleListDisplay = () => {
    this.setState(prevState => {
      return {
        showOptionList: !prevState.showOptionList
      };
    });
  };

  // This method handles the setting of name in select text area
  // and list display on selection
  handleOptionClick = e => {
    this.setState({
      showOptionList: false
    });
    <ButtonTest/>
  };

  render() {
    const { optionsList } = this.props;
    const { showOptionList, defaultSelectText } = this.state;
    return (
      <div className="custom-select-container">
        <div
          className={showOptionList ? "selected-text active" : "selected-text"}
          onClick={this.handleListDisplay}
        >
          {defaultSelectText}
        </div>
        {showOptionList && (
          <ul className="select-options">
            {optionsList.map(option => {
              return (
                <li
                  className="custom-select-option"
                  data-name={option.name}
                  key={option.id}
                  onClick={this.handleOptionClick}
                >
                  
                  {option.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default CustomSelect;