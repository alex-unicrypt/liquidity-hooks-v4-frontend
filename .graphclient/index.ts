// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { usePersistedOperations } from '@graphql-yoga/plugin-persisted-operations';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { Univ4LockerTypes } from './sources/univ4-locker/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type CLPoolManagerInitialize = {
  id: Scalars['Bytes']['output'];
  CLPoolManager_id: Scalars['Bytes']['output'];
  currency0: Scalars['Bytes']['output'];
  currency1: Scalars['Bytes']['output'];
  hooks: Scalars['Bytes']['output'];
  fee: Scalars['Int']['output'];
  parameters: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CLPoolManagerInitialize_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_not?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  CLPoolManager_id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  CLPoolManager_id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  currency0?: InputMaybe<Scalars['Bytes']['input']>;
  currency0_not?: InputMaybe<Scalars['Bytes']['input']>;
  currency0_gt?: InputMaybe<Scalars['Bytes']['input']>;
  currency0_lt?: InputMaybe<Scalars['Bytes']['input']>;
  currency0_gte?: InputMaybe<Scalars['Bytes']['input']>;
  currency0_lte?: InputMaybe<Scalars['Bytes']['input']>;
  currency0_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  currency0_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  currency0_contains?: InputMaybe<Scalars['Bytes']['input']>;
  currency0_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  currency1?: InputMaybe<Scalars['Bytes']['input']>;
  currency1_not?: InputMaybe<Scalars['Bytes']['input']>;
  currency1_gt?: InputMaybe<Scalars['Bytes']['input']>;
  currency1_lt?: InputMaybe<Scalars['Bytes']['input']>;
  currency1_gte?: InputMaybe<Scalars['Bytes']['input']>;
  currency1_lte?: InputMaybe<Scalars['Bytes']['input']>;
  currency1_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  currency1_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  currency1_contains?: InputMaybe<Scalars['Bytes']['input']>;
  currency1_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hooks?: InputMaybe<Scalars['Bytes']['input']>;
  hooks_not?: InputMaybe<Scalars['Bytes']['input']>;
  hooks_gt?: InputMaybe<Scalars['Bytes']['input']>;
  hooks_lt?: InputMaybe<Scalars['Bytes']['input']>;
  hooks_gte?: InputMaybe<Scalars['Bytes']['input']>;
  hooks_lte?: InputMaybe<Scalars['Bytes']['input']>;
  hooks_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hooks_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hooks_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hooks_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  fee?: InputMaybe<Scalars['Int']['input']>;
  fee_not?: InputMaybe<Scalars['Int']['input']>;
  fee_gt?: InputMaybe<Scalars['Int']['input']>;
  fee_lt?: InputMaybe<Scalars['Int']['input']>;
  fee_gte?: InputMaybe<Scalars['Int']['input']>;
  fee_lte?: InputMaybe<Scalars['Int']['input']>;
  fee_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  fee_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  parameters?: InputMaybe<Scalars['Bytes']['input']>;
  parameters_not?: InputMaybe<Scalars['Bytes']['input']>;
  parameters_gt?: InputMaybe<Scalars['Bytes']['input']>;
  parameters_lt?: InputMaybe<Scalars['Bytes']['input']>;
  parameters_gte?: InputMaybe<Scalars['Bytes']['input']>;
  parameters_lte?: InputMaybe<Scalars['Bytes']['input']>;
  parameters_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  parameters_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  parameters_contains?: InputMaybe<Scalars['Bytes']['input']>;
  parameters_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CLPoolManagerInitialize_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CLPoolManagerInitialize_filter>>>;
};

export type CLPoolManagerInitialize_orderBy =
  | 'id'
  | 'CLPoolManager_id'
  | 'currency0'
  | 'currency1'
  | 'hooks'
  | 'fee'
  | 'parameters'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Data = {
  id: Scalars['Int8']['output'];
  timestamp: Scalars['Timestamp']['output'];
  amount0: Scalars['BigInt']['output'];
  amount1: Scalars['BigInt']['output'];
  liquidity: Scalars['BigInt']['output'];
};

export type Data_filter = {
  id?: InputMaybe<Scalars['Int8']['input']>;
  id_not?: InputMaybe<Scalars['Int8']['input']>;
  id_gt?: InputMaybe<Scalars['Int8']['input']>;
  id_lt?: InputMaybe<Scalars['Int8']['input']>;
  id_gte?: InputMaybe<Scalars['Int8']['input']>;
  id_lte?: InputMaybe<Scalars['Int8']['input']>;
  id_in?: InputMaybe<Array<Scalars['Int8']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Int8']['input']>>;
  timestamp?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_not?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  amount0?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount1?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Data_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Data_filter>>>;
};

export type Data_orderBy =
  | 'id'
  | 'timestamp'
  | 'amount0'
  | 'amount1'
  | 'liquidity';

export type DecreaseLiquidityEvent = {
  id: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  liquidity: Scalars['BigInt']['output'];
  removedAmount0: Scalars['BigInt']['output'];
  removedAmount1: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type DecreaseLiquidityEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  removedAmount0?: InputMaybe<Scalars['BigInt']['input']>;
  removedAmount0_not?: InputMaybe<Scalars['BigInt']['input']>;
  removedAmount0_gt?: InputMaybe<Scalars['BigInt']['input']>;
  removedAmount0_lt?: InputMaybe<Scalars['BigInt']['input']>;
  removedAmount0_gte?: InputMaybe<Scalars['BigInt']['input']>;
  removedAmount0_lte?: InputMaybe<Scalars['BigInt']['input']>;
  removedAmount0_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  removedAmount0_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  removedAmount1?: InputMaybe<Scalars['BigInt']['input']>;
  removedAmount1_not?: InputMaybe<Scalars['BigInt']['input']>;
  removedAmount1_gt?: InputMaybe<Scalars['BigInt']['input']>;
  removedAmount1_lt?: InputMaybe<Scalars['BigInt']['input']>;
  removedAmount1_gte?: InputMaybe<Scalars['BigInt']['input']>;
  removedAmount1_lte?: InputMaybe<Scalars['BigInt']['input']>;
  removedAmount1_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  removedAmount1_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DecreaseLiquidityEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DecreaseLiquidityEvent_filter>>>;
};

export type DecreaseLiquidityEvent_orderBy =
  | 'id'
  | 'tokenId'
  | 'liquidity'
  | 'removedAmount0'
  | 'removedAmount1'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Donate = {
  id: Scalars['Bytes']['output'];
  CLPoolManager_id: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
  amount0: Scalars['BigInt']['output'];
  amount1: Scalars['BigInt']['output'];
  tick: Scalars['Int']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Donate_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_not?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  CLPoolManager_id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  CLPoolManager_id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount0?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount1?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick?: InputMaybe<Scalars['Int']['input']>;
  tick_not?: InputMaybe<Scalars['Int']['input']>;
  tick_gt?: InputMaybe<Scalars['Int']['input']>;
  tick_lt?: InputMaybe<Scalars['Int']['input']>;
  tick_gte?: InputMaybe<Scalars['Int']['input']>;
  tick_lte?: InputMaybe<Scalars['Int']['input']>;
  tick_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tick_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Donate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Donate_filter>>>;
};

export type Donate_orderBy =
  | 'id'
  | 'CLPoolManager_id'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'tick'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type DynamicLPFeeUpdated = {
  id: Scalars['Bytes']['output'];
  CLPoolManager_id: Scalars['Bytes']['output'];
  dynamicLPFee: Scalars['Int']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type DynamicLPFeeUpdated_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_not?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  CLPoolManager_id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  CLPoolManager_id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  dynamicLPFee?: InputMaybe<Scalars['Int']['input']>;
  dynamicLPFee_not?: InputMaybe<Scalars['Int']['input']>;
  dynamicLPFee_gt?: InputMaybe<Scalars['Int']['input']>;
  dynamicLPFee_lt?: InputMaybe<Scalars['Int']['input']>;
  dynamicLPFee_gte?: InputMaybe<Scalars['Int']['input']>;
  dynamicLPFee_lte?: InputMaybe<Scalars['Int']['input']>;
  dynamicLPFee_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dynamicLPFee_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DynamicLPFeeUpdated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DynamicLPFeeUpdated_filter>>>;
};

export type DynamicLPFeeUpdated_orderBy =
  | 'id'
  | 'CLPoolManager_id'
  | 'dynamicLPFee'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type EventCollection = {
  id: Scalars['ID']['output'];
  chaindId: Scalars['BigInt']['output'];
  poolm: Scalars['String']['output'];
  launcher: Scalars['String']['output'];
  hookLock: Scalars['String']['output'];
  numberPoolsV4: Scalars['BigInt']['output'];
  numberLocks: Scalars['BigInt']['output'];
};

