import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as BooksActions from './books.actions';
import { BooksEntity } from './books.models';

export const BOOKS_FEATURE_KEY = 'books';

export interface State extends EntityState<BooksEntity> {
  selectedId?: string | number; // which Books record has been selected
  loaded: boolean; // has the Books list been loaded
  error?: string | null; // last known error (if any)
}

export interface BooksPartialState {
  readonly [BOOKS_FEATURE_KEY]: State;
}

export const booksAdapter: EntityAdapter<BooksEntity> =
  createEntityAdapter<BooksEntity>();

export const initialState: State = booksAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const booksReducer = createReducer(
  initialState,
  on(BooksActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(BooksActions.loadBooksSuccess, (state, { books }) =>
    booksAdapter.setAll(books, { ...state, loaded: true })
  ),
  on(BooksActions.loadBooksFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return booksReducer(state, action);
}
