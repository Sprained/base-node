/**
 * Service relacionado aos gets exemplo
 */

import { Response, Request } from 'express'

class ExampleFetchService {
    get = async (req: Request, res: Response) => {}
}

export default new ExampleFetchService()