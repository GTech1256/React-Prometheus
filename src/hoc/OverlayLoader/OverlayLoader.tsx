import React from 'react';

import classes from './OverlayLoader.module.scss';
import { Loader } from '../../components/Loader';


export const OverlayLoader = (Component: any, isShowLoading: boolean, CustomTag = 'div', customClasses: string[] = []) => {

  return class extends React.Component {
    state = {
      isShowLoading
    }

    render() {
      const wrapperClasses = [classes['overlay-loader'], ...customClasses]
  
      if (this.state.isShowLoading) {
        wrapperClasses.push(classes['overlay-loader_active'])
      }

      const setShowLoading = (isShowLoading: boolean) => {
        this.setState({ isShowLoading })
      }

      console.log({ CustomTag });
  

      return (
        // @ts-ignore
        <CustomTag className={wrapperClasses.join(' ')}>
          {this.state.isShowLoading && <Loader className={classes['overlay-loader__loader']} />}
          <Component setShowLoading={setShowLoading} isShowLoading={this.state.isShowLoading} {...this.props} />
        </CustomTag>
      )
    }
  }
}

