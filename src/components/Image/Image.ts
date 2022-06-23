import { Block } from '../../core';
import { ImageProps } from './Image.types';

export default class Image extends Block {
  static componentName = 'Image';

  constructor(props: ImageProps) {
    super(props);
  }

  render() {
    return `<img src="{{src}}" alt="{{alt}}" class="{{className}}" />`;
  }
}
