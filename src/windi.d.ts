/* eslint-disable @typescript-eslint/no-empty-interface */
import { AttributifyAttributes } from './jsx';

declare module 'react' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface HTMLAttributes<T> extends AttributifyAttributes {}
}
