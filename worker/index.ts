interface Env { DB: D1Database; ASSETS: Fetcher }

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8' } })

async function saveInquiry(request: Request, env: Env) {
  const body = await request.json() as { name?: string; contact?: string; message?: string }
  const name = (body.name || '').trim().slice(0, 100)
  const contact = (body.contact || '').trim().slice(0, 150)
  const message = (body.message || '').trim()
  if (message.length < 5 || message.length > 3000 || !contact) return json({ error: 'Заповніть контакт і повідомлення' }, 400)
  await env.DB.prepare('INSERT INTO inquiries (id,name,contact,message,created_at) VALUES (?,?,?,?,?)')
    .bind(crypto.randomUUID(), name, contact, message, Math.floor(Date.now() / 1000)).run()
  return json({ ok: true })
}

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url)
    if (url.pathname === '/api/inquiries' && request.method === 'POST') return saveInquiry(request, env)
    if (url.pathname === '/api/health') return json({ ok: true })
    return env.ASSETS.fetch(request)
  }
} satisfies ExportedHandler<Env>
