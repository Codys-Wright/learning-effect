import { PgClient } from "@effect/sql-pg";
import { Layer } from "effect";
export declare const pgConfig: {
  readonly transformQueryNames: (self: string) => string;
  readonly transformResultNames: (self: string) => string;
  readonly types: {
    readonly 114: {
      readonly to: 25;
      readonly from: readonly [114];
      readonly parse: <A>(a: A) => A;
      readonly serialize: <A>(a: A) => A;
    };
    readonly 1082: {
      readonly to: 25;
      readonly from: readonly [1082];
      readonly parse: <A>(a: A) => A;
      readonly serialize: <A>(a: A) => A;
    };
    readonly 1114: {
      readonly to: 25;
      readonly from: readonly [1114];
      readonly parse: <A>(a: A) => A;
      readonly serialize: <A>(a: A) => A;
    };
    readonly 1184: {
      readonly to: 25;
      readonly from: readonly [1184];
      readonly parse: <A>(a: A) => A;
      readonly serialize: <A>(a: A) => A;
    };
    readonly 3802: {
      readonly to: 25;
      readonly from: readonly [3802];
      readonly parse: <A>(a: A) => A;
      readonly serialize: <A>(a: A) => A;
    };
  };
};
export declare const PgLive: Layer.Layer<
  PgClient.PgClient | import("@effect/sql/SqlClient").SqlClient,
  import("effect/ConfigError").ConfigError | import("@effect/sql/SqlError").SqlError,
  never
>;
//# sourceMappingURL=database.d.ts.map
