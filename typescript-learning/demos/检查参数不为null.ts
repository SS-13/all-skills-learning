type NonNullableType = string | number | null | undefined;

function showType(args: NonNullable<NonNullableType>) {
  console.log(args);
}

// showType(null)
type StringMap<T> = {
  [P in keyof T]: string;
};

function showType2(args: StringMap<{ id: number; name: string }>) {
  console.log(args);
}

showType2({ id: "1", name: "test" });
