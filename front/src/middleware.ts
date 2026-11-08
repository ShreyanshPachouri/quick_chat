import { withAuth } from "next-auth/middleware"
import type { NextRequestWithAuth } from "next-auth/middleware"
import type { NextFetchEvent } from "next/server"

const authMiddleware = withAuth({})

export default function middleware(req: NextRequestWithAuth, event: NextFetchEvent) {
    return authMiddleware(req, event)
}

export const config = {
    matcher: ["/dashboard"]
}
