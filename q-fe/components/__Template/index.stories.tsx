import { Meta } from '@storybook/react';
import * as React from 'react';

import { Template } from '.';

export default {
  title: '__TemplateGroup/__Template',
  component: Template,
} as Meta;

export const TemplateNormal = () => <Template />;
