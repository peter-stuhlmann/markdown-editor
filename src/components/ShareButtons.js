import React, { Component } from 'react';

export default class ShareButtons extends Component {
      
    render() {
      return (
        <aside className="sharebuttons">
          <h3>Diesen Artikel teilen</h3>
          <a href="whatsapp://send?text=https://markdowntutorial.de"><span className="fab fa-whatsapp">&nbsp;</span><span>WhatsApp</span></a>
          <a href="mailto:?Subject=Markdown Tutorial&amp;Body=Hallo!%20Ich%20habe%20gerade%20diesen%20Artikel%20zum%20Thema%20Markdown%20gefunden.%20Schau%20ihn%20Dir%20mal%20an.%20https://markdowntutorial.de"><span className="fas fa-envelope">&nbsp;</span><span>E-Mail</span></a>
          <a href="http://www.facebook.com/sharer.php?u=https://markdowntutorial.de" target="_blank"><span className="fab fa-facebook-square">&nbsp;</span><span>Facebook</span></a>
          <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://markdowntutorial.de" target="_blank" rel="noopener"><span className="fab fa-linkedin-in">&nbsp;</span><span>LinkedIn</span></a>
          <a href="https://twitter.com/share?url=https://markdowntutorial.de" target="_blank" rel="noopener"><span className="fab fa-twitter">&nbsp;</span><span>Twitter</span></a>
          <a href="http://www.tumblr.com/share/link?url=https://markdowntutorial.de" target="_blank" rel="noopener"><span className="fab fa-tumblr">&nbsp;</span><span>Tumblr</span></a>
        </aside>
      );
    }

}