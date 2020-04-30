import React from 'react'
import { TreeSelect } from 'antd'
import { data as employeeList } from './data'
const { TreeNode } = TreeSelect

class Demo extends React.Component {
  state = {
    value: undefined,
    departmentLeader: [],
    currentOrganize: {
      organizeId: '1',
      organizeName: '测试',
    },
  }

  onChange = (value) => {
    console.log(value)
    this.setState({
      departmentLeader: [...value],
    })
  }
  filterTreeNode = (inputValue, treeNode) => {
    const title = treeNode.props.title
    console.log('title', title)
    console.log('typeof title', typeof title)
    if (title && typeof title === 'string' && title.indexOf(inputValue) > -1) {
      return true
    } else if (
      typeof title === 'object' &&
      Array.isArray(title.props.children)
    ) {
      console.log('title.props.children', title.props.children)
      return title.props.children.some(
        (item) => typeof item === 'string' && item.indexOf(inputValue) > -1
      )
    } else return false
  }
  // 负责人属性渲染
  listToLeaderDomTree = (departmentList) => {
    const deptTreeList = departmentList.map((item) => {
      if (item.subDepartmentList && item.subDepartmentList.length) {
        return (
          <TreeNode
            selectable={false}
            value={item.deptId}
            title={item.deptName}
            key={item.deptId}
          >
            {this.listToLeaderDomTree(item.subDepartmentList)}
            {item.employeeVoList &&
              item.employeeVoList.length &&
              item.employeeVoList.map((item) => {
                return (
                  <TreeNode
                    value={item.channelId}
                    title={
                      <span>
                        <i className="icon-yuangong1 neibugongzuotai_iconfont title-Icon" />
                        {item.channelName}
                      </span>
                    }
                    key={item.channelId}
                  />
                )
              })}
          </TreeNode>
        )
      } else if (
        item.employeeVoList &&
        item.employeeVoList.length &&
        item.subDepartmentList
      ) {
        return (
          <TreeNode
            selectable={false}
            value={item.deptId}
            title={item.deptName}
            key={item.deptId}
          >
            {item.employeeVoList &&
              item.employeeVoList.length &&
              item.employeeVoList.map((item) => {
                return (
                  <TreeNode
                    value={item.channelId}
                    title={
                      <span>
                        <i className="icon-yuangong1 neibugongzuotai_iconfont title-Icon" />
                        {item.channelName}
                      </span>
                    }
                    key={item.channelId}
                  />
                )
              })}
          </TreeNode>
        )
      } else {
        return (
          <TreeNode
            selectable={!item.isManager}
            value={item.deptId}
            title={item.deptName}
            key={item.deptId}
          />
        )
      }
    })
    // return deptTreeList
    return (
      <TreeNode value="parent 1-2" title="parent 1-2" key="random3">
        <TreeNode value="leaf3" title="刘a" key="random11" />
        <TreeNode
          value="leaf4"
          title={
            <span>
              <i className="icon-yuangong1 neibugongzuotai_iconfont title-Icon" />
              刘b
            </span>
          }
          key="random12"
        />
      </TreeNode>
    )
  }

  render() {
    const { departmentLeader, currentOrganize } = this.state
    return (
      // <TreeSelect
      //   showSearch
      //   style={{ width: '100%' }}
      //   value={this.state.value}
      //   dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      //   placeholder="Please select"
      //   allowClear
      //   multiple
      //   treeDefaultExpandAll
      //   treeNodeFilterProp="title"
      //   // filterTreeNode={(input, node) => {
      //   //   this.handleFilter(input, node)
      //   // }}
      //   onChange={this.onChange}
      // >
      //   <TreeNode value="parent 1" title="parent 1" key="0-1">
      //     <TreeNode
      //       value="parent 1-0"
      //       title="parent 1-0"
      //       key="0-1-1"
      //       selectable={false}
      //     >
      //       <TreeNode value="leaf1" title="my leaf" key="random" />
      //       <TreeNode value="leaf2" title="your leaf" key="random1" />
      //     </TreeNode>
      //     <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
      //       <TreeNode
      //         value="sss"
      //         title={<b style={{ color: '#08c' }}>bbb</b>}
      //         key="random3"
      //       />
      //     </TreeNode>
      //   </TreeNode>
      // </TreeSelect>
      <TreeSelect
        showSearch
        size="large"
        style={{ width: 360 }}
        value={departmentLeader}
        multiple={true}
        treeDefaultExpandedKeys={['0-1']}
        dropdownStyle={{ maxHeight: 300, overflow: 'auto' }}
        // allowClear={true}
        filterTreeNode={(input, node) => this.filterTreeNode(input, node)}
        // treeNodeFilterProp="title"
        onChange={this.onChange}
      >
        <TreeNode
          selectable={false}
          value={currentOrganize.organizeId}
          title={currentOrganize.organizeName}
          key="0-1"
        >
          <TreeNode
            value="parent 1-0"
            title="parent 1-0"
            key="0-1-1"
            selectable={false}
          >
            <TreeNode value="leaf1" title="my leaf刘" key="random" />
            <TreeNode value="leaf2" title="your leaf" key="random1" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
            <TreeNode
              value="sss"
              title={<b style={{ color: '#08c' }}>bbb</b>}
              key="random3"
            />
          </TreeNode>
          {this.listToLeaderDomTree(employeeList)}
        </TreeNode>
      </TreeSelect>
    )
  }
}

export default Demo
