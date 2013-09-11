import vibe.d;

import vibe.http.fileserver;

void index(HTTPServerRequest req, HTTPServerResponse res)
{
	res.writeBody(cast(ubyte[])("Hello, World!"), "text/plain");
}

shared static this()
{
	auto router = new URLRouter;
	router.get("/app/*", serveStaticFiles("../static/"));
	router.get("/lib/*", serveStaticFiles("../static/"));
	router.get("/gfx/*", serveStaticFiles("../static/"));
	router.get("/res/*", serveStaticFiles("../static/"));
	router.get("/", &index);

	auto settings = new HTTPServerSettings;
	settings.bindAddresses = ["::1", "127.0.0.1", "ici", "static.ici"];
	settings.port = 8080;

	listenHTTP(settings, router);
}