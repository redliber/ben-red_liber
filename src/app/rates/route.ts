import {createClient} from "@supabase/supabase-js"

const FILE_URL = "https://lhlpaaqebwruuyfpojjl.supabase.co/storage/v1/object/public/public_documents/ben_rates-2026c.pdf"

export async function GET() {
  const upstream = await fetch(FILE_URL, {
    next: {revalidate: 360}
  })

  if (!upstream.ok || !upstream.body) {
    return new Response("File not Found", {status: 404})
  }

  return new Response(upstream.body, {
    headers: {
      "Content-Type":
        upstream.headers.get("content-type") ?? "application/pdf",
      "Content-Disposition": 'inline; filename="rates-and-terms.pdf"',
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
