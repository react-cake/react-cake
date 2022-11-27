import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/base/components/select/select.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}