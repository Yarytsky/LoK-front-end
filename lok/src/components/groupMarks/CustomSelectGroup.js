import React from "react";
export let chosenGroup = "All groups";
export let chosenSubject = "Web Programming";
class CustomSelectGroup extends React.Component {
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
      !e.target.classList.contains("custom-select-optionStudent") &&
      !e.target.classList.contains("selected-textStudent")
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
    if (this.props.context === "Group") {
      chosenGroup = e.target.getAttribute("data-name");
    }
    if (this.props.context === "Subject"){
      chosenSubject = e.target.getAttribute("data-name");
    }
    this.props.onClick();
  };

  render() {
    const { optionsList } = this.props;
    const { showOptionList, defaultSelectText } = this.state;
    return (
      <div className="custom-select-containerStudent">
        <div
          className={showOptionList ? "selected-textStudent active" : "selected-textStudent"}
          onClick={this.handleListDisplay}
        >
          {defaultSelectText}
        </div>
        {showOptionList && (
          <ul className="select-optionsStudent">
            {optionsList.map(option => {
              return (
                <li
                  className="custom-select-optionStudent"
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

export default CustomSelectGroup;