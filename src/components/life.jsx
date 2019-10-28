import React, {Component} from 'react'

export default class Life extends Component{
  constructor(props){
    super(props)
    this.state = {
      sex: 'man',
      age: 20
    }
    console.log('contructor')
  }
  static getDerivedStateFromProps(nextProps, preState){
    console.log('getDerivedStateFromProps')
    console.log('nextProps', nextProps)
    console.log('preState', preState)
    if (nextProps.sex !== preState.sex) {
      return {
        sex: nextProps.sex,
      };
    }
    return null;
  }
  getSnapshotBeforeUpdate(preProps, preState){
    console.log('getSnapshotBeforeUpdate')
    console.log('preProps', preProps)
    console.log('preState', preState)
    return preProps
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  handleClick = () =>{
    console.log('handleClick')
    this.setState({sex: 'woman'})
  }
  render(){
    console.log('render')
    return <div>life
      <br/>
      <button onClick={this.handleClick}>点击更新</button>
    </div>
  }
}