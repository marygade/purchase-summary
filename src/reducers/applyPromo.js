export default function discount(state = 0, action) {
  switch (action.type) {
    case "DISCOUNT":
      return 10;
    default:
      return state;
  }
}