export type EventCollection_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  chaindId?: InputMaybe<Scalars['BigInt']['input']>;
  chaindId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chaindId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chaindId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chaindId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chaindId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chaindId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chaindId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolm?: InputMaybe<Scalars['String']['input']>;
  poolm_not?: InputMaybe<Scalars['String']['input']>;
  poolm_gt?: InputMaybe<Scalars['String']['input']>;
  poolm_lt?: InputMaybe<Scalars['String']['input']>;
  poolm_gte?: InputMaybe<Scalars['String']['input']>;
  poolm_lte?: InputMaybe<Scalars['String']['input']>;
  poolm_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolm_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolm_contains?: InputMaybe<Scalars['String']['input']>;
  poolm_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolm_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolm_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolm_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolm_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolm_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolm_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolm_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolm_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolm_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolm_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  launcher?: InputMaybe<Scalars['String']['input']>;
  launcher_not?: InputMaybe<Scalars['String']['input']>;
  launcher_gt?: InputMaybe<Scalars['String']['input']>;
  launcher_lt?: InputMaybe<Scalars['String']['input']>;
  launcher_gte?: InputMaybe<Scalars['String']['input']>;
  launcher_lte?: InputMaybe<Scalars['String']['input']>;
  launcher_in?: InputMaybe<Array<Scalars['String']['input']>>;
  launcher_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  launcher_contains?: InputMaybe<Scalars['String']['input']>;
  launcher_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  launcher_not_contains?: InputMaybe<Scalars['String']['input']>;
  launcher_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  launcher_starts_with?: InputMaybe<Scalars['String']['input']>;
  launcher_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  launcher_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  launcher_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  launcher_ends_with?: InputMaybe<Scalars['String']['input']>;
  launcher_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  launcher_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  launcher_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hookLock?: InputMaybe<Scalars['String']['input']>;
  hookLock_not?: InputMaybe<Scalars['String']['input']>;
  hookLock_gt?: InputMaybe<Scalars['String']['input']>;
  hookLock_lt?: InputMaybe<Scalars['String']['input']>;
  hookLock_gte?: InputMaybe<Scalars['String']['input']>;
  hookLock_lte?: InputMaybe<Scalars['String']['input']>;
  hookLock_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hookLock_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hookLock_contains?: InputMaybe<Scalars['String']['input']>;
  hookLock_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hookLock_not_contains?: InputMaybe<Scalars['String']['input']>;
  hookLock_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hookLock_starts_with?: InputMaybe<Scalars['String']['input']>;
  hookLock_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hookLock_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hookLock_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hookLock_ends_with?: InputMaybe<Scalars['String']['input']>;
  hookLock_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hookLock_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hookLock_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  numberPoolsV4?: InputMaybe<Scalars['BigInt']['input']>;
  numberPoolsV4_not?: InputMaybe<Scalars['BigInt']['input']>;
  numberPoolsV4_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numberPoolsV4_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numberPoolsV4_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numberPoolsV4_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numberPoolsV4_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberPoolsV4_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberLocks?: InputMaybe<Scalars['BigInt']['input']>;
  numberLocks_not?: InputMaybe<Scalars['BigInt']['input']>;
  numberLocks_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numberLocks_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numberLocks_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numberLocks_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numberLocks_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberLocks_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EventCollection_filter>>>;
  or?: InputMaybe<Array<InputMaybe<EventCollection_filter>>>;
};

export type EventCollection_orderBy =
  | 'id'
  | 'chaindId'
  | 'poolm'
  | 'launcher'
  | 'hookLock'
  | 'numberPoolsV4'
  | 'numberLocks';

export type ExtendLockEvent = {
  id: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  unlockDate: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ExtendLockEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlockDate?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_not?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlockDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ExtendLockEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ExtendLockEvent_filter>>>;
};

export type ExtendLockEvent_orderBy =
  | 'id'
  | 'tokenId'
  | 'unlockDate'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type InitializeEvent = {
  id: Scalars['Bytes']['output'];
  poolId: Scalars['Bytes']['output'];
  currency0: Scalars['Bytes']['output'];
  currency1: Scalars['Bytes']['output'];
  fee: Scalars['Int']['output'];
  clockhook: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type InitializeEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  poolId?: InputMaybe<Scalars['Bytes']['input']>;
  poolId_not?: InputMaybe<Scalars['Bytes']['input']>;
  poolId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  poolId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  poolId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  poolId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  poolId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  currency0?: InputMaybe<Scalars['Bytes']['input']>;
  currency0_not?: InputMaybe<Scalars['Bytes']['input']>;
  currency0_gt?: InputMaybe<Scalars['Bytes']['input']>;
  currency0_lt?: InputMaybe<Scalars['Bytes']['input']>;
  currency0_gte?: InputMaybe<Scalars['Bytes']['input']>;
  currency0_lte?: InputMaybe<Scalars['Bytes']['input']>;
  currency0_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  currency0_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  currency0_contains?: InputMaybe<Scalars['Bytes']['input']>;
  currency0_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  currency1?: InputMaybe<Scalars['Bytes']['input']>;
  currency1_not?: InputMaybe<Scalars['Bytes']['input']>;
  currency1_gt?: InputMaybe<Scalars['Bytes']['input']>;
  currency1_lt?: InputMaybe<Scalars['Bytes']['input']>;
  currency1_gte?: InputMaybe<Scalars['Bytes']['input']>;
  currency1_lte?: InputMaybe<Scalars['Bytes']['input']>;
  currency1_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  currency1_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  currency1_contains?: InputMaybe<Scalars['Bytes']['input']>;
  currency1_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  fee?: InputMaybe<Scalars['Int']['input']>;
  fee_not?: InputMaybe<Scalars['Int']['input']>;
  fee_gt?: InputMaybe<Scalars['Int']['input']>;
  fee_lt?: InputMaybe<Scalars['Int']['input']>;
  fee_gte?: InputMaybe<Scalars['Int']['input']>;
  fee_lte?: InputMaybe<Scalars['Int']['input']>;
  fee_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  fee_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  clockhook?: InputMaybe<Scalars['Bytes']['input']>;
  clockhook_not?: InputMaybe<Scalars['Bytes']['input']>;
  clockhook_gt?: InputMaybe<Scalars['Bytes']['input']>;
  clockhook_lt?: InputMaybe<Scalars['Bytes']['input']>;
  clockhook_gte?: InputMaybe<Scalars['Bytes']['input']>;
  clockhook_lte?: InputMaybe<Scalars['Bytes']['input']>;
  clockhook_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  clockhook_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  clockhook_contains?: InputMaybe<Scalars['Bytes']['input']>;
  clockhook_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<InitializeEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<InitializeEvent_filter>>>;
};

export type InitializeEvent_orderBy =
  | 'id'
  | 'poolId'
  | 'currency0'
  | 'currency1'
  | 'fee'
  | 'clockhook'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type LiquidityAddedEvent = {
  id: Scalars['Bytes']['output'];
  poolId: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  liquidity: Scalars['BigInt']['output'];
  amount0: Scalars['BigInt']['output'];
  amount1: Scalars['BigInt']['output'];
  unlockDate: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type LiquidityAddedEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  poolId?: InputMaybe<Scalars['Bytes']['input']>;
  poolId_not?: InputMaybe<Scalars['Bytes']['input']>;
  poolId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  poolId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  poolId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  poolId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  poolId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount0?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount1?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlockDate?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_not?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlockDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidityAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityAddedEvent_filter>>>;
};

export type LiquidityAddedEvent_orderBy =
  | 'id'
  | 'poolId'
  | 'tokenId'
  | 'liquidity'
  | 'amount0'
  | 'amount1'
  | 'unlockDate'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Lock = {
  id: Scalars['ID']['output'];
  unlockDate: Scalars['BigInt']['output'];
  amount0: Scalars['BigInt']['output'];
  amount1: Scalars['BigInt']['output'];
  liquidity: Scalars['BigInt']['output'];
  pool: Pool;
  currency0: Token;
  currency1: Token;
  owner: Wallet;
};

export type Lock_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  unlockDate?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_not?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlockDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount0?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount1?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  currency0?: InputMaybe<Scalars['String']['input']>;
  currency0_not?: InputMaybe<Scalars['String']['input']>;
  currency0_gt?: InputMaybe<Scalars['String']['input']>;
  currency0_lt?: InputMaybe<Scalars['String']['input']>;
  currency0_gte?: InputMaybe<Scalars['String']['input']>;
  currency0_lte?: InputMaybe<Scalars['String']['input']>;
  currency0_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currency0_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currency0_contains?: InputMaybe<Scalars['String']['input']>;
  currency0_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currency0_not_contains?: InputMaybe<Scalars['String']['input']>;
  currency0_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currency0_starts_with?: InputMaybe<Scalars['String']['input']>;
  currency0_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency0_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currency0_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency0_ends_with?: InputMaybe<Scalars['String']['input']>;
  currency0_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency0_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currency0_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency0_?: InputMaybe<Token_filter>;
  currency1?: InputMaybe<Scalars['String']['input']>;
  currency1_not?: InputMaybe<Scalars['String']['input']>;
  currency1_gt?: InputMaybe<Scalars['String']['input']>;
  currency1_lt?: InputMaybe<Scalars['String']['input']>;
  currency1_gte?: InputMaybe<Scalars['String']['input']>;
  currency1_lte?: InputMaybe<Scalars['String']['input']>;
  currency1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currency1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currency1_contains?: InputMaybe<Scalars['String']['input']>;
  currency1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currency1_not_contains?: InputMaybe<Scalars['String']['input']>;
  currency1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currency1_starts_with?: InputMaybe<Scalars['String']['input']>;
  currency1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currency1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency1_ends_with?: InputMaybe<Scalars['String']['input']>;
  currency1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currency1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency1_?: InputMaybe<Token_filter>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Wallet_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Lock_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Lock_filter>>>;
};

