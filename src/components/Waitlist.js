import Head from "next/head";
import Script from "next/script";

export default function Waitlist() {
  return (
    <>
      <Head>
        {" "}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
      </Head>
      <div id="getWaitlistContainer" data-waitlist_id="11113"></div>
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
      />
    </>
  );
}
