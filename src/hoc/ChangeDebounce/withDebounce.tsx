import React, { useCallback, useState, useEffect } from 'react'


function useDebounce(value: any, delay = 300) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<any>(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [delay, value] 
  );

  return debouncedValue;
}

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

      this.currentTimeout = setTimeout(() => {
        this.props.onChange(value);
      }, delay);
    }

    render() {
      return <Component {...this.props} onChange={this.handleChange} />
    }
  }

export default withDebounce