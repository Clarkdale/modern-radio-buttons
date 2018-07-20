import React, { Component } from 'react'

class RadioBtn extends Component{
  constructor(props) {
    super(props);
  }

  handleClick(){
    this.props.handler(this.props.index);
  }

  render() {
    if (this.props.horizontal) {
      return (
        <span className="radio-btn-group" onClick={this.handleClick.bind(this)}>
          <span className={this.props.isChecked ? "radiobtn checked" : "radiobtn unchecked"} data-value={this.props.value}></span>
          <img src={ this.props.isChecked ? this.props.fill : this.props.blank } style={{ padding: '8px', width: this.props.size, height: this.props.size }}/>
          <label style={{ position: 'relative', top:'-17px', padding: '0 15px 0 0'}}>{this.props.text}</label>
        </span>
      );
    } else {
      return (
        <div className="radio-btn-group" onClick={this.handleClick.bind(this)}>
          <div className={this.props.isChecked ? "radiobtn checked" : "radiobtn unchecked"} data-value={this.props.value}></div>
          <svg width="24px" height="24px" style={{position: 'absolute', padding: '6px 0 0 8px'}}>
            <circle
              cx="12px"
              cy="12px"
              r="10px"
              fill={ this.props.isChecked ? "black" : "transparent" }
              stroke="black"
              stroke-width="3px"
              opacity={ this.props.color ? "1" : "1" }
            />
          </svg>
          <img src={ this.props.isChecked ? this.props.fill : this.props.blank } style={{ padding: '6px 8px 8px 8px', width: this.props.size, height: this.props.size, display: 'inline-block' }}/>
          <label style={{ position: 'relative', top:'-18px', display: 'inline-block' }}>{this.props.text}</label>
        </div>
      );
    }
  }
}

class RadioSet extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.defaultIndex || 0,
      selectedValue: props.options[props.defaultIndex || 0],
      options: props.options,
      horizontal: props.horizontal,
      fill: props.fill,
      blank: props.blank,
      color: props.color,
      size: props.size || "32px",
    };
  }

  toggle(selection){
    this.setState({
      selectedIndex: selection,
      selectedValue: this.state.options[selection],
    });
  }

  render() {
    return (
      <div>
        {this.state.options.map((option, i) => {
          return <RadioBtn
                    key={i}
                    isChecked={(this.state.selectedIndex === i)}
                    text={option}
                    value={option}
                    index={i}
                    handler={this.toggle.bind(this)}
                    horizontal={ this.state.horizontal }
                    color={ this.state.color }
                    fill={ this.state.fill }
                    blank={ this.state.blank }
                    size={ this.props.size }
                  />
        })}
      </div>
    )
  }
}

export default RadioSet;
