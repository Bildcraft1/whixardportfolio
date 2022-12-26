// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest } from 'next/server'

export const config = {
    runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
    return new Response(
        "-----BEGIN PGP PUBLIC KEY BLOCK-----\n\
Comment: User-ID:	Andrea <bildcraft10000@gmail.com>\n\
Comment: a.k.a.:	Andrea <whixardo@gmail.com>\n\
Comment: a.k.a.:	Andrea <whixardo@protonmail.com>\n\
\n\
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\n\
R6B64NFlPGR1MQMIB/3zLSn5b7PvyiJgJZs=\n\
=PcNk\n\
-----END PGP PUBLIC KEY BLOCK-----\n\
        "
    )
}