export type Lock_orderBy =
  | 'id'
  | 'unlockDate'
  | 'amount0'
  | 'amount1'
  | 'liquidity'
  | 'pool'
  | 'pool__id'
  | 'pool__fee'
  | 'pool__clockhook'
  | 'currency0'
  | 'currency0__id'
  | 'currency0__name'
  | 'currency0__symbol'
  | 'currency0__decimals'
  | 'currency0__blockNumber'
  | 'currency0__blockTimestamp'
  | 'currency1'
  | 'currency1__id'
  | 'currency1__name'
  | 'currency1__symbol'
  | 'currency1__decimals'
  | 'currency1__blockNumber'
  | 'currency1__blockTimestamp'
  | 'owner'
  | 'owner__id'
  | 'owner__numberDeploymentsPool';

export type ModifyLiquidity = {
  id: Scalars['Bytes']['output'];
  CLPoolManager_id: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
  tickLower: Scalars['Int']['output'];
  tickUpper: Scalars['Int']['output'];
  salt: Scalars['Bytes']['output'];
  liquidityDelta: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ModifyLiquidity_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_not?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  CLPoolManager_id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  CLPoolManager_id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tickLower?: InputMaybe<Scalars['Int']['input']>;
  tickLower_not?: InputMaybe<Scalars['Int']['input']>;
  tickLower_gt?: InputMaybe<Scalars['Int']['input']>;
  tickLower_lt?: InputMaybe<Scalars['Int']['input']>;
  tickLower_gte?: InputMaybe<Scalars['Int']['input']>;
  tickLower_lte?: InputMaybe<Scalars['Int']['input']>;
  tickLower_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tickUpper?: InputMaybe<Scalars['Int']['input']>;
  tickUpper_not?: InputMaybe<Scalars['Int']['input']>;
  tickUpper_gt?: InputMaybe<Scalars['Int']['input']>;
  tickUpper_lt?: InputMaybe<Scalars['Int']['input']>;
  tickUpper_gte?: InputMaybe<Scalars['Int']['input']>;
  tickUpper_lte?: InputMaybe<Scalars['Int']['input']>;
  tickUpper_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  salt?: InputMaybe<Scalars['Bytes']['input']>;
  salt_not?: InputMaybe<Scalars['Bytes']['input']>;
  salt_gt?: InputMaybe<Scalars['Bytes']['input']>;
  salt_lt?: InputMaybe<Scalars['Bytes']['input']>;
  salt_gte?: InputMaybe<Scalars['Bytes']['input']>;
  salt_lte?: InputMaybe<Scalars['Bytes']['input']>;
  salt_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  salt_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  salt_contains?: InputMaybe<Scalars['Bytes']['input']>;
  salt_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  liquidityDelta?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityDelta_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityDelta_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityDelta_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityDelta_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityDelta_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityDelta_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityDelta_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ModifyLiquidity_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ModifyLiquidity_filter>>>;
};

export type ModifyLiquidity_orderBy =
  | 'id'
  | 'CLPoolManager_id'
  | 'sender'
  | 'tickLower'
  | 'tickUpper'
  | 'salt'
  | 'liquidityDelta'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type OwnershipTransferred = {
  id: Scalars['Bytes']['output'];
  previousOwner: Scalars['Bytes']['output'];
  newOwner: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OwnershipTransferred_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnershipTransferred_filter>>>;
  or?: InputMaybe<Array<InputMaybe<OwnershipTransferred_filter>>>;
};

export type OwnershipTransferred_orderBy =
  | 'id'
  | 'previousOwner'
  | 'newOwner'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type PausableRoleGranted = {
  id: Scalars['Bytes']['output'];
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PausableRoleGranted_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PausableRoleGranted_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PausableRoleGranted_filter>>>;
};

export type PausableRoleGranted_orderBy =
  | 'id'
  | 'account'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type PausableRoleRevoked = {
  id: Scalars['Bytes']['output'];
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PausableRoleRevoked_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PausableRoleRevoked_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PausableRoleRevoked_filter>>>;
};

export type PausableRoleRevoked_orderBy =
  | 'id'
  | 'account'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Paused = {
  id: Scalars['Bytes']['output'];
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Paused_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Paused_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Paused_filter>>>;
};

export type Paused_orderBy =
  | 'id'
  | 'account'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Pool = {
  id: Scalars['ID']['output'];
  currency0: Token;
  currency1: Token;
  fee: Scalars['Int']['output'];
  clockhook: Scalars['Bytes']['output'];
  locks: Array<Lock>;
};


export type PoollocksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Lock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Lock_filter>;
};

export type Pool_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  currency0?: InputMaybe<Scalars['String']['input']>;
  currency0_not?: InputMaybe<Scalars['String']['input']>;
  currency0_gt?: InputMaybe<Scalars['String']['input']>;
  currency0_lt?: InputMaybe<Scalars['String']['input']>;
  currency0_gte?: InputMaybe<Scalars['String']['input']>;
  currency0_lte?: InputMaybe<Scalars['String']['input']>;
  currency0_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currency0_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currency0_contains?: InputMaybe<Scalars['String']['input']>;
  currency0_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currency0_not_contains?: InputMaybe<Scalars['String']['input']>;
  currency0_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currency0_starts_with?: InputMaybe<Scalars['String']['input']>;
  currency0_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency0_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currency0_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency0_ends_with?: InputMaybe<Scalars['String']['input']>;
  currency0_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency0_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currency0_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency0_?: InputMaybe<Token_filter>;
  currency1?: InputMaybe<Scalars['String']['input']>;
  currency1_not?: InputMaybe<Scalars['String']['input']>;
  currency1_gt?: InputMaybe<Scalars['String']['input']>;
  currency1_lt?: InputMaybe<Scalars['String']['input']>;
  currency1_gte?: InputMaybe<Scalars['String']['input']>;
  currency1_lte?: InputMaybe<Scalars['String']['input']>;
  currency1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currency1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currency1_contains?: InputMaybe<Scalars['String']['input']>;
  currency1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currency1_not_contains?: InputMaybe<Scalars['String']['input']>;
  currency1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currency1_starts_with?: InputMaybe<Scalars['String']['input']>;
  currency1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currency1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency1_ends_with?: InputMaybe<Scalars['String']['input']>;
  currency1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currency1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currency1_?: InputMaybe<Token_filter>;
  fee?: InputMaybe<Scalars['Int']['input']>;
  fee_not?: InputMaybe<Scalars['Int']['input']>;
  fee_gt?: InputMaybe<Scalars['Int']['input']>;
  fee_lt?: InputMaybe<Scalars['Int']['input']>;
  fee_gte?: InputMaybe<Scalars['Int']['input']>;
  fee_lte?: InputMaybe<Scalars['Int']['input']>;
  fee_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  fee_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  clockhook?: InputMaybe<Scalars['Bytes']['input']>;
  clockhook_not?: InputMaybe<Scalars['Bytes']['input']>;
  clockhook_gt?: InputMaybe<Scalars['Bytes']['input']>;
  clockhook_lt?: InputMaybe<Scalars['Bytes']['input']>;
  clockhook_gte?: InputMaybe<Scalars['Bytes']['input']>;
  clockhook_lte?: InputMaybe<Scalars['Bytes']['input']>;
  clockhook_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  clockhook_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  clockhook_contains?: InputMaybe<Scalars['Bytes']['input']>;
  clockhook_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  locks_?: InputMaybe<Lock_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
};

export type Pool_orderBy =
  | 'id'
  | 'currency0'
  | 'currency0__id'
  | 'currency0__name'
  | 'currency0__symbol'
  | 'currency0__decimals'
  | 'currency0__blockNumber'
  | 'currency0__blockTimestamp'
  | 'currency1'
  | 'currency1__id'
  | 'currency1__name'
  | 'currency1__symbol'
  | 'currency1__decimals'
  | 'currency1__blockNumber'
  | 'currency1__blockTimestamp'
  | 'fee'
  | 'clockhook'
  | 'locks';

export type ProtocolFeeControllerUpdated = {
  id: Scalars['Bytes']['output'];
  protocolFeeController: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ProtocolFeeControllerUpdated_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeController?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeController_not?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeController_gt?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeController_lt?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeController_gte?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeController_lte?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeController_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  protocolFeeController_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  protocolFeeController_contains?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeController_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProtocolFeeControllerUpdated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProtocolFeeControllerUpdated_filter>>>;
};

