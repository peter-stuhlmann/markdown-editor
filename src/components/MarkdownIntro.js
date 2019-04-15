import React, { Component } from 'react';
import ShareButtons from "./ShareButtons"

export default class MarkdownIntro extends Component {
      
    render() {
      return (
        <React.Fragment>
          <article>
            <h1>Was ist Markdown?</h1> 
            <p>Markdown ist eine Auszeichnungssprache, die von dem Informatiker John Gruber entwickelt und im Dezember 2004 veröffentlicht wurde. Es war zunächst einmal als eine einfache Option für Leute, die sich nicht wirklich mit dem Programmieren auskennen, entwickelt, um in einer leichten Sprache zu schreiben, die mit wenigen Schritten direkt in HTML konvertiert werden kann.</p>
            <p>Markdown verwendet eine sehr einfache Formatierungsform, um dasselbe zu erreichen wie HTML- oder Rich-Text-Formatierung. Der Unterschied ist, dass es einfacher als HTML ist und Du Dir keine Sorgen um das Öffnen und Schließen von Tags machen musst. Um Text zu formatieren, verwendet Markdown Satzzeichen und Zeichen, mit denen Du bereits vertraut bist.</p>
            <p>Bei Markdown handelt es sich vorwiegend um eine Textsprache ohne Visualisierungen. Damit kannst Du Dokumente in Klartext schreiben, die von anderen Personen in Klartext gelesen und optional als PDF, HTML, DOCX etc. formatiert werden können.</p>
            <p>Es wird häufig in der Softwaredokumentation verwendet, insbesondere im Open-Source-Bereich (Bsp: Github), da es eine umfangreichere Formatierung als Nur-Text ermöglicht, ohne jedoch Autoren oder Leser auf eine bestimmte Softwareplattform zu beschränken.</p>
            
            <h2>Wofür wird Markdown verwendet?</h2> 
            <p>Die <a title='Dokumentation der Markdown-Syntax' href='./syntax.html'>Markdown-Syntax</a> ist intuitiv und ermöglicht in einigen Fällen mehrere Optionen, sodass Schriftsteller die Formatierungszeichen auswählen können, die für sie am sinnvollsten sind.</p>
            <p>Durch den großen Erfolg von Markdown gibt es unzählige neue Text-Apps, die Markdown-Autoren auf Mac, Windows, iOS und im Web unterstützen. Weltweit bekanntes Beispiel: WhatsApp.</p>
            <p>Markdown gilt als einer der wichtigsten Textsprachen und wird, seit dem Durchbruch von Smartphone, immer mehr in Textapps integriert. Mit dem Fakt, dass Markdown auch unter iOS funktioniert, haben sich viele Programmierer auf diese Sprache verständigt und versuchen immer mehr Textapps mit Markdown zu programmieren.</p>
          </article>
          <ShareButtons />
        </React.Fragment>
      );
    }

}