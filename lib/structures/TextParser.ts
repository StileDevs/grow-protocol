export class TextParser {
  public data: Record<string, string | string[]>;

  constructor(input: string = "") {
    this.data = {};
    if (input) this.parse(input);
  }

  private parse(input: string) {
    const lines = input.split("\n");

    lines.forEach((line, i) => {
      if (!line.trim()) return; // Skip empty lines

      const [key, ...values] = line.split("|");
      const cleanKey = key || `arr-${i}`;
      this.data[cleanKey] = values.length > 1 ? values.map((v) => v?.replace(/[\uFFFD\x00]+$/g, "")) : values[0]?.replace(/[\uFFFD\x00]+$/g, "");
    });
  }
  public get(key: string): string | string[] | undefined {
    return this.data[key];
  }

  public set(key: string, value: string | string[]): void {
    this.data[key] = value;
  }

  public delete(key: string): void {
    delete this.data[key];
  }

  public toString(endMarker = false): string {
    const entries = Object.entries(this.data)
      .map(([key, value]) => `${key}|${Array.isArray(value) ? value.join("|") : value}`)
      .join("\n");

    return `${entries}${endMarker ? "\nRTENDMARKERBS1001" : ""}`;
  }
}
