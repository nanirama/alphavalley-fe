import Head from "next/head";
import { useRouter } from "next/router";

const Seo = ({ seo }) => {
  const siteName = "Alpha Valley";
  const siteUrl = process.env.DOMAIN_URL;
  let fullSeo = {};
  if (seo && seo?.metaTitle) {
    fullSeo = {
      metaTitle: `${seo?.metaTitle ? seo?.metaTitle : 'Investor Pitch Deck Specialists, Fundraising Advisory, Investment Research'} | ${siteName}`,
      metaDescription: seo?.metaDescription ? seo?.metaDescription : 'Investor&#x2d;grade Pitch Decks prepared by specialists. 100+ startups have benefitted from our award&#x2d;winning Pitch Deck Service. Start&#x2d;to&#x2d;end Fundraising Advisory.',
      shareImage: seo?.sharedImage?.media?.data?.attributes.url,
      article: seo.article ? seo.article : false,
      preventIndexing: seo?.preventIndexing,
    };
  }

  const router = useRouter();
  const canonicalUrl = (
    siteUrl + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" />}
      {fullSeo.preventIndexing && (
        <>
          <meta name="robots" content="noindex"></meta>
        </>
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default Seo;
