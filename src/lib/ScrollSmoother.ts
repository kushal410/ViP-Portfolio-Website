export class ScrollSmoother {
  static create(options: any) {
    const instance = {
      options,
      scrollTop: (v: number) => window.scrollTo({ top: v, behavior: "instant" as any }),
      paused: () => {},
      scrollTo: (target: any, smooth = true) => {
        try {
          const el = document.querySelector(target as string);
          if (el) el.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
        } catch (e) {}
      },
    };
    return instance;
  }

  static refresh(_force?: boolean) {
    // no-op for shim
  }
}

export default ScrollSmoother;
