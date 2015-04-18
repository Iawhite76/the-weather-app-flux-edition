const React = require('react'),
			Router = require('react-router'),
			Route = Router.Route,
			DefaultRoute = Router.DefaultRoute,

			SmallApp = require('./components/SmallApp.react.jsx'),
			LoginPage = require('./components/session/LoginPage.react.jsx'),
			StoriesPage = require('./components/stories/StoriesPage.react.jsx'),
			StoryPage = require('./components/stories/StoryPage.react.jsx'),
			StoryNew = require('./components/stories/StoryNew.react.jsx'),
			SignupPage = require('./components/session/SignupPage.react.jsx');

module.exports = (
  <Route name="app" path="/" handler={SmallApp}>
    <DefaultRoute handler={StoriesPage} />
    <Route name="login" path="/login" handler={LoginPage}/>
    <Route name="signup" path="/signup" handler={SignupPage}/>
    <Route name="stories" path="/stories" handler={StoriesPage}/>
    <Route name="story" path="/stories/:storyId" handler={StoryPage} />
    <Route name="new-story" path="/story/new" handler={StoryNew}/>
  </Route>
);
