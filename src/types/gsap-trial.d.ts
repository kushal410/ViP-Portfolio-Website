declare module "gsap-trial/SplitText" {
  class SplitText {
    chars: any[];
    lines: any[];
    words: any[];

    constructor(target: any, vars?: any);

    revert(): void; // ✅ ADD THIS LINE
  }

  export { SplitText };
}