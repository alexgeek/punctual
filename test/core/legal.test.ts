import { describe, expect, it } from 'vitest'
import { privacyPage, termsPage } from '../../src/http/pages/legal.js'

const opts = {
  brandName: 'Alexander Brook Perry',
  operator: 'Alexander Brook Perry',
  supportEmail: 'alex@example.test',
  baseUrl: 'https://talk.example.test',
}

describe('legal pages', () => {
  it('does not describe the configured personal brand as open source', () => {
    const privacy = privacyPage(opts)
    const terms = termsPage(opts)

    expect(privacy).not.toContain('Alexander Brook Perry is open source')
    expect(terms).not.toContain('Alexander Brook Perry engine')
    expect(privacy).toContain('open-source Punctual engine')
    expect(terms).toContain('Punctual engine is released under the MIT licence')
  })
})
