import { Role } from '../../../models';
import { PullRequest } from '../global'

export interface FetchPullRequestsPayLoad {
    total: number;
    items: Array<PullRequest>;
}

export interface SetPagePayload {
    page: number;
}

export interface SetRolePayLoad {
    role: Role;
}

export interface InitPayLoad {
    login: string;
}
