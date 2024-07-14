// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace Univ4LockerTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

  export type QuerySdk = {
      /** null **/
  eventCollection: InContextSdkMethod<Query['eventCollection'], QueryeventCollectionArgs, MeshContext>,
  /** null **/
  eventCollections: InContextSdkMethod<Query['eventCollections'], QueryeventCollectionsArgs, MeshContext>,
  /** null **/
  pool: InContextSdkMethod<Query['pool'], QuerypoolArgs, MeshContext>,
  /** null **/
  pools: InContextSdkMethod<Query['pools'], QuerypoolsArgs, MeshContext>,
  /** null **/
  lock: InContextSdkMethod<Query['lock'], QuerylockArgs, MeshContext>,
  /** null **/
  locks: InContextSdkMethod<Query['locks'], QuerylocksArgs, MeshContext>,
  /** null **/
  initializeEvent: InContextSdkMethod<Query['initializeEvent'], QueryinitializeEventArgs, MeshContext>,
  /** null **/
  initializeEvents: InContextSdkMethod<Query['initializeEvents'], QueryinitializeEventsArgs, MeshContext>,
  /** null **/
  wallet: InContextSdkMethod<Query['wallet'], QuerywalletArgs, MeshContext>,
  /** null **/
  wallets: InContextSdkMethod<Query['wallets'], QuerywalletsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  decreaseLiquidityEvent: InContextSdkMethod<Query['decreaseLiquidityEvent'], QuerydecreaseLiquidityEventArgs, MeshContext>,
  /** null **/
  decreaseLiquidityEvents: InContextSdkMethod<Query['decreaseLiquidityEvents'], QuerydecreaseLiquidityEventsArgs, MeshContext>,
  /** null **/
  extendLockEvent: InContextSdkMethod<Query['extendLockEvent'], QueryextendLockEventArgs, MeshContext>,
  /** null **/
  extendLockEvents: InContextSdkMethod<Query['extendLockEvents'], QueryextendLockEventsArgs, MeshContext>,
  /** null **/
  liquidityAddedEvent: InContextSdkMethod<Query['liquidityAddedEvent'], QueryliquidityAddedEventArgs, MeshContext>,
  /** null **/
  liquidityAddedEvents: InContextSdkMethod<Query['liquidityAddedEvents'], QueryliquidityAddedEventsArgs, MeshContext>,
  /** null **/
  donate: InContextSdkMethod<Query['donate'], QuerydonateArgs, MeshContext>,
  /** null **/
  donates: InContextSdkMethod<Query['donates'], QuerydonatesArgs, MeshContext>,
  /** null **/
  dynamicLPFeeUpdated: InContextSdkMethod<Query['dynamicLPFeeUpdated'], QuerydynamicLPFeeUpdatedArgs, MeshContext>,
  /** null **/
  dynamicLPFeeUpdateds: InContextSdkMethod<Query['dynamicLPFeeUpdateds'], QuerydynamicLPFeeUpdatedsArgs, MeshContext>,
  /** null **/
  clpoolManagerInitialize: InContextSdkMethod<Query['clpoolManagerInitialize'], QueryclpoolManagerInitializeArgs, MeshContext>,
  /** null **/
  clpoolManagerInitializes: InContextSdkMethod<Query['clpoolManagerInitializes'], QueryclpoolManagerInitializesArgs, MeshContext>,
  /** null **/
  modifyLiquidity: InContextSdkMethod<Query['modifyLiquidity'], QuerymodifyLiquidityArgs, MeshContext>,
  /** null **/
  modifyLiquidities: InContextSdkMethod<Query['modifyLiquidities'], QuerymodifyLiquiditiesArgs, MeshContext>,
  /** null **/
  ownershipTransferred: InContextSdkMethod<Query['ownershipTransferred'], QueryownershipTransferredArgs, MeshContext>,
  /** null **/
  ownershipTransferreds: InContextSdkMethod<Query['ownershipTransferreds'], QueryownershipTransferredsArgs, MeshContext>,
  /** null **/
  pausableRoleGranted: InContextSdkMethod<Query['pausableRoleGranted'], QuerypausableRoleGrantedArgs, MeshContext>,
  /** null **/
  pausableRoleGranteds: InContextSdkMethod<Query['pausableRoleGranteds'], QuerypausableRoleGrantedsArgs, MeshContext>,
  /** null **/
  pausableRoleRevoked: InContextSdkMethod<Query['pausableRoleRevoked'], QuerypausableRoleRevokedArgs, MeshContext>,
  /** null **/
  pausableRoleRevokeds: InContextSdkMethod<Query['pausableRoleRevokeds'], QuerypausableRoleRevokedsArgs, MeshContext>,
  /** null **/
  paused: InContextSdkMethod<Query['paused'], QuerypausedArgs, MeshContext>,
  /** null **/
  pauseds: InContextSdkMethod<Query['pauseds'], QuerypausedsArgs, MeshContext>,
  /** null **/
  protocolFeeControllerUpdated: InContextSdkMethod<Query['protocolFeeControllerUpdated'], QueryprotocolFeeControllerUpdatedArgs, MeshContext>,
  /** null **/
  protocolFeeControllerUpdateds: InContextSdkMethod<Query['protocolFeeControllerUpdateds'], QueryprotocolFeeControllerUpdatedsArgs, MeshContext>,
  /** null **/
  protocolFeeUpdated: InContextSdkMethod<Query['protocolFeeUpdated'], QueryprotocolFeeUpdatedArgs, MeshContext>,
  /** null **/
  protocolFeeUpdateds: InContextSdkMethod<Query['protocolFeeUpdateds'], QueryprotocolFeeUpdatedsArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<Query['swap'], QueryswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<Query['swaps'], QueryswapsArgs, MeshContext>,
  /** null **/
  unpaused: InContextSdkMethod<Query['unpaused'], QueryunpausedArgs, MeshContext>,
  /** null **/
  unpauseds: InContextSdkMethod<Query['unpauseds'], QueryunpausedsArgs, MeshContext>,
  /** null **/
  data: InContextSdkMethod<Query['data'], QuerydataArgs, MeshContext>,
  /** null **/
  datas: InContextSdkMethod<Query['datas'], QuerydatasArgs, MeshContext>,
  /** Collection of aggregated `Stats` values **/
  stats_collection: InContextSdkMethod<Query['stats_collection'], Querystats_collectionArgs, MeshContext>,
  /** null **/
  tokenSearch: InContextSdkMethod<Query['tokenSearch'], QuerytokenSearchArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  eventCollection: InContextSdkMethod<Subscription['eventCollection'], SubscriptioneventCollectionArgs, MeshContext>,
  /** null **/
  eventCollections: InContextSdkMethod<Subscription['eventCollections'], SubscriptioneventCollectionsArgs, MeshContext>,
  /** null **/
  pool: InContextSdkMethod<Subscription['pool'], SubscriptionpoolArgs, MeshContext>,
  /** null **/
  pools: InContextSdkMethod<Subscription['pools'], SubscriptionpoolsArgs, MeshContext>,
  /** null **/
  lock: InContextSdkMethod<Subscription['lock'], SubscriptionlockArgs, MeshContext>,
  /** null **/
  locks: InContextSdkMethod<Subscription['locks'], SubscriptionlocksArgs, MeshContext>,
  /** null **/
  initializeEvent: InContextSdkMethod<Subscription['initializeEvent'], SubscriptioninitializeEventArgs, MeshContext>,
  /** null **/
  initializeEvents: InContextSdkMethod<Subscription['initializeEvents'], SubscriptioninitializeEventsArgs, MeshContext>,
  /** null **/
  wallet: InContextSdkMethod<Subscription['wallet'], SubscriptionwalletArgs, MeshContext>,
  /** null **/
  wallets: InContextSdkMethod<Subscription['wallets'], SubscriptionwalletsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  decreaseLiquidityEvent: InContextSdkMethod<Subscription['decreaseLiquidityEvent'], SubscriptiondecreaseLiquidityEventArgs, MeshContext>,
  /** null **/
  decreaseLiquidityEvents: InContextSdkMethod<Subscription['decreaseLiquidityEvents'], SubscriptiondecreaseLiquidityEventsArgs, MeshContext>,
  /** null **/
  extendLockEvent: InContextSdkMethod<Subscription['extendLockEvent'], SubscriptionextendLockEventArgs, MeshContext>,
  /** null **/
  extendLockEvents: InContextSdkMethod<Subscription['extendLockEvents'], SubscriptionextendLockEventsArgs, MeshContext>,
  /** null **/
  liquidityAddedEvent: InContextSdkMethod<Subscription['liquidityAddedEvent'], SubscriptionliquidityAddedEventArgs, MeshContext>,
  /** null **/
  liquidityAddedEvents: InContextSdkMethod<Subscription['liquidityAddedEvents'], SubscriptionliquidityAddedEventsArgs, MeshContext>,
  /** null **/
  donate: InContextSdkMethod<Subscription['donate'], SubscriptiondonateArgs, MeshContext>,
  /** null **/
  donates: InContextSdkMethod<Subscription['donates'], SubscriptiondonatesArgs, MeshContext>,
  /** null **/
  dynamicLPFeeUpdated: InContextSdkMethod<Subscription['dynamicLPFeeUpdated'], SubscriptiondynamicLPFeeUpdatedArgs, MeshContext>,
  /** null **/
  dynamicLPFeeUpdateds: InContextSdkMethod<Subscription['dynamicLPFeeUpdateds'], SubscriptiondynamicLPFeeUpdatedsArgs, MeshContext>,
  /** null **/
  clpoolManagerInitialize: InContextSdkMethod<Subscription['clpoolManagerInitialize'], SubscriptionclpoolManagerInitializeArgs, MeshContext>,
  /** null **/
  clpoolManagerInitializes: InContextSdkMethod<Subscription['clpoolManagerInitializes'], SubscriptionclpoolManagerInitializesArgs, MeshContext>,
  /** null **/
  modifyLiquidity: InContextSdkMethod<Subscription['modifyLiquidity'], SubscriptionmodifyLiquidityArgs, MeshContext>,
  /** null **/
  modifyLiquidities: InContextSdkMethod<Subscription['modifyLiquidities'], SubscriptionmodifyLiquiditiesArgs, MeshContext>,
  /** null **/
  ownershipTransferred: InContextSdkMethod<Subscription['ownershipTransferred'], SubscriptionownershipTransferredArgs, MeshContext>,
  /** null **/
  ownershipTransferreds: InContextSdkMethod<Subscription['ownershipTransferreds'], SubscriptionownershipTransferredsArgs, MeshContext>,
  /** null **/
  pausableRoleGranted: InContextSdkMethod<Subscription['pausableRoleGranted'], SubscriptionpausableRoleGrantedArgs, MeshContext>,
  /** null **/
  pausableRoleGranteds: InContextSdkMethod<Subscription['pausableRoleGranteds'], SubscriptionpausableRoleGrantedsArgs, MeshContext>,
  /** null **/
  pausableRoleRevoked: InContextSdkMethod<Subscription['pausableRoleRevoked'], SubscriptionpausableRoleRevokedArgs, MeshContext>,
  /** null **/
  pausableRoleRevokeds: InContextSdkMethod<Subscription['pausableRoleRevokeds'], SubscriptionpausableRoleRevokedsArgs, MeshContext>,
  /** null **/
  paused: InContextSdkMethod<Subscription['paused'], SubscriptionpausedArgs, MeshContext>,
  /** null **/
  pauseds: InContextSdkMethod<Subscription['pauseds'], SubscriptionpausedsArgs, MeshContext>,
  /** null **/
  protocolFeeControllerUpdated: InContextSdkMethod<Subscription['protocolFeeControllerUpdated'], SubscriptionprotocolFeeControllerUpdatedArgs, MeshContext>,
  /** null **/
  protocolFeeControllerUpdateds: InContextSdkMethod<Subscription['protocolFeeControllerUpdateds'], SubscriptionprotocolFeeControllerUpdatedsArgs, MeshContext>,
  /** null **/
  protocolFeeUpdated: InContextSdkMethod<Subscription['protocolFeeUpdated'], SubscriptionprotocolFeeUpdatedArgs, MeshContext>,
  /** null **/
  protocolFeeUpdateds: InContextSdkMethod<Subscription['protocolFeeUpdateds'], SubscriptionprotocolFeeUpdatedsArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<Subscription['swap'], SubscriptionswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<Subscription['swaps'], SubscriptionswapsArgs, MeshContext>,
  /** null **/
  unpaused: InContextSdkMethod<Subscription['unpaused'], SubscriptionunpausedArgs, MeshContext>,
  /** null **/
  unpauseds: InContextSdkMethod<Subscription['unpauseds'], SubscriptionunpausedsArgs, MeshContext>,
  /** null **/
  data: InContextSdkMethod<Subscription['data'], SubscriptiondataArgs, MeshContext>,
  /** null **/
  datas: InContextSdkMethod<Subscription['datas'], SubscriptiondatasArgs, MeshContext>,
  /** Collection of aggregated `Stats` values **/
  stats_collection: InContextSdkMethod<Subscription['stats_collection'], Subscriptionstats_collectionArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["univ4-locker"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
