import { html, TemplateResult } from 'lit';
import '../src/hille-signature.js';

interface HilleSignatureProps {
  poweredBy: string;
  technology: string;
  buildWith: string;
  variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger';
}

export default {
  title: 'HilleSignature',
  component: 'hille-signature',
  args: {
    poweredBy: 'Thiago Hille',
    technology: 'React and Next.js',
    buildWith: 'Lit WC',
    variant: 'primary',
  },
  argTypes: {
    poweredBy: { control: 'text' },
    technology: { control: 'text' },
    buildWith: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'success', 'neutral', 'warning', 'danger'] },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<HilleSignatureProps>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  header,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <hille-signature
    style="--hille-signature-background-color: ${backgroundColor}"
    .header=${header}
  ></hille-signature>
`;

export const App = Template.bind({});
App.args = {
  poweredBy: 'Template to Hille WC',
  technology: 'React and Next.js',
  buildWith: 'Lit WC',
  variant: 'primary',
};

// export const Default: Story  = {
//   render: (value) => html`
//     <mv-signature
//       poweredBy=${value.poweredBy}
//       technology=${value.technology}
//       buildWith=${value.buildWith}
//       variant=${value.variant}
//     ></mv-signature>
//   `,
// };
