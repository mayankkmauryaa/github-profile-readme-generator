import { Sections } from '.';

import { Icon } from './icon';

export type CanvasContent = {
  text?: any;
  icons?: Record<string, Icon>;
  socials?: Record<string, unknown>;
  graphs?: any;
  config?: any;
};

export type CanvasSection = {
  id: string;
  type: Sections;
  props: {
    defaultConfig?: any;
    content?: CanvasContent;
    state?: string;
    styles?: any;
  };
};


export enum CanvasStatesEnum {
  DEFAULT = 'default',
  PREVIEW = 'preview',
  ALERT = 'alert',
  SELECTED = 'selected',
}
