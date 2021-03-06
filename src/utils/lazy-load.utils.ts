import Loadable from 'react-loadable';
// TODO: change to real loading component
import Loading from 'sample/loading';

const lazyLoad = (loader: any) =>
  Loadable({
    loader,
    loading: Loading
  });

export default lazyLoad;
