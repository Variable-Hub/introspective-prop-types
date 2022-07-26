import PropTypes from 'prop-types';
declare type Check = PropTypes.Requireable<any>;
declare type WithProperty<T> = T & {
    [property: string]: any;
};
export declare function addType<T extends Check>(propType: T, value: string): WithProperty<T>;
export declare function addArg<T extends Check>(propType: T, value: any): WithProperty<T>;
export declare function addRequired<T extends Check>(propType: T): WithProperty<T>;
export {};
