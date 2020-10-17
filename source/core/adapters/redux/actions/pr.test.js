import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import PullRequest from '../../../models/PullRequest'
import Repo from '../../../models/Repo'

import {fetchPullRequests, RECEIVE_PULL_REQUESTS_SUCCESS, SET_TOTAL_COUNT, SET_PAGE, SET_PER_PAGE} from './pr'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('simple fetch pull-requests', () => {
  // Mock Github API.
  nock('https://api.github.com').get('/search/issues?q=&page=1&per_page=3').reply(200, {
    total_count: 2,
    items: [
      {
        repository_url: 'https://api.github.com/repos/sloth/pr-sloth',
        number: 1,
        title: 'Add a new component',
        body: '',
      },
      {
        repository_url: 'https://api.github.com/repos/sloth/pr-sloth',
        number: 2,
        title: 'Fix the bug',
        body: '',
      },
    ],
  });

  const store = mockStore({ 
    search: { token: '', q: '' },
    list: {
      totalcount: 0, 
      pullRequests: [],
    },
  });
  const expectedActions = [
    {
      type: SET_TOTAL_COUNT,
      totalCount: 2,
    },
    {
      type: SET_PAGE,
      page: 1,
    },
    {
      type: SET_PER_PAGE,
      perPage: 3,
    },
    {
      type: RECEIVE_PULL_REQUESTS_SUCCESS,
      pullRequests: [
        new PullRequest({
          number: 1,
          title: 'Add a new component',
          body: '',
          repo: new Repo({
            owner: 'sloth',
            repo: 'pr-sloth'
          }),
        }),
        new PullRequest({
          number: 2,
          title: 'Fix the bug',
          body: '',
          repo: new Repo({
            owner: 'sloth',
            repo: 'pr-sloth'
          }),
        }),
      ],
    },
  ];

  return store.dispatch(fetchPullRequests(1))
      .then(() => {expect(store.getActions()).toEqual(expectedActions)})
})