export type ProtocolFeeControllerUpdated_orderBy =
  | 'id'
  | 'protocolFeeController'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type ProtocolFeeUpdated = {
  id: Scalars['Bytes']['output'];
  CLPoolManager_id: Scalars['Bytes']['output'];
  protocolFee: Scalars['Int']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ProtocolFeeUpdated_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_not?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  CLPoolManager_id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  CLPoolManager_id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFee?: InputMaybe<Scalars['Int']['input']>;
  protocolFee_not?: InputMaybe<Scalars['Int']['input']>;
  protocolFee_gt?: InputMaybe<Scalars['Int']['input']>;
  protocolFee_lt?: InputMaybe<Scalars['Int']['input']>;
  protocolFee_gte?: InputMaybe<Scalars['Int']['input']>;
  protocolFee_lte?: InputMaybe<Scalars['Int']['input']>;
  protocolFee_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  protocolFee_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProtocolFeeUpdated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProtocolFeeUpdated_filter>>>;
};

export type ProtocolFeeUpdated_orderBy =
  | 'id'
  | 'CLPoolManager_id'
  | 'protocolFee'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Query = {
  eventCollection?: Maybe<EventCollection>;
  eventCollections: Array<EventCollection>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  lock?: Maybe<Lock>;
  locks: Array<Lock>;
  initializeEvent?: Maybe<InitializeEvent>;
  initializeEvents: Array<InitializeEvent>;
  wallet?: Maybe<Wallet>;
  wallets: Array<Wallet>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  decreaseLiquidityEvent?: Maybe<DecreaseLiquidityEvent>;
  decreaseLiquidityEvents: Array<DecreaseLiquidityEvent>;
  extendLockEvent?: Maybe<ExtendLockEvent>;
  extendLockEvents: Array<ExtendLockEvent>;
  liquidityAddedEvent?: Maybe<LiquidityAddedEvent>;
  liquidityAddedEvents: Array<LiquidityAddedEvent>;
  donate?: Maybe<Donate>;
  donates: Array<Donate>;
  dynamicLPFeeUpdated?: Maybe<DynamicLPFeeUpdated>;
  dynamicLPFeeUpdateds: Array<DynamicLPFeeUpdated>;
  clpoolManagerInitialize?: Maybe<CLPoolManagerInitialize>;
  clpoolManagerInitializes: Array<CLPoolManagerInitialize>;
  modifyLiquidity?: Maybe<ModifyLiquidity>;
  modifyLiquidities: Array<ModifyLiquidity>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  pausableRoleGranted?: Maybe<PausableRoleGranted>;
  pausableRoleGranteds: Array<PausableRoleGranted>;
  pausableRoleRevoked?: Maybe<PausableRoleRevoked>;
  pausableRoleRevokeds: Array<PausableRoleRevoked>;
  paused?: Maybe<Paused>;
  pauseds: Array<Paused>;
  protocolFeeControllerUpdated?: Maybe<ProtocolFeeControllerUpdated>;
  protocolFeeControllerUpdateds: Array<ProtocolFeeControllerUpdated>;
  protocolFeeUpdated?: Maybe<ProtocolFeeUpdated>;
  protocolFeeUpdateds: Array<ProtocolFeeUpdated>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  unpaused?: Maybe<Unpaused>;
  unpauseds: Array<Unpaused>;
  data?: Maybe<Data>;
  datas: Array<Data>;
  /** Collection of aggregated `Stats` values */
  stats_collection: Array<Stats>;
  tokenSearch: Array<Token>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryeventCollectionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventCollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EventCollection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EventCollection_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylockArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylocksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Lock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Lock_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinitializeEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinitializeEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InitializeEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InitializeEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywalletArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywalletsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Wallet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Wallet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydecreaseLiquidityEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydecreaseLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DecreaseLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DecreaseLiquidityEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryextendLockEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryextendLockEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ExtendLockEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExtendLockEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidityAddedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityAddedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydonateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydonatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Donate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Donate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydynamicLPFeeUpdatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydynamicLPFeeUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DynamicLPFeeUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DynamicLPFeeUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclpoolManagerInitializeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclpoolManagerInitializesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CLPoolManagerInitialize_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CLPoolManagerInitialize_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymodifyLiquidityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymodifyLiquiditiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ModifyLiquidity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ModifyLiquidity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownershipTransferredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownershipTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnershipTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypausableRoleGrantedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypausableRoleGrantedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PausableRoleGranted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PausableRoleGranted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypausableRoleRevokedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypausableRoleRevokedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PausableRoleRevoked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PausableRoleRevoked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypausedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypausedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Paused_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Paused_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolFeeControllerUpdatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolFeeControllerUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProtocolFeeControllerUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtocolFeeControllerUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolFeeUpdatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolFeeUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProtocolFeeUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtocolFeeUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunpausedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunpausedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Unpaused_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Unpaused_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Data_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Data_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystats_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  interval: Aggregation_interval;
  where?: InputMaybe<Stats_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenSearchArgs = {
  text: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  block?: InputMaybe<Block_height>;
  where?: InputMaybe<Token_filter>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Stats = {
  id: Scalars['Int8']['output'];
  timestamp: Scalars['Timestamp']['output'];
  sumAmount0: Scalars['BigInt']['output'];
  sumAmount1: Scalars['BigInt']['output'];
  sumliquidity: Scalars['BigInt']['output'];
  countLiquidityAdded: Scalars['Int8']['output'];
};

export type Stats_filter = {
  id?: InputMaybe<Scalars['Int8']['input']>;
  id_gt?: InputMaybe<Scalars['Int8']['input']>;
  id_lt?: InputMaybe<Scalars['Int8']['input']>;
  id_gte?: InputMaybe<Scalars['Int8']['input']>;
  id_lte?: InputMaybe<Scalars['Int8']['input']>;
  id_in?: InputMaybe<Array<Scalars['Int8']['input']>>;
  timestamp?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Stats_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Stats_filter>>>;
};

export type Subscription = {
  eventCollection?: Maybe<EventCollection>;
  eventCollections: Array<EventCollection>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  lock?: Maybe<Lock>;
  locks: Array<Lock>;
  initializeEvent?: Maybe<InitializeEvent>;
  initializeEvents: Array<InitializeEvent>;
  wallet?: Maybe<Wallet>;
  wallets: Array<Wallet>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  decreaseLiquidityEvent?: Maybe<DecreaseLiquidityEvent>;
  decreaseLiquidityEvents: Array<DecreaseLiquidityEvent>;
  extendLockEvent?: Maybe<ExtendLockEvent>;
  extendLockEvents: Array<ExtendLockEvent>;
  liquidityAddedEvent?: Maybe<LiquidityAddedEvent>;
  liquidityAddedEvents: Array<LiquidityAddedEvent>;
  donate?: Maybe<Donate>;
  donates: Array<Donate>;
  dynamicLPFeeUpdated?: Maybe<DynamicLPFeeUpdated>;
  dynamicLPFeeUpdateds: Array<DynamicLPFeeUpdated>;
  clpoolManagerInitialize?: Maybe<CLPoolManagerInitialize>;
  clpoolManagerInitializes: Array<CLPoolManagerInitialize>;
  modifyLiquidity?: Maybe<ModifyLiquidity>;
  modifyLiquidities: Array<ModifyLiquidity>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  pausableRoleGranted?: Maybe<PausableRoleGranted>;
  pausableRoleGranteds: Array<PausableRoleGranted>;
  pausableRoleRevoked?: Maybe<PausableRoleRevoked>;
  pausableRoleRevokeds: Array<PausableRoleRevoked>;
  paused?: Maybe<Paused>;
  pauseds: Array<Paused>;
  protocolFeeControllerUpdated?: Maybe<ProtocolFeeControllerUpdated>;
  protocolFeeControllerUpdateds: Array<ProtocolFeeControllerUpdated>;
  protocolFeeUpdated?: Maybe<ProtocolFeeUpdated>;
  protocolFeeUpdateds: Array<ProtocolFeeUpdated>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  unpaused?: Maybe<Unpaused>;
  unpauseds: Array<Unpaused>;
  data?: Maybe<Data>;
  datas: Array<Data>;
  /** Collection of aggregated `Stats` values */
  stats_collection: Array<Stats>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptioneventCollectionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneventCollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EventCollection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EventCollection_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlockArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlocksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Lock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Lock_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninitializeEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninitializeEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InitializeEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InitializeEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwalletArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwalletsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Wallet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Wallet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondecreaseLiquidityEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondecreaseLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DecreaseLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DecreaseLiquidityEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionextendLockEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionextendLockEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ExtendLockEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExtendLockEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidityAddedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityAddedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondonateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondonatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Donate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Donate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondynamicLPFeeUpdatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondynamicLPFeeUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DynamicLPFeeUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DynamicLPFeeUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclpoolManagerInitializeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclpoolManagerInitializesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CLPoolManagerInitialize_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CLPoolManagerInitialize_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmodifyLiquidityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmodifyLiquiditiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ModifyLiquidity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ModifyLiquidity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownershipTransferredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownershipTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnershipTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpausableRoleGrantedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpausableRoleGrantedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PausableRoleGranted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PausableRoleGranted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpausableRoleRevokedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpausableRoleRevokedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PausableRoleRevoked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PausableRoleRevoked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpausedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpausedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Paused_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Paused_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolFeeControllerUpdatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolFeeControllerUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProtocolFeeControllerUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtocolFeeControllerUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolFeeUpdatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolFeeUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProtocolFeeUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtocolFeeUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunpausedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunpausedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Unpaused_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Unpaused_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Data_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Data_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstats_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  interval: Aggregation_interval;
  where?: InputMaybe<Stats_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Swap = {
  id: Scalars['Bytes']['output'];
  CLPoolManager_id: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
  amount0: Scalars['BigInt']['output'];
  amount1: Scalars['BigInt']['output'];
  sqrtPriceX96: Scalars['BigInt']['output'];
  liquidity: Scalars['BigInt']['output'];
  tick: Scalars['Int']['output'];
  fee: Scalars['Int']['output'];
  protocolFee: Scalars['Int']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Swap_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_not?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  CLPoolManager_id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  CLPoolManager_id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  CLPoolManager_id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount0?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount0_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount1?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount1_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sqrtPriceX96?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPriceX96_not?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPriceX96_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPriceX96_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPriceX96_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPriceX96_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPriceX96_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sqrtPriceX96_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick?: InputMaybe<Scalars['Int']['input']>;
  tick_not?: InputMaybe<Scalars['Int']['input']>;
  tick_gt?: InputMaybe<Scalars['Int']['input']>;
  tick_lt?: InputMaybe<Scalars['Int']['input']>;
  tick_gte?: InputMaybe<Scalars['Int']['input']>;
  tick_lte?: InputMaybe<Scalars['Int']['input']>;
  tick_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tick_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  fee?: InputMaybe<Scalars['Int']['input']>;
  fee_not?: InputMaybe<Scalars['Int']['input']>;
  fee_gt?: InputMaybe<Scalars['Int']['input']>;
  fee_lt?: InputMaybe<Scalars['Int']['input']>;
  fee_gte?: InputMaybe<Scalars['Int']['input']>;
  fee_lte?: InputMaybe<Scalars['Int']['input']>;
  fee_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  fee_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  protocolFee?: InputMaybe<Scalars['Int']['input']>;
  protocolFee_not?: InputMaybe<Scalars['Int']['input']>;
  protocolFee_gt?: InputMaybe<Scalars['Int']['input']>;
  protocolFee_lt?: InputMaybe<Scalars['Int']['input']>;
  protocolFee_gte?: InputMaybe<Scalars['Int']['input']>;
  protocolFee_lte?: InputMaybe<Scalars['Int']['input']>;
  protocolFee_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  protocolFee_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
};

export type Swap_orderBy =
  | 'id'
  | 'CLPoolManager_id'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'sqrtPriceX96'
  | 'liquidity'
  | 'tick'
  | 'fee'
  | 'protocolFee'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Token = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  decimals: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
};

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decimals?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'decimals'
  | 'blockNumber'
  | 'blockTimestamp';

export type Unpaused = {
  id: Scalars['Bytes']['output'];
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Unpaused_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Unpaused_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Unpaused_filter>>>;
};

export type Unpaused_orderBy =
  | 'id'
  | 'account'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Wallet = {
  id: Scalars['ID']['output'];
  numberDeploymentsPool: Scalars['BigInt']['output'];
  locks: Array<Lock>;
};


export type WalletlocksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Lock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Lock_filter>;
};

export type Wallet_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  numberDeploymentsPool?: InputMaybe<Scalars['BigInt']['input']>;
  numberDeploymentsPool_not?: InputMaybe<Scalars['BigInt']['input']>;
  numberDeploymentsPool_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numberDeploymentsPool_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numberDeploymentsPool_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numberDeploymentsPool_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numberDeploymentsPool_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberDeploymentsPool_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  locks_?: InputMaybe<Lock_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Wallet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Wallet_filter>>>;
};

