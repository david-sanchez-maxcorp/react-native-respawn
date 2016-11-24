import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  Reactotron.configure({
    name: 'React Native Respawn' // show app name in Reactotron
  })
  // the goal of this plugin is to ensure all errors will get thrown over to Reactotron for display
  .use(trackGlobalErrors({
    // ignore all error frames from react-native (for example)
    veto: (frame) => frame.fileName.indexOf('/node_modules/react-native/') > -1
  }))
  // setup the redux integration with Reactotron
  .use(reactotronRedux({
    // fires when Reactotron uploads a new copy of the state tree.  Since our reducers are
    // immutable with `seamless-immutable`, we ensure we convert to that format.
    // onRestore: state => Immutable(state)
  }))
  .use(sagaPlugin())
  .connect() // let's connect!

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron
}