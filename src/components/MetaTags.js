import React from 'react';
import MetaTags from 'react-meta-tags';
 
export default class ReactMetaTags extends React.Component {
  render() {
    return (
      <MetaTags>
        <title>React Dashboard</title>
        <meta name="description" content="Markdown ist eine weitverbreitete Auszeichnungssprache und mit diesem Tutorial lernst Du die Markdown-Syntax schnell und einfach." />
        <meta property="og:title" content="Markdown Tutorial - Syntax - Editor" />
      </MetaTags>
    )
  }
}