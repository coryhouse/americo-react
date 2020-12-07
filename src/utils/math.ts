/* Pure function benefits:
1. Easy to test.
2. No side-effects
3. Idempotent (always returns the same thing for the same args).
4. Depends on no outside state. only uses the args passed in.
5. Composable.
*/
export function add(x: number, y: number) {
  return x + y;
}
