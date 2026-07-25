export async function onRequest(context) {
  const { request, env, next } = context;
  const expected = "Basic " + btoa("revo667:" + env.SITE_PASSWORD);
  const auth = request.headers.get("Authorization") || "";
  if (auth !== expected) {
    return new Response("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="trading.revo667.com"' },
    });
  }
  return next();
}
