// ===========================================
// UNITY OS
// Base Engine
// Version: 1.0
// ===========================================

export abstract class BaseEngine {

  protected readonly version = "1.0";

  getVersion(): string {
    return this.version;
  }

  getName(): string {
    return this.constructor.name;
  }

}