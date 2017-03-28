import React from 'React'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'props are the best', color: 'salmon'}),
        MyTitleFactory({title: 'yolo', color: 'mediumaquamarine'}),
        MyTitleFactory({title: 'trek', color: 'rebeccapurple'}),
        MyTitleFactory({title: 'wars', color: 'blue'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
