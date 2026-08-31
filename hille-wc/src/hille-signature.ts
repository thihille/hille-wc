import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/tag/tag.js';

@customElement('hille-signature')
export class HilleSignature extends LitElement {
  @property({ type: String }) poweredBy = 'Thiago Hille';

  @property({ type: String }) technology = 'React and Next.js';

  @property({ type: String }) buildWith = 'Lit WC';

  @property({ type: String }) variant = 'primary';

  render() {
    return html`
      <sl-tag
        size="small"
        variant=${this.variant}
        pill
        alt=${`Powered by ${this.poweredBy} | Technology: ${this.technology} | Built with: ${this.buildWith}`}
      >
        Powered by <strong>${this.poweredBy}</strong>
      </sl-tag>
    `;
  }
}
