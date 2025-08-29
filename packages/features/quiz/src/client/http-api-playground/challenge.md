#OBJECTIVE

- Do Not alter in anyway except for modifying the CountClient in @logic-cant-change.tsx
- make our own custom wrapper around AtomHttpApi, where instead of making it from the provided Api Right away, we instead take in the Api, analyze its group structure, and require an Api to be provided with Layer.provide that implements the same groups.

like

```tsx
export const CounterGroup = HttpApiGroup.make("counter")
  .add(HttpApiEndpoint.get("count", "/count").addSuccess(Schema.Number))
  .add(HttpApiEndpoint.post("increment", "/increment"))

// Define your api using the shared counter group
export class FeatureApi extends HttpApi.make("FeatureApi").add(CounterGroup){}
export class AppApi extends HttpApi.make("AppApi").add(CounterGroup).prefix("/app-api"){}

export class CountClient extends AtomHttpApi.Tag<CountClient>()("CountClient", {
  api: FeatureApi, //THIS HERE IS CURRENTLY INFLEXIBLE
  httpClient: FetchHttpClient.layer,
  baseUrl: "localhost:3000"
  transformClient: configureApiClient,
}) {}

const incrementAtom = CountClient.runtime.fn(Effect.fnUntraced(function*() {
  const client = yield* CountClient // Use the Tag to access the client
  yield* client.counter.increment()
}))

export function SomeComponent() {
  // Use `CountClient.mutation` for mutations
  const increment = useAtomSet(incrementAtom)

    //This component makes a post request to localhost:3000/counter/increment
  return (
        <Button
          onClick={() => increment()}
        >
          Increment Counter
        </Button>
  )
}

```

We need to make a service that we define a service that expect a layer provided to it. Then in a managed runtime, we provide versions of this service. so instead we would call

```ts
const incrementAtom = AtomService.CountClient.runtime.fn(
  Effect.fnUntraced(function* () {
    const client = yield* CountClient; // Use the Tag to access the client
    yield* client.counter.increment();
  }),
);
```

Because then, in our managed runtime, we could provide either AppApi,
