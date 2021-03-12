const GoogleAnalytics = () => {
  const getScript = () => ({
    __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-H4MYGGK8XH');
    `
  })

  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-H4MYGGK8XH" />
      <script dangerouslySetInnerHTML={getScript()} />
    </>
  )
}
export default GoogleAnalytics
