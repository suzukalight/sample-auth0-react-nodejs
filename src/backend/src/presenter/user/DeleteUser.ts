import { DeleteUserResponse } from '../../_generated/graphql-types';
import {
  DeleteUserPresenter,
  DeleteUserOutputData,
} from '../../usecase/mutation/user/interface/presenter';
import { toGqlUser } from '../utils/converter/user';

export class GqlDeleteUserPresenter implements DeleteUserPresenter {
  private response: DeleteUserResponse | null;

  public getResponse() {
    return this.response;
  }

  public async output(response: DeleteUserOutputData) {
    this.response = { user: toGqlUser(response.user)! };
  }
}
