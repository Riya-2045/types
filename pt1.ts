//title case name
function formatName(name: string): string {
  return name
    .split(" ")
    .map(
      (word: String) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join(" ");
}
console.log(formatName("priti SarkaR"));