export type Wallet_orderBy =
  | 'id'
  | 'numberDeploymentsPool'
  | 'locks';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Aggregation_interval: Aggregation_interval;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  CLPoolManagerInitialize: ResolverTypeWrapper<CLPoolManagerInitialize>;
  CLPoolManagerInitialize_filter: CLPoolManagerInitialize_filter;
  CLPoolManagerInitialize_orderBy: CLPoolManagerInitialize_orderBy;
  Data: ResolverTypeWrapper<Data>;
  Data_filter: Data_filter;
  Data_orderBy: Data_orderBy;
  DecreaseLiquidityEvent: ResolverTypeWrapper<DecreaseLiquidityEvent>;
  DecreaseLiquidityEvent_filter: DecreaseLiquidityEvent_filter;
  DecreaseLiquidityEvent_orderBy: DecreaseLiquidityEvent_orderBy;
  Donate: ResolverTypeWrapper<Donate>;
  Donate_filter: Donate_filter;
  Donate_orderBy: Donate_orderBy;
  DynamicLPFeeUpdated: ResolverTypeWrapper<DynamicLPFeeUpdated>;
  DynamicLPFeeUpdated_filter: DynamicLPFeeUpdated_filter;
  DynamicLPFeeUpdated_orderBy: DynamicLPFeeUpdated_orderBy;
  EventCollection: ResolverTypeWrapper<EventCollection>;
  EventCollection_filter: EventCollection_filter;
  EventCollection_orderBy: EventCollection_orderBy;
  ExtendLockEvent: ResolverTypeWrapper<ExtendLockEvent>;
  ExtendLockEvent_filter: ExtendLockEvent_filter;
  ExtendLockEvent_orderBy: ExtendLockEvent_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  InitializeEvent: ResolverTypeWrapper<InitializeEvent>;
  InitializeEvent_filter: InitializeEvent_filter;
  InitializeEvent_orderBy: InitializeEvent_orderBy;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  LiquidityAddedEvent: ResolverTypeWrapper<LiquidityAddedEvent>;
  LiquidityAddedEvent_filter: LiquidityAddedEvent_filter;
  LiquidityAddedEvent_orderBy: LiquidityAddedEvent_orderBy;
  Lock: ResolverTypeWrapper<Lock>;
  Lock_filter: Lock_filter;
  Lock_orderBy: Lock_orderBy;
  ModifyLiquidity: ResolverTypeWrapper<ModifyLiquidity>;
  ModifyLiquidity_filter: ModifyLiquidity_filter;
  ModifyLiquidity_orderBy: ModifyLiquidity_orderBy;
  OrderDirection: OrderDirection;
  OwnershipTransferred: ResolverTypeWrapper<OwnershipTransferred>;
  OwnershipTransferred_filter: OwnershipTransferred_filter;
  OwnershipTransferred_orderBy: OwnershipTransferred_orderBy;
  PausableRoleGranted: ResolverTypeWrapper<PausableRoleGranted>;
  PausableRoleGranted_filter: PausableRoleGranted_filter;
  PausableRoleGranted_orderBy: PausableRoleGranted_orderBy;
  PausableRoleRevoked: ResolverTypeWrapper<PausableRoleRevoked>;
  PausableRoleRevoked_filter: PausableRoleRevoked_filter;
  PausableRoleRevoked_orderBy: PausableRoleRevoked_orderBy;
  Paused: ResolverTypeWrapper<Paused>;
  Paused_filter: Paused_filter;
  Paused_orderBy: Paused_orderBy;
  Pool: ResolverTypeWrapper<Pool>;
  Pool_filter: Pool_filter;
  Pool_orderBy: Pool_orderBy;
  ProtocolFeeControllerUpdated: ResolverTypeWrapper<ProtocolFeeControllerUpdated>;
  ProtocolFeeControllerUpdated_filter: ProtocolFeeControllerUpdated_filter;
  ProtocolFeeControllerUpdated_orderBy: ProtocolFeeControllerUpdated_orderBy;
  ProtocolFeeUpdated: ResolverTypeWrapper<ProtocolFeeUpdated>;
  ProtocolFeeUpdated_filter: ProtocolFeeUpdated_filter;
  ProtocolFeeUpdated_orderBy: ProtocolFeeUpdated_orderBy;
  Query: ResolverTypeWrapper<{}>;
  Stats: ResolverTypeWrapper<Stats>;
  Stats_filter: Stats_filter;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Swap: ResolverTypeWrapper<Swap>;
  Swap_filter: Swap_filter;
  Swap_orderBy: Swap_orderBy;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  Token: ResolverTypeWrapper<Token>;
  Token_filter: Token_filter;
  Token_orderBy: Token_orderBy;
  Unpaused: ResolverTypeWrapper<Unpaused>;
  Unpaused_filter: Unpaused_filter;
  Unpaused_orderBy: Unpaused_orderBy;
  Wallet: ResolverTypeWrapper<Wallet>;
  Wallet_filter: Wallet_filter;
  Wallet_orderBy: Wallet_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean']['output'];
  Bytes: Scalars['Bytes']['output'];
  CLPoolManagerInitialize: CLPoolManagerInitialize;
  CLPoolManagerInitialize_filter: CLPoolManagerInitialize_filter;
  Data: Data;
  Data_filter: Data_filter;
  DecreaseLiquidityEvent: DecreaseLiquidityEvent;
  DecreaseLiquidityEvent_filter: DecreaseLiquidityEvent_filter;
  Donate: Donate;
  Donate_filter: Donate_filter;
  DynamicLPFeeUpdated: DynamicLPFeeUpdated;
  DynamicLPFeeUpdated_filter: DynamicLPFeeUpdated_filter;
  EventCollection: EventCollection;
  EventCollection_filter: EventCollection_filter;
  ExtendLockEvent: ExtendLockEvent;
  ExtendLockEvent_filter: ExtendLockEvent_filter;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  InitializeEvent: InitializeEvent;
  InitializeEvent_filter: InitializeEvent_filter;
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  LiquidityAddedEvent: LiquidityAddedEvent;
  LiquidityAddedEvent_filter: LiquidityAddedEvent_filter;
  Lock: Lock;
  Lock_filter: Lock_filter;
  ModifyLiquidity: ModifyLiquidity;
  ModifyLiquidity_filter: ModifyLiquidity_filter;
  OwnershipTransferred: OwnershipTransferred;
  OwnershipTransferred_filter: OwnershipTransferred_filter;
  PausableRoleGranted: PausableRoleGranted;
  PausableRoleGranted_filter: PausableRoleGranted_filter;
  PausableRoleRevoked: PausableRoleRevoked;
  PausableRoleRevoked_filter: PausableRoleRevoked_filter;
  Paused: Paused;
  Paused_filter: Paused_filter;
  Pool: Pool;
  Pool_filter: Pool_filter;
  ProtocolFeeControllerUpdated: ProtocolFeeControllerUpdated;
  ProtocolFeeControllerUpdated_filter: ProtocolFeeControllerUpdated_filter;
  ProtocolFeeUpdated: ProtocolFeeUpdated;
  ProtocolFeeUpdated_filter: ProtocolFeeUpdated_filter;
  Query: {};
  Stats: Stats;
  Stats_filter: Stats_filter;
  String: Scalars['String']['output'];
  Subscription: {};
  Swap: Swap;
  Swap_filter: Swap_filter;
  Timestamp: Scalars['Timestamp']['output'];
  Token: Token;
  Token_filter: Token_filter;
  Unpaused: Unpaused;
  Unpaused_filter: Unpaused_filter;
  Wallet: Wallet;
  Wallet_filter: Wallet_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CLPoolManagerInitializeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CLPoolManagerInitialize'] = ResolversParentTypes['CLPoolManagerInitialize']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  CLPoolManager_id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  currency0?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  currency1?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  hooks?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parameters?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Data'] = ResolversParentTypes['Data']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int8'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DecreaseLiquidityEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DecreaseLiquidityEvent'] = ResolversParentTypes['DecreaseLiquidityEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  removedAmount0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  removedAmount1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DonateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Donate'] = ResolversParentTypes['Donate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  CLPoolManager_id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DynamicLPFeeUpdatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DynamicLPFeeUpdated'] = ResolversParentTypes['DynamicLPFeeUpdated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  CLPoolManager_id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  dynamicLPFee?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventCollectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventCollection'] = ResolversParentTypes['EventCollection']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chaindId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  poolm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  launcher?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hookLock?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  numberPoolsV4?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberLocks?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtendLockEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExtendLockEvent'] = ResolversParentTypes['ExtendLockEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  unlockDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InitializeEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InitializeEvent'] = ResolversParentTypes['InitializeEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  poolId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  currency0?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  currency1?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  clockhook?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type LiquidityAddedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityAddedEvent'] = ResolversParentTypes['LiquidityAddedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  poolId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  unlockDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LockResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Lock'] = ResolversParentTypes['Lock']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  unlockDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  currency0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  currency1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ModifyLiquidityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ModifyLiquidity'] = ResolversParentTypes['ModifyLiquidity']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  CLPoolManager_id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salt?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  liquidityDelta?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OwnershipTransferredResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OwnershipTransferred'] = ResolversParentTypes['OwnershipTransferred']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  previousOwner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  newOwner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PausableRoleGrantedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PausableRoleGranted'] = ResolversParentTypes['PausableRoleGranted']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PausableRoleRevokedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PausableRoleRevoked'] = ResolversParentTypes['PausableRoleRevoked']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PausedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Paused'] = ResolversParentTypes['Paused']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pool'] = ResolversParentTypes['Pool']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  currency0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  currency1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  clockhook?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  locks?: Resolver<Array<ResolversTypes['Lock']>, ParentType, ContextType, RequireFields<PoollocksArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtocolFeeControllerUpdatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProtocolFeeControllerUpdated'] = ResolversParentTypes['ProtocolFeeControllerUpdated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  protocolFeeController?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtocolFeeUpdatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProtocolFeeUpdated'] = ResolversParentTypes['ProtocolFeeUpdated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  CLPoolManager_id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  protocolFee?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  eventCollection?: Resolver<Maybe<ResolversTypes['EventCollection']>, ParentType, ContextType, RequireFields<QueryeventCollectionArgs, 'id' | 'subgraphError'>>;
  eventCollections?: Resolver<Array<ResolversTypes['EventCollection']>, ParentType, ContextType, RequireFields<QueryeventCollectionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pool?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QuerypoolArgs, 'id' | 'subgraphError'>>;
  pools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QuerypoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  lock?: Resolver<Maybe<ResolversTypes['Lock']>, ParentType, ContextType, RequireFields<QuerylockArgs, 'id' | 'subgraphError'>>;
  locks?: Resolver<Array<ResolversTypes['Lock']>, ParentType, ContextType, RequireFields<QuerylocksArgs, 'skip' | 'first' | 'subgraphError'>>;
  initializeEvent?: Resolver<Maybe<ResolversTypes['InitializeEvent']>, ParentType, ContextType, RequireFields<QueryinitializeEventArgs, 'id' | 'subgraphError'>>;
  initializeEvents?: Resolver<Array<ResolversTypes['InitializeEvent']>, ParentType, ContextType, RequireFields<QueryinitializeEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  wallet?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType, RequireFields<QuerywalletArgs, 'id' | 'subgraphError'>>;
  wallets?: Resolver<Array<ResolversTypes['Wallet']>, ParentType, ContextType, RequireFields<QuerywalletsArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  decreaseLiquidityEvent?: Resolver<Maybe<ResolversTypes['DecreaseLiquidityEvent']>, ParentType, ContextType, RequireFields<QuerydecreaseLiquidityEventArgs, 'id' | 'subgraphError'>>;
  decreaseLiquidityEvents?: Resolver<Array<ResolversTypes['DecreaseLiquidityEvent']>, ParentType, ContextType, RequireFields<QuerydecreaseLiquidityEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  extendLockEvent?: Resolver<Maybe<ResolversTypes['ExtendLockEvent']>, ParentType, ContextType, RequireFields<QueryextendLockEventArgs, 'id' | 'subgraphError'>>;
  extendLockEvents?: Resolver<Array<ResolversTypes['ExtendLockEvent']>, ParentType, ContextType, RequireFields<QueryextendLockEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityAddedEvent?: Resolver<Maybe<ResolversTypes['LiquidityAddedEvent']>, ParentType, ContextType, RequireFields<QueryliquidityAddedEventArgs, 'id' | 'subgraphError'>>;
  liquidityAddedEvents?: Resolver<Array<ResolversTypes['LiquidityAddedEvent']>, ParentType, ContextType, RequireFields<QueryliquidityAddedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  donate?: Resolver<Maybe<ResolversTypes['Donate']>, ParentType, ContextType, RequireFields<QuerydonateArgs, 'id' | 'subgraphError'>>;
  donates?: Resolver<Array<ResolversTypes['Donate']>, ParentType, ContextType, RequireFields<QuerydonatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  dynamicLPFeeUpdated?: Resolver<Maybe<ResolversTypes['DynamicLPFeeUpdated']>, ParentType, ContextType, RequireFields<QuerydynamicLPFeeUpdatedArgs, 'id' | 'subgraphError'>>;
  dynamicLPFeeUpdateds?: Resolver<Array<ResolversTypes['DynamicLPFeeUpdated']>, ParentType, ContextType, RequireFields<QuerydynamicLPFeeUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  clpoolManagerInitialize?: Resolver<Maybe<ResolversTypes['CLPoolManagerInitialize']>, ParentType, ContextType, RequireFields<QueryclpoolManagerInitializeArgs, 'id' | 'subgraphError'>>;
  clpoolManagerInitializes?: Resolver<Array<ResolversTypes['CLPoolManagerInitialize']>, ParentType, ContextType, RequireFields<QueryclpoolManagerInitializesArgs, 'skip' | 'first' | 'subgraphError'>>;
  modifyLiquidity?: Resolver<Maybe<ResolversTypes['ModifyLiquidity']>, ParentType, ContextType, RequireFields<QuerymodifyLiquidityArgs, 'id' | 'subgraphError'>>;
  modifyLiquidities?: Resolver<Array<ResolversTypes['ModifyLiquidity']>, ParentType, ContextType, RequireFields<QuerymodifyLiquiditiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ownershipTransferred?: Resolver<Maybe<ResolversTypes['OwnershipTransferred']>, ParentType, ContextType, RequireFields<QueryownershipTransferredArgs, 'id' | 'subgraphError'>>;
  ownershipTransferreds?: Resolver<Array<ResolversTypes['OwnershipTransferred']>, ParentType, ContextType, RequireFields<QueryownershipTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pausableRoleGranted?: Resolver<Maybe<ResolversTypes['PausableRoleGranted']>, ParentType, ContextType, RequireFields<QuerypausableRoleGrantedArgs, 'id' | 'subgraphError'>>;
  pausableRoleGranteds?: Resolver<Array<ResolversTypes['PausableRoleGranted']>, ParentType, ContextType, RequireFields<QuerypausableRoleGrantedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pausableRoleRevoked?: Resolver<Maybe<ResolversTypes['PausableRoleRevoked']>, ParentType, ContextType, RequireFields<QuerypausableRoleRevokedArgs, 'id' | 'subgraphError'>>;
  pausableRoleRevokeds?: Resolver<Array<ResolversTypes['PausableRoleRevoked']>, ParentType, ContextType, RequireFields<QuerypausableRoleRevokedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  paused?: Resolver<Maybe<ResolversTypes['Paused']>, ParentType, ContextType, RequireFields<QuerypausedArgs, 'id' | 'subgraphError'>>;
  pauseds?: Resolver<Array<ResolversTypes['Paused']>, ParentType, ContextType, RequireFields<QuerypausedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  protocolFeeControllerUpdated?: Resolver<Maybe<ResolversTypes['ProtocolFeeControllerUpdated']>, ParentType, ContextType, RequireFields<QueryprotocolFeeControllerUpdatedArgs, 'id' | 'subgraphError'>>;
  protocolFeeControllerUpdateds?: Resolver<Array<ResolversTypes['ProtocolFeeControllerUpdated']>, ParentType, ContextType, RequireFields<QueryprotocolFeeControllerUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  protocolFeeUpdated?: Resolver<Maybe<ResolversTypes['ProtocolFeeUpdated']>, ParentType, ContextType, RequireFields<QueryprotocolFeeUpdatedArgs, 'id' | 'subgraphError'>>;
  protocolFeeUpdateds?: Resolver<Array<ResolversTypes['ProtocolFeeUpdated']>, ParentType, ContextType, RequireFields<QueryprotocolFeeUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: Resolver<Maybe<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapArgs, 'id' | 'subgraphError'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  unpaused?: Resolver<Maybe<ResolversTypes['Unpaused']>, ParentType, ContextType, RequireFields<QueryunpausedArgs, 'id' | 'subgraphError'>>;
  unpauseds?: Resolver<Array<ResolversTypes['Unpaused']>, ParentType, ContextType, RequireFields<QueryunpausedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  data?: Resolver<Maybe<ResolversTypes['Data']>, ParentType, ContextType, RequireFields<QuerydataArgs, 'id' | 'subgraphError'>>;
  datas?: Resolver<Array<ResolversTypes['Data']>, ParentType, ContextType, RequireFields<QuerydatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  stats_collection?: Resolver<Array<ResolversTypes['Stats']>, ParentType, ContextType, RequireFields<Querystats_collectionArgs, 'skip' | 'first' | 'interval' | 'subgraphError'>>;
  tokenSearch?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenSearchArgs, 'text' | 'first' | 'skip' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type StatsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Stats'] = ResolversParentTypes['Stats']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int8'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  sumAmount0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sumAmount1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sumliquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  countLiquidityAdded?: Resolver<ResolversTypes['Int8'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  eventCollection?: SubscriptionResolver<Maybe<ResolversTypes['EventCollection']>, "eventCollection", ParentType, ContextType, RequireFields<SubscriptioneventCollectionArgs, 'id' | 'subgraphError'>>;
  eventCollections?: SubscriptionResolver<Array<ResolversTypes['EventCollection']>, "eventCollections", ParentType, ContextType, RequireFields<SubscriptioneventCollectionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pool?: SubscriptionResolver<Maybe<ResolversTypes['Pool']>, "pool", ParentType, ContextType, RequireFields<SubscriptionpoolArgs, 'id' | 'subgraphError'>>;
  pools?: SubscriptionResolver<Array<ResolversTypes['Pool']>, "pools", ParentType, ContextType, RequireFields<SubscriptionpoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  lock?: SubscriptionResolver<Maybe<ResolversTypes['Lock']>, "lock", ParentType, ContextType, RequireFields<SubscriptionlockArgs, 'id' | 'subgraphError'>>;
  locks?: SubscriptionResolver<Array<ResolversTypes['Lock']>, "locks", ParentType, ContextType, RequireFields<SubscriptionlocksArgs, 'skip' | 'first' | 'subgraphError'>>;
  initializeEvent?: SubscriptionResolver<Maybe<ResolversTypes['InitializeEvent']>, "initializeEvent", ParentType, ContextType, RequireFields<SubscriptioninitializeEventArgs, 'id' | 'subgraphError'>>;
  initializeEvents?: SubscriptionResolver<Array<ResolversTypes['InitializeEvent']>, "initializeEvents", ParentType, ContextType, RequireFields<SubscriptioninitializeEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  wallet?: SubscriptionResolver<Maybe<ResolversTypes['Wallet']>, "wallet", ParentType, ContextType, RequireFields<SubscriptionwalletArgs, 'id' | 'subgraphError'>>;
  wallets?: SubscriptionResolver<Array<ResolversTypes['Wallet']>, "wallets", ParentType, ContextType, RequireFields<SubscriptionwalletsArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  decreaseLiquidityEvent?: SubscriptionResolver<Maybe<ResolversTypes['DecreaseLiquidityEvent']>, "decreaseLiquidityEvent", ParentType, ContextType, RequireFields<SubscriptiondecreaseLiquidityEventArgs, 'id' | 'subgraphError'>>;
  decreaseLiquidityEvents?: SubscriptionResolver<Array<ResolversTypes['DecreaseLiquidityEvent']>, "decreaseLiquidityEvents", ParentType, ContextType, RequireFields<SubscriptiondecreaseLiquidityEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  extendLockEvent?: SubscriptionResolver<Maybe<ResolversTypes['ExtendLockEvent']>, "extendLockEvent", ParentType, ContextType, RequireFields<SubscriptionextendLockEventArgs, 'id' | 'subgraphError'>>;
  extendLockEvents?: SubscriptionResolver<Array<ResolversTypes['ExtendLockEvent']>, "extendLockEvents", ParentType, ContextType, RequireFields<SubscriptionextendLockEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityAddedEvent?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityAddedEvent']>, "liquidityAddedEvent", ParentType, ContextType, RequireFields<SubscriptionliquidityAddedEventArgs, 'id' | 'subgraphError'>>;
  liquidityAddedEvents?: SubscriptionResolver<Array<ResolversTypes['LiquidityAddedEvent']>, "liquidityAddedEvents", ParentType, ContextType, RequireFields<SubscriptionliquidityAddedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  donate?: SubscriptionResolver<Maybe<ResolversTypes['Donate']>, "donate", ParentType, ContextType, RequireFields<SubscriptiondonateArgs, 'id' | 'subgraphError'>>;
  donates?: SubscriptionResolver<Array<ResolversTypes['Donate']>, "donates", ParentType, ContextType, RequireFields<SubscriptiondonatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  dynamicLPFeeUpdated?: SubscriptionResolver<Maybe<ResolversTypes['DynamicLPFeeUpdated']>, "dynamicLPFeeUpdated", ParentType, ContextType, RequireFields<SubscriptiondynamicLPFeeUpdatedArgs, 'id' | 'subgraphError'>>;
  dynamicLPFeeUpdateds?: SubscriptionResolver<Array<ResolversTypes['DynamicLPFeeUpdated']>, "dynamicLPFeeUpdateds", ParentType, ContextType, RequireFields<SubscriptiondynamicLPFeeUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  clpoolManagerInitialize?: SubscriptionResolver<Maybe<ResolversTypes['CLPoolManagerInitialize']>, "clpoolManagerInitialize", ParentType, ContextType, RequireFields<SubscriptionclpoolManagerInitializeArgs, 'id' | 'subgraphError'>>;
  clpoolManagerInitializes?: SubscriptionResolver<Array<ResolversTypes['CLPoolManagerInitialize']>, "clpoolManagerInitializes", ParentType, ContextType, RequireFields<SubscriptionclpoolManagerInitializesArgs, 'skip' | 'first' | 'subgraphError'>>;
  modifyLiquidity?: SubscriptionResolver<Maybe<ResolversTypes['ModifyLiquidity']>, "modifyLiquidity", ParentType, ContextType, RequireFields<SubscriptionmodifyLiquidityArgs, 'id' | 'subgraphError'>>;
  modifyLiquidities?: SubscriptionResolver<Array<ResolversTypes['ModifyLiquidity']>, "modifyLiquidities", ParentType, ContextType, RequireFields<SubscriptionmodifyLiquiditiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ownershipTransferred?: SubscriptionResolver<Maybe<ResolversTypes['OwnershipTransferred']>, "ownershipTransferred", ParentType, ContextType, RequireFields<SubscriptionownershipTransferredArgs, 'id' | 'subgraphError'>>;
  ownershipTransferreds?: SubscriptionResolver<Array<ResolversTypes['OwnershipTransferred']>, "ownershipTransferreds", ParentType, ContextType, RequireFields<SubscriptionownershipTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pausableRoleGranted?: SubscriptionResolver<Maybe<ResolversTypes['PausableRoleGranted']>, "pausableRoleGranted", ParentType, ContextType, RequireFields<SubscriptionpausableRoleGrantedArgs, 'id' | 'subgraphError'>>;
  pausableRoleGranteds?: SubscriptionResolver<Array<ResolversTypes['PausableRoleGranted']>, "pausableRoleGranteds", ParentType, ContextType, RequireFields<SubscriptionpausableRoleGrantedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pausableRoleRevoked?: SubscriptionResolver<Maybe<ResolversTypes['PausableRoleRevoked']>, "pausableRoleRevoked", ParentType, ContextType, RequireFields<SubscriptionpausableRoleRevokedArgs, 'id' | 'subgraphError'>>;
  pausableRoleRevokeds?: SubscriptionResolver<Array<ResolversTypes['PausableRoleRevoked']>, "pausableRoleRevokeds", ParentType, ContextType, RequireFields<SubscriptionpausableRoleRevokedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  paused?: SubscriptionResolver<Maybe<ResolversTypes['Paused']>, "paused", ParentType, ContextType, RequireFields<SubscriptionpausedArgs, 'id' | 'subgraphError'>>;
  pauseds?: SubscriptionResolver<Array<ResolversTypes['Paused']>, "pauseds", ParentType, ContextType, RequireFields<SubscriptionpausedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  protocolFeeControllerUpdated?: SubscriptionResolver<Maybe<ResolversTypes['ProtocolFeeControllerUpdated']>, "protocolFeeControllerUpdated", ParentType, ContextType, RequireFields<SubscriptionprotocolFeeControllerUpdatedArgs, 'id' | 'subgraphError'>>;
  protocolFeeControllerUpdateds?: SubscriptionResolver<Array<ResolversTypes['ProtocolFeeControllerUpdated']>, "protocolFeeControllerUpdateds", ParentType, ContextType, RequireFields<SubscriptionprotocolFeeControllerUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  protocolFeeUpdated?: SubscriptionResolver<Maybe<ResolversTypes['ProtocolFeeUpdated']>, "protocolFeeUpdated", ParentType, ContextType, RequireFields<SubscriptionprotocolFeeUpdatedArgs, 'id' | 'subgraphError'>>;
  protocolFeeUpdateds?: SubscriptionResolver<Array<ResolversTypes['ProtocolFeeUpdated']>, "protocolFeeUpdateds", ParentType, ContextType, RequireFields<SubscriptionprotocolFeeUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: SubscriptionResolver<Maybe<ResolversTypes['Swap']>, "swap", ParentType, ContextType, RequireFields<SubscriptionswapArgs, 'id' | 'subgraphError'>>;
  swaps?: SubscriptionResolver<Array<ResolversTypes['Swap']>, "swaps", ParentType, ContextType, RequireFields<SubscriptionswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  unpaused?: SubscriptionResolver<Maybe<ResolversTypes['Unpaused']>, "unpaused", ParentType, ContextType, RequireFields<SubscriptionunpausedArgs, 'id' | 'subgraphError'>>;
  unpauseds?: SubscriptionResolver<Array<ResolversTypes['Unpaused']>, "unpauseds", ParentType, ContextType, RequireFields<SubscriptionunpausedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  data?: SubscriptionResolver<Maybe<ResolversTypes['Data']>, "data", ParentType, ContextType, RequireFields<SubscriptiondataArgs, 'id' | 'subgraphError'>>;
  datas?: SubscriptionResolver<Array<ResolversTypes['Data']>, "datas", ParentType, ContextType, RequireFields<SubscriptiondatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  stats_collection?: SubscriptionResolver<Array<ResolversTypes['Stats']>, "stats_collection", ParentType, ContextType, RequireFields<Subscriptionstats_collectionArgs, 'skip' | 'first' | 'interval' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type SwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Swap'] = ResolversParentTypes['Swap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  CLPoolManager_id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sqrtPriceX96?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  protocolFee?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnpausedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Unpaused'] = ResolversParentTypes['Unpaused']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WalletResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Wallet'] = ResolversParentTypes['Wallet']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numberDeploymentsPool?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  locks?: Resolver<Array<ResolversTypes['Lock']>, ParentType, ContextType, RequireFields<WalletlocksArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  CLPoolManagerInitialize?: CLPoolManagerInitializeResolvers<ContextType>;
  Data?: DataResolvers<ContextType>;
  DecreaseLiquidityEvent?: DecreaseLiquidityEventResolvers<ContextType>;
  Donate?: DonateResolvers<ContextType>;
  DynamicLPFeeUpdated?: DynamicLPFeeUpdatedResolvers<ContextType>;
  EventCollection?: EventCollectionResolvers<ContextType>;
  ExtendLockEvent?: ExtendLockEventResolvers<ContextType>;
  InitializeEvent?: InitializeEventResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  LiquidityAddedEvent?: LiquidityAddedEventResolvers<ContextType>;
  Lock?: LockResolvers<ContextType>;
  ModifyLiquidity?: ModifyLiquidityResolvers<ContextType>;
  OwnershipTransferred?: OwnershipTransferredResolvers<ContextType>;
  PausableRoleGranted?: PausableRoleGrantedResolvers<ContextType>;
  PausableRoleRevoked?: PausableRoleRevokedResolvers<ContextType>;
  Paused?: PausedResolvers<ContextType>;
  Pool?: PoolResolvers<ContextType>;
  ProtocolFeeControllerUpdated?: ProtocolFeeControllerUpdatedResolvers<ContextType>;
  ProtocolFeeUpdated?: ProtocolFeeUpdatedResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Stats?: StatsResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Swap?: SwapResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  Token?: TokenResolvers<ContextType>;
  Unpaused?: UnpausedResolvers<ContextType>;
  Wallet?: WalletResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = Univ4LockerTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const univ4LockerTransforms = [];
const additionalTypeDefs = [] as any[];
const univ4LockerHandler = new GraphqlHandler({
              name: "univ4-locker",
              config: {"endpoint":"https://api.studio.thegraph.com/query/64359/univ4-locker/v0.0.5"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("univ4-locker"),
              logger: logger.child("univ4-locker"),
              importFn,
            });
sources[0] = {
          name: 'univ4-locker',
          handler: univ4LockerHandler,
          transforms: univ4LockerTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })
const documentHashMap = {
        "456aa60ce6b893c3f40cced72b9a2f397df70b53fa70904eadbe753237b94c86": AllPoolsQueryDocument
      }
additionalEnvelopPlugins.push(usePersistedOperations({
        getPersistedOperation(key) {
          return documentHashMap[key];
        },
        ...{}
      }))

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: AllPoolsQueryDocument,
        get rawSDL() {
          return printWithCache(AllPoolsQueryDocument);
        },
        location: 'AllPoolsQueryDocument.graphql',
        sha256Hash: '456aa60ce6b893c3f40cced72b9a2f397df70b53fa70904eadbe753237b94c86'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type AllPoolsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPoolsQueryQuery = { pools: Array<(
    Pick<Pool, 'id'>
    & { locks: Array<Pick<Lock, 'id'>> }
  )> };


export const AllPoolsQueryDocument = gql`
    query AllPoolsQuery {
  pools {
    id
    locks {
      id
    }
  }
}
    ` as unknown as DocumentNode<AllPoolsQueryQuery, AllPoolsQueryQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    AllPoolsQuery(variables?: AllPoolsQueryQueryVariables, options?: C): Promise<AllPoolsQueryQuery> {
      return requester<AllPoolsQueryQuery, AllPoolsQueryQueryVariables>(AllPoolsQueryDocument, variables, options) as Promise<AllPoolsQueryQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;