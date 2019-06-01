export type positionType = 'top' | 'right' | 'bottom' | 'left' | 'center';

export interface PopupShape {
  visible?: boolean;
  children: React.ReactNode;
  mask?: boolean;
  position?: positionType;
  maskClosable?: boolean;
  onClose?: () => void;
  node?: HTMLElement;
  wrapClassName?: string;
  stopScrollUnderMask?: boolean;
  destroyOnClose?: boolean;
}
