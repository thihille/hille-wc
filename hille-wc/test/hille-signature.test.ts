/// <reference types="mocha" />
import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { HilleSignature } from '../src/hille-signature.js';
import '../src/hille-signature.js';

describe('HilleSignature', () => {
  let element: HilleSignature;

  beforeEach(async () => {
    element = await fixture(html`<hille-signature></hille-signature>`);
  });

  it('renders a <sl-tag> com o texto padrão', () => {
    const tag = element.shadowRoot!.querySelector('sl-tag')!;
    expect(tag).to.exist;
    expect(tag.textContent?.trim()).to.include('Powered by Thiago Hille');
  });

  it('atualiza o texto quando poweredBy muda', async () => {
    element.poweredBy = 'Outro Nome';
    await element.updateComplete;
    const tag = element.shadowRoot!.querySelector('sl-tag')!;
    expect(tag.textContent).to.include('Outro Nome');
  });

  it('usa a variant correta', () => {
    const tag = element.shadowRoot!.querySelector('sl-tag')!;
    expect(tag.getAttribute('variant')).to.equal('primary');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
