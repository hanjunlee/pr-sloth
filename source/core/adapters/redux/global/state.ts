import {  QueryBuilder } from '../../../models'
import { LoadingStatus, PullRequest } from './models'

export interface RootState {
    signin: SigninState;
    pulls: PullsState;
}

export interface SigninState {
    loading: LoadingStatus;
    login: string;
    token: string;
}

export interface PullsState {
    loading: LoadingStatus;
    items: Array<PullRequest>;
    total: number;
    page: number;
    builder: QueryBuilder;
}
