import Head from "next/head";
import {HOME_OG_IMAGE_URL, SITE_NAME} from "../lib/constants";

const Meta = () => {
  return (
      <Head>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/aim-black.svg"
            />
            <link
                rel="icon"
                type="image/svg+xml"
                sizes="32x32"
                href="/favicon/aim-black.svg"
            />
            <link
                rel="icon"
                type="image/svg+xml"
                sizes="16x16"
                href="/favicon/aim-black.svg"
            />
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            <link
                rel="mask-icon"
                href="/favicon/aim-black.svg"
                color="#000000"
            />
            <link href="/favicon/aim-black.svg" rel="icon" type="image/svg+xml"/>
            <meta name="msapplication-TileColor" content="#000000"/>
            <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
            <meta name="theme-color" content="#000"/>
            <link rel="alternate" type="application/rss+xml" href="/feed.xml"/>
            <meta
                name="description"
                content={`A statically generated blog example using Next.js and ${SITE_NAME}.`}
            />
            <meta property="og:image" content={HOME_OG_IMAGE_URL}/>
      </Head>
  );
};

export default Meta;
