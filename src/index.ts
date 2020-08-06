type Callback<Result> = (err: Error | null, result?: Result) => void;

type Handler<Event, Context, Result> =
  (event: Event, context: Context, callback?: Callback<Result>) => void | Promise<Result>;

export function callbackify<Event = any, Context = any, Result = any>(
  lambda: Handler<Event, Context, Result>
): (event: Event, context: Context, callback: Callback<Result>) => void {
  if (lambda.length === 3) {
    return lambda;
  } else {
    return (event: Event, context: Context, callback: Callback<Result>) =>
      (lambda(event, context) as Promise<Result>)
        .then(result => callback(null, result), callback);
  }
}
