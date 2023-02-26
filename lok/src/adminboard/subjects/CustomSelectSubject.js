import React from "react";

class CustomSelectSubject extends React.Component {
  constructor(props) {
    super(props);

    // @defaultSelectText => Show default text in select
    // @showOptionList => Show / Hide List options
    // @optionsList => List of options
    this.state = {
      defaultSelectText: "",
      showOptionList: false,
      optionsList: []
    };
  }

  componentDidMount() {
    // Add Event Listner to handle the click that happens outside
    // the Custom Select Container
    document.addEventListener("mousedown", this.handleClickOutside);
    this.setState({
      defaultSelectText: this.props.defaultText
    });
  }

  componentWillUnmount() {
    // Remove the event listner on component unmounting
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  // This method handles the click that happens outside the
  // select text and list area
  handleClickOutside = e => {
    if (
      !e.target.classList.contains("custom-select-optionAdmin") &&
      !e.target.classList.contains("selected-textAdmin")
    ) {
      this.setState({
        showOptionList: false
      });
    }
  };

  // This method handles the display of option list
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
      defaultSelectText: e.target.getAttribute("data-name"),
      showOptionList: false
    });
  };

  render() {
    const { optionsList } = this.props;
    const { showOptionList, defaultSelectText } = this.state;
    return (
      <div className="custom-select-containerAdmin">
        <div
          className={showOptionList ? "selected-textAdmin active" : "selected-textAdmin"}
          onClick={this.handleListDisplay}
        >
          {defaultSelectText}
        </div>
        {showOptionList && (
          <ul className="select-optionsAdmin">
            {optionsList.map(option => {
              return (
                <li
                  className="custom-select-optionAdmin"
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

export default CustomSelectSubject;