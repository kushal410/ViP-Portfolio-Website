export class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  private targets: HTMLElement[] = [];

  constructor(target: any, _vars?: any) {
    const elements: HTMLElement[] = [];
    if (Array.isArray(target)) {
      target.forEach((sel: any) => {
        document.querySelectorAll(sel).forEach((el) => elements.push(el as HTMLElement));
      });
    } else if (typeof target === "string") {
      document.querySelectorAll(target).forEach((el) => elements.push(el as HTMLElement));
    } else if (target instanceof HTMLElement) {
      elements.push(target);
    } else if ((target as any).nodeType) {
      elements.push(target as HTMLElement);
    }

    this.targets = elements;

    elements.forEach((el) => {
      const text = el.textContent || "";
      el.innerHTML = "";
      const frag = document.createDocumentFragment();
      const words = text.split(/(\s+)/).filter(Boolean);
      words.forEach((w) => {
        const span = document.createElement("span");
        span.className = "split-word";
        span.textContent = w;
        frag.appendChild(span);
        this.words.push(span);
        // chars
        Array.from(w).forEach((ch) => {
          const cspan = document.createElement("span");
          cspan.className = "split-char";
          cspan.textContent = ch;
          span.appendChild(cspan);
          this.chars.push(cspan);
        });
      });
      el.appendChild(frag);
    });
  }

  revert() {
    this.targets.forEach((el) => {
      const text = Array.from(el.querySelectorAll(".split-word")).map((w) => w.textContent).join("");
      el.textContent = text;
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}

export default SplitText;
