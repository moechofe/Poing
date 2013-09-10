import vibe.d;

void index(HTTPServerRequest req, HTTPServerResponse res)
{
    res.writeBody(cast(ubyte[])"Hello, World!", "text/plain");
}

shared static this()
{
    auto router = new URLRouter;
    router.get("/", &index);

    auto settings = new HTTPServerSettings;
    settings.bindAddresses = ["::1", "127.0.0.1", "188.165.196.107"];
    settings.port = 8080;

    listenHTTP(settings, router);
}