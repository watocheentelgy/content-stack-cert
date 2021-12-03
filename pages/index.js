import Head from 'next/head'
import Stack from "../sdk-plugin/index";
import RenderComponents from "../components/render-components";
import Footer from "../components/footer";
import Link from 'next/link';

export default function Home(props) {
  const { webInfo, resultPage } = props;

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <title>{resultPage.seo.meta_title} - {webInfo.title}</title>
        <meta name="keywords" content={resultPage.seo.meta_keywords} />
        <meta name="description" content={resultPage.seo.meta_description} />
        <meta name="author" content={resultPage.seo.author} />
        <link rel="icon" href="/favicon.ico" type="icon" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossOrigin="anonymous"></script>
      </Head>

      <div className="header_section" style={{backgroundColor: webInfo.background_color_web}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="logo">
                <Link href="/">
                  <a><img src={webInfo.logo.url} /></a>
                </Link>
              </div>
            </div>
            <div className="col-sm-6 col-lg-9">
              <div className="menu_text">
                <ul>
                  {webInfo.menu?.map(item => (
                    <li key={item.title}><a href={item.page[0].url}>{item.title}</a></li>
                  ))}
                  {webInfo.search.active_option && (
                    <li key={webInfo.search.url.title}>
                      <a href={webInfo.search.url.href}>
                        <img src={webInfo.search.icon.url} alt={webInfo.search.url.title} />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {resultPage.page_components && (
        <RenderComponents
          pageComponents={resultPage.page_components}
          webInfo={webInfo}
        />
      )}

      <Footer webInfo={webInfo} />
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    const resultPage = await Stack.getEntryByUrl("page", context.resolvedUrl);
    const webInfo = await Stack.getEntry("web_info", "menu.page");
    return {
      props: {
        webInfo: webInfo[0][0],
        resultPage: resultPage[0],
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}