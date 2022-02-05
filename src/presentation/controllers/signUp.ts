import { MissingParamError } from '../errors/missingParamError';
import { IHttpRequest, IHttpResponse } from '../protocols/httpInterface';

class SignUpController {
  handle(httpRequest: IHttpRequest): IHttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name'),
      };
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email'),
      };
    }
  }
}

export { SignUpController };
