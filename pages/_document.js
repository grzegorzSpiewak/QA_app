import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
     <html>
       <Head>
         <link rel='stylesheet' href="../static/css/main.css"/>
         <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet" />
       </Head>
       <body>
         {this.props.customValue}
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
