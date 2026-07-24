// components/SEO.jsx
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import schemaData from "../data/schemaData";

const SITE_URL = "https://boche1000acre.com";

function SEO({ title, description, keywords, url, type = "website", schema = null }) {
    const location = useLocation();

    // Always derive canonical from the actual current path.
    // If a url prop is explicitly passed, it's used instead (e.g. for special cases),
    // otherwise it's built automatically — so it's impossible to forget or typo per page.
    const canonicalUrl = url || `${SITE_URL}${location.pathname}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content={type} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaData),
                }}
            />
            {schema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema),
                    }}
                />
            )}
        </Helmet>
    );
}

export default SEO;