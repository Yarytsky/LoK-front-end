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
      <Modal.Body>
        <div className = "modalBlock">
          <div className = "modalPart">
            <h4 className = "modalTitle">Name of the first topic <p className = "modalGrade">8/10</p></h4>
            <p className = "modalInfo">
              Brief information on the first topic...
            </p>
          </div>
          <div className = "modalPart">
            <h4 className = "modalTitle">Name of the second topic <p className = "modalGrade">8/10</p></h4>
            <p className = "modalInfo">
              Brief information on the first topic...
            </p>
          </div>
          <div className = "modalPart">
            <h4 className = "modalTitle">Name of the third topic <p className = "modalGrade">8/10</p></h4>
            <p className = "modalInfo">
              Brief information on the first topic...
            </p>
          </div>
          <div className = "modalPart">
            <h4 className = "modalTitle">Name of the fourth topic <p className = "modalGrade">8/10</p></h4>
            <p className = "modalInfo">
              Brief information on the first topic...
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function ButtonTest() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)} className="buttonModal">
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
      !e.target.classList.contains("buttonModal")
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

  handleOptionClick = e => {
    this.setState({
      showOptionList: false
    });

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
                <div className="divOptions">
                  <li
                    className="custom-select-option"
                    data-name={option.name}
                    key={option.id}
                    onClick={this.handleOptionClick}
                  >

                    {option.name}
                  </li>
                  <ButtonTest /></div>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default CustomSelect;