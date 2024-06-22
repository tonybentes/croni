import type { NextApiRequest, NextApiResponse } from 'next';

import cors from 'src/utils/cors';

import { _videosPromise } from 'src/_mock/_video';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const videos = await _videosPromise();

    res.status(200).json({
      videos,
    });
  } catch (error) {
    console.error('[Video API]: ', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
