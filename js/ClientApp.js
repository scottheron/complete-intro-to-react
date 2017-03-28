/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({style: {color: this.props.color, fontweight: 'bold'}}, this.props.title)
      )
    )
  }
})

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
