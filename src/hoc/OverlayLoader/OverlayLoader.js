import React from 'react';
import { Loader } from '../../components/Loader';
import classes from './OverlayLoader.module.scss';


export const OverlayLoader = (Component, isShowLoading, CustomTag = 'div', customClasses = []) => {

  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        isShowLoading,
      }
    }

    render() {
      const wrapperClasses = [classes['overlay-loader'], ...customClasses]
  
      if (this.state.isShowLoading) {
        wrapperClasses.push(classes['overlay-loader_active'])
      }

      const setShowLoading = (isShowLoading) => {
        this.setState({ isShowLoading })
      }

      return (
        <CustomTag className={wrapperClasses.join(' ')}>
          {this.state.isShowLoading && <Loader className={classes['overlay-loader__loader']} />}
          <Component setShowLoading={setShowLoading} isShowLoading={this.state.isShowLoading} {...this.props} />
        </CustomTag>
      )
    }
  }
}

