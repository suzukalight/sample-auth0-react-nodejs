import { PropertyRequiredError, IllegalArgumentError } from '../../common/error';

export enum RoleEnum {
  Anonymous = 'ANONYMOUS',
  Member = 'MEMBER',
  Admin = 'ADMIN',
}
export type RoleType = RoleEnum;
export const RoleTypes = RoleEnum;

const RoleStrings = Object.values(RoleEnum) as string[];

const denyIllegalRole = (role: string) => {
  if (!role) throw new PropertyRequiredError('role');
  if (!RoleStrings.includes(role)) throw new IllegalArgumentError(`${role} はロールではありません`);
};

export class Role {
  private role: RoleType;

  constructor(role: RoleType) {
    denyIllegalRole(role);
    this.role = role;
  }

  getRole() {
    return this.role;
  }

  toString() {
    return this.role;
  }

  isEqual(role: Role): boolean;
  isEqual(role: string): boolean;
  isEqual(role: unknown): boolean {
    if (role instanceof Role) return this.role === role.toString();
    if (typeof role === 'string') return this.role === role;
    throw new IllegalArgumentError('比較可能なroleではありません');
  }
}
