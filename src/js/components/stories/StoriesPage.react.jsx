const React = require('react'),
      WebAPIUtils = require('../../utils/WebAPIUtils.js'),
      StoryStore = require('../../stores/StoryStore.react.jsx'),
      ErrorNotice = require('../../components/common/ErrorNotice.react.jsx'),
      StoryActionCreators = require('../../actions/StoryActionCreators.react.jsx'),
      Router = require('react-router'),
      Link = Router.Link,
      timeago = require('timeago');

let StoriesPage = React.createClass({

  getInitialState() {
    return {
      stories: StoryStore.getAllStories(),
      errors: []
    };
  },

  componentDidMount() {
    StoryStore.addChangeListener(this._onChange);
    StoryActionCreators.loadStories();
  },

  componentWillUnmount() {
    StoryStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState({
      stories: StoryStore.getAllStories(),
      errors: StoryStore.getErrors()
    });
  },

  render() {
    let errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
    return (
      <div>
        {errors}
        <div className="row">
          <StoriesList stories={this.state.stories} />
        </div>
      </div>
    );
  }
});

let StoryItem = React.createClass({
  render() {
    return (
      <li className="story">
        <div className="story__title">
          <Link to="story" params={ {storyId: this.props.story.id} }>
            {this.props.story.title}
          </Link>
        </div>
        <div className="story__body">{this.props.story['abstract']}...</div>
        <span className="story__user">{this.props.story.user.username}</span>
        <span className="story__date"> - {timeago(this.props.story.created_at)}</span>
      </li>
      );
  }
});

let StoriesList = React.createClass({
  render() {
    return (
      <ul className="large-8 medium-10 small-12 small-centered columns">
        {this.props.stories.map(function(story, index){
          return <StoryItem story={story} key={"story-" + index}/>
        })}
      </ul>
    );
  }
});

module.exports = StoriesPage;
