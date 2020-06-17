export interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export type NgmColor = 'primary' | 'accent' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'dark';
