import React, {Component} from 'react'

class Counter extends Component {
  state = { val: 0 }
  increment = () => {
    // this.setState({ val: this.state.val + 1 })
    // console.log(this.state.val) // 输出的是更新前的val --> 0
  }
  componentDidMount() {
    this.setState({ val: this.state.val + 1 })
    console.log('changeValue', this.state.val)
    this.setState({ val: this.state.val + 2 })
    console.log('changeValue', this.state.val)
    this.setState({ val: this.state.val + 1 })
    console.log('changeValue', this.state.val)
    // console.log('componentDidMount', this.state.val) // 输出的还是更新前的值 --> 0
    // document.body.addEventListener('click', this.changeValue, false)
    // setTimeout(_ => {
    //   this.setState({ val: this.state.val + 1 })
    //   this.setState({ val: this.state.val + 1 })
    //   this.setState({ val: this.state.val + 1 })
    //   console.log('setTimeout', this.state.val) // 输出更新后的值 --> 1
    // }, 0)
  }
  changeValue = () => {
    // this.setState({ val: this.state.val + 1 })
    // console.log('changeValue', this.state.val)
    // this.setState({ val: this.state.val + 2 })
    // console.log('changeValue', this.state.val)
    // this.setState({ val: this.state.val + 1 })
    // console.log('changeValue', this.state.val) // 输出的是更新后的值 --> 1
  }
  batchUpdates = () => {
    // this.setState({ val: this.state.val + 1 })
    // this.setState({ val: this.state.val + 1 })
    // this.setState({ val: this.state.val + 1 })
    // console.log('batchUpdates', this.state.val) // 输出的是更新后的值 --> 1
 }
  render() {
    return (
      <div onClick={this.batchUpdates}>
        {`Counter is: ${this.state.val}`}
      </div>
    )
  }
}
export default Counter