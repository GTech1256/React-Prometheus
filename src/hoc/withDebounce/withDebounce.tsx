import React from 'react'


/**
 * Обертка над onChange каллбэком
 * 
 * Без onChange бессмысленно использовать этот HOC
 * */
// TOOD: Нормальные дженерики написать без <V extends unkown>
const withDebounce = (Component: React.ComponentType<any>, delay = 500) =>
  class extends React.Component<any, any> {
    debouncedValue = undefined
    currentTimeout?: NodeJS.Timeout = undefined

    handleChange = (value: any) => {
      if (this.currentTimeout) {
        clearTimeout(this.currentTimeout);
      }

      this.currentTimeout = setTimeout(this.props.onChange, delay, value);
    }

    render() {
      return <Component {...this.props} onChange={this.handleChange} />
    }
  }

export default withDebounce